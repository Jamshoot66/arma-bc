import React from "react";
import { Distance, Header, Direction, Height } from "./GPSSummary.ui.jsx";

function GPSSummary() {
  return (
    <React.Fragment>
      <Header />
      <Distance value={321} />
      <Height value={123} />
      <Direction value={123} />
    </React.Fragment>
  );
}

export default GPSSummary;
