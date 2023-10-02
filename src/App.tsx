import { ThemeProvider } from "styled-components";
import { Theme, ThemeType } from "../src/styles/Theme";
import { ComputerPartsProvider } from "./context/ComputerPartsContext";
import { SelectedItemsProvider } from "./context/SelectedItemsContext";
import Routes from "./routes";

function App(): JSX.Element {
  return (
    <ThemeProvider theme={Theme as ThemeType}>
      <ComputerPartsProvider>
        <SelectedItemsProvider>
            <Routes />
        </SelectedItemsProvider>
      </ComputerPartsProvider>
    </ThemeProvider>
  );
}

export default App;
