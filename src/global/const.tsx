import { ReactElement } from "react";
import { BsDeviceHddFill, BsMotherboardFill } from "react-icons/bs";
import { BiSolidMicrochip } from "react-icons/bi";
import { GiProcessor } from "react-icons/gi";
import { FaMemory } from "react-icons/fa";

export interface Pieces {
  name: string;
  icon: ReactElement;
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
    icon: <GiProcessor />,
  },
  {
    name: "Placa Mãe",
    icon: <BsMotherboardFill />,
  },
  {
    name: "Memória Ram",
    icon: <FaMemory />,
  },
  {
    name: "Placa de Video",
    icon: <BiSolidMicrochip />,
  },
  {
    name: "HD/SSD",
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
