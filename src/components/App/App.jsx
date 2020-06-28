import React from "react";
import styled from "styled-components/macro";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import theme from "themes";
import setupStore from "store";

const Comp = styled.div`
  background: red;
  padding: 25px;
`;

function App() {
  return (
    <Provider store={setupStore()}>
      <ThemeProvider theme={theme}>
        <Comp> test </Comp>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
