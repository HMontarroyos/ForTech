import React, { createContext, useContext, useState, ReactNode } from "react";

interface SelectedItemsContextProps {
  selectedItems: Record<string, any>;
  addSelectedItem: (category: string, item: any) => void;
  removeSelectedItem: (category: string) => void;
}

const SelectedItemsContext = createContext<
  SelectedItemsContextProps | undefined
>(undefined);

interface SelectedItemsProviderProps {
  children: ReactNode;
}

export const SelectedItemsProvider: React.FC<SelectedItemsProviderProps> = ({
  children,
}) => {
  const [selectedItems, setSelectedItems] = useState<Record<string, any>>({});

  const addSelectedItem = (category: string, item: any) => {
    setSelectedItems((prevState) => ({ ...prevState, [category]: item }));
  };

  const removeSelectedItem = (category: string) => {
    setSelectedItems((prevState) => {
      const newSelectedItems = { ...prevState };
      delete newSelectedItems[category];
      return newSelectedItems;
    });
  };

  return (
    <SelectedItemsContext.Provider
      value={{ selectedItems, addSelectedItem, removeSelectedItem }}
    >
      {children}
    </SelectedItemsContext.Provider>
  );
};

export const useSelectedItems = () => {
  const context = useContext(SelectedItemsContext);
  if (context === undefined) {
    throw new Error(
      "useSelectedItems must be used within a SelectedItemsProvider"
    );
  }
  console.log("CONTEXT", context.selectedItems)
  return context;
};
