import GlobalStyles from "./theme/globalStyles";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import light from "./theme/light";
function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <div className="App">
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
