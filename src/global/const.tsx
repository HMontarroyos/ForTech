import { ReactElement } from "react";
import { BsDeviceHddFill, BsMotherboardFill } from "react-icons/bs";
import {BiSolidMicrochip} from "react-icons/bi"
import { GiProcessor } from "react-icons/gi";
import { FaMemory } from "react-icons/fa";


export interface Pieces {
  name: string;
  icon: ReactElement
}

export const pieces: Pieces[] = [
  {
    name: "Processador",
    icon: <GiProcessor/>
  }, 
  {
    name: "Placa Mãe",
    icon: <BsMotherboardFill/>
  },
  {
    name: "Memória Ram",
    icon: <FaMemory/>
  },
  {
    name: "Placa de Video",
    icon: <BiSolidMicrochip/>
  },
  {
    name: "HD/SSD",
    icon: <BsDeviceHddFill/>
  }
];
