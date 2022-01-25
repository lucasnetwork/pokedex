import GlobalStyles from "./theme/globalStyles";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import light from "./theme/light";
import Routes from "./routes";
import { ContextProvider } from "./services/context";

function App() {
  return (
    <ContextProvider>
      <ThemeProvider theme={light}>
        <GlobalStyles />
        <div className="App">
          <Routes />
        </div>
      </ThemeProvider>
    </ContextProvider>
  );
}

export default App;
