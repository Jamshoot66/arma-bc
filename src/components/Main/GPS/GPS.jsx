import React from "react";
import { ShooterForm, TargetForm } from "./GPS.ui";

function GPS() {
  return (
    <div>
      <ShooterForm gps={100} height={123} x={1} y={2} />
      <TargetForm gps={321} height={123} x={3} y={4} />
    </div>
  );
}

export default GPS;
