import { ReactElement } from "react";
import { BsDeviceHddFill, BsMotherboardFill } from "react-icons/bs";
import { BiSolidMicrochip } from "react-icons/bi";
import { GiProcessor } from "react-icons/gi";
import { FaMemory } from "react-icons/fa";

export interface Pieces {
  name: string;
  icon: ReactElement;
  category: string;
}

interface CategoryTexts {
  title: string;
  text: string;
}

interface CategoryTextsObject {
  [key: string]: CategoryTexts;
}

export const pieces: Pieces[] = [
  {
    name: "Processador",
    category: "Processor",
    icon: <GiProcessor />,
  },
  {
    name: "Placa Mãe",
    category: "Motherboard",
    icon: <BsMotherboardFill />,
  },
  {
    name: "Memória Ram",
    category: "Memory",
    icon: <FaMemory />,
  },
  {
    name: "Placa de Video",
    category: "VideoCard",
    icon: <BiSolidMicrochip />,
  },
  {
    name: "HD/SSD",
    category: "Storage",
    icon: <BsDeviceHddFill />,
  },
];

export const categoryTexts: CategoryTextsObject = {
  Processor: {
    title: "Potência e Desempenho",
    text: "Escolha o Processador",
  },
  Motherboard: {
    title: "Base do seu Sistema",
    text: "Encontre a Placa-Mãe",
  },
  Memory: {
    title: "Memória Eficiente  ",
    text: "Escolha a Memória RAM",
  },
  VideoCard: {
    title: "Gráficos Superiores",
    text: "Escolha a Placa de Vídeo",
  },
  Storage: {
    title: "Mais Armazenamento",
    text: "Escolha seu SSD/HD",
  },
};
