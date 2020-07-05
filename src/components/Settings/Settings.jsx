import React, { useState, useEffect } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import actions from "store/actions";
import { WeaponSelect, GridSize, CenterGridSwitch } from "./Settings.ui";

function Settings() {
  const settings = useSelector((store) => store.settings, shallowEqual);
  const [gridSize, setGridSize] = useState(settings.gridSize);
  const [weapon, setWeapon] = useState(settings.weapon);
  const [aimOnCenter, setAimOnCenter] = useState(settings.aimOnCenter);

  const dispatch = useDispatch();

  useEffect(() => {
    const newSettings = { ...settings, gridSize, weapon, aimOnCenter };
    dispatch(actions.saveSettings(newSettings));
  }, [aimOnCenter, dispatch, gridSize, settings, weapon]);

  return (
    <div>
      <WeaponSelect value={weapon} onChange={setWeapon} />
      <GridSize value={gridSize} onChange={setGridSize} />
      <CenterGridSwitch value={aimOnCenter} onChange={setAimOnCenter} />
    </div>
  );
}

export default Settings;
