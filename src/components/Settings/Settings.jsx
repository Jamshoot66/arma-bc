import React, { useState } from "react";
import { WeaponSelect, GridSize, CenterGridSwitch } from "./Settings-ui";

function Settings() {
  const [gridSize, setGridSize] = useState(100);
  const [weapon, setWeapon] = useState("mk2");
  const [aimOnCenter, setAimOnCenter] = useState(true);

  return (
    <div>
      <WeaponSelect value={weapon} onChange={setWeapon} />
      <GridSize value={gridSize} onChange={setGridSize} />
      <CenterGridSwitch value={aimOnCenter} onChange={setAimOnCenter} />
    </div>
  );
}

export default Settings;
