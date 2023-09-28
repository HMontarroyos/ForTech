import Routes from "./routes";
import { ThemeProvider } from "styled-components";
import { ComputerPartsProvider } from "./global/ComputerPartsContext";
import { Theme, ThemeType } from "../src/styles/Theme";

function App(): JSX.Element {
  return (
    <ThemeProvider theme={Theme as ThemeType}>
      <ComputerPartsProvider>
        <Routes />
      </ComputerPartsProvider>
    </ThemeProvider>
  );
}

export default App;
