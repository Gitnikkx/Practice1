import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import {Jamsfy} from "./molecules/Jamsfy/Jamsfy";
import {About} from "./molecules/About/About";
import {Timeline} from "./molecules/Timeline/Timeline";
import {End} from "./molecules/End/End";

function App() {
  return (
    <ThemeProvider theme={theme}>
  
  <Jamsfy/>
  <About/> 
  <Timeline/>
  <End/>
  </ThemeProvider>
  );
}
export default App;
