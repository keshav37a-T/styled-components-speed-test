import { createGlobalStyle } from "styled-components";
import Table from "../src/components/Table";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Roboto";
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <h1>Sample app made using Styled Components</h1>
      <Table />
    </div>
  );
}

export default App;
