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
    title: "Estamos no Início",
    text: "Selecione o Processador",
  },
  Motherboard: {
    title: "Outro Título",
    text: "Outro Texto para Motherboard",
  },
  Memory: {
    title: "Título para Memória",
    text: "Texto para Memória",
  },
  VideoCard: {
    title: "Título para Placa de Vídeo",
    text: "Texto para Placa de Vídeo",
  },
  Storage: {
    title: "Título para Armazenamento",
    text: "Texto para Armazenamento",
  },
};
