import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { Title } from "./atoms";
import {Box} from "./atoms/Box/Box";
import {Jamsfy} from "./molecules/Jamsfy/Jamsfy";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
       <Jamsfy/>
      </Box>
    </ThemeProvider>
  );
}
export default App;
