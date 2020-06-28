import React from "react";
import { Caption, Wrapper, Settings, Bar } from "./Header-ui";

function Header() {
  return (
    <Wrapper>
      <Bar>
        <Caption>Header</Caption>
        <Settings onClick={() => console.log("click")} />
      </Bar>
    </Wrapper>
  );
}

export default Header;
