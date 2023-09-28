import React, { createContext, useContext, useState, useEffect } from "react";

interface Part {
  name: string;
  image: string;
  price: number;
}

interface ComputerParts {
    Processor: Part[];
    Motherboard: Part[];
  Memory: Part[];
  VideoCard: Part[];
  Storage: Part[];
}

interface ComputerPartsContextType {
  parts: ComputerParts | null;
  setParts: React.Dispatch<React.SetStateAction<ComputerParts | null>>;
}

const ComputerPartsContext = createContext<ComputerPartsContextType | null>(
  null
);

interface ComputerPartsProviderProps {
  children: React.ReactNode;
}

export const ComputerPartsProvider: React.FC<ComputerPartsProviderProps> = ({
  children,
}) => {
  const [parts, setParts] = useState<ComputerParts | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/computerPartsData.json');
        const data = await response.json();
        setParts(data);
      } catch (error) {
        console.error('Erro ao carregar os dados:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <ComputerPartsContext.Provider value={{ parts, setParts }}>
      {children}
    </ComputerPartsContext.Provider>
  );
};

export const useComputerParts = () => {
  const context = useContext(ComputerPartsContext);
  if (context === null) {
    throw new Error(
      "useComputerParts deve ser usado dentro de um ComputerPartsProvider"
    );
  }
  return context;
};
