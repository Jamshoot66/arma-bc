import React from "react";
import styled from "styled-components/macro";

import "./App.css";

const Comp = styled.div`
  background: red;
  padding: 20px;
`;

function App() {
  return (
    <div className="App">
      <Comp>Comp </Comp>
    </div>
  );
}

export default App;
