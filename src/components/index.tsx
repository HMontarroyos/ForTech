import { lazy } from "react";
import CardPieces from "./CardPieces";
import GridPieces from "./GridPieces";
import ButtonProduct from "./ButtonProduct";
import Progress from "./Progress";
import Checkbox from "./Checkbox";
import ModalPieces from "./ModalPieces";

const Header = lazy(async () => await import("./Header"));
const Loading = lazy(async () => await import("./Loading"));

export {
  Header,
  Loading,
  CardPieces,
  GridPieces,
  ButtonProduct,
  Progress,
  Checkbox,
  ModalPieces,
};
