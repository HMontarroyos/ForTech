import { lazy } from "react";
import CardPieces from "./CardPieces";
import GridPieces from "./GridPieces";
import ButtonProduct from "./ButtonProduct";
import Progress from "./Progress";
import Checkbox from "./Checkbox";

const Header = lazy(async () => await import("./Header"));
const Loading = lazy(async () => await import("./Loading"));
const Footer = lazy(async () => await import("./Footer"));

export {
  Header,
  Footer,
  Loading,
  CardPieces,
  GridPieces,
  ButtonProduct,
  Progress,
  Checkbox,
};
