import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { MDBContainer } from "mdbreact";
import theme from "themes";
import setupStore from "store";

import Header from "components/Header";

function App() {
  return (
    <Provider store={setupStore()}>
      <ThemeProvider theme={theme}>
        <MDBContainer>
          <Header />
        </MDBContainer>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
