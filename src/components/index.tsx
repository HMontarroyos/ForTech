import { lazy } from "react";

const Header = lazy(async () => await import("./Header"));
const Loading = lazy(async () => await import("./Loading"));
const Footer = lazy(async () => await import("./Footer"));

export { Header, Footer, Loading };
