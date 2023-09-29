type Colors = {
  primary: string;
  secondary: string;
  tertiary: string;
  quartenary: string;
  background: string;
  text: string;
  disabledText: string;
  alert: string;
};

type Fonts = {
  title: string;
  text: string;
  subtitle: string;
  logo: string;
};

export type ThemeType = {
  colors: Colors;
  fonts: Fonts;
};

export const Theme: ThemeType = {
  colors: {
    primary: "#00AD6F",
    secondary: "#80FF00",
    tertiary: "#FFFFFF",
    quartenary: "#585F6F",
    background: "#A2C614",
    text: "#1B1B1B",
    disabledText: "#d3d3d3",
    alert: "#A3020D",
  },
  fonts: {
    title: "Croissant One, cursive",
    text: "Sofia Sans Condensed, sans-serif",
    subtitle: "Dosis, sans-serif",
    logo : "Pixelify Sans, cursive"
  },
};
