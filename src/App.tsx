import Routes from "./routes";
import { ThemeProvider } from "styled-components";
import { ComputerPartsProvider } from "./global/ComputerPartsContext";
import { Theme, ThemeType } from "../src/styles/Theme";
import { SelectedItemsProvider } from "./global/SelectedItemsContext";

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
