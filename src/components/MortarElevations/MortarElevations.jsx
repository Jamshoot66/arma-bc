import React from "react";
import { Charge } from "./MortarElevations.ui.jsx";

function MortarElevations() {
  return (
    <React.Fragment>
      <Charge chargeId={0} value={123} />
      <Charge chargeId={1} value={234} />
      <Charge chargeId={2} value={567} />
      <Charge chargeId={3} value="-" />
    </React.Fragment>
  );
}

export default MortarElevations;
