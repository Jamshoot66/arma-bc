import React from "react";
import { MDBInput } from "mdbreact";
import Switch from "components/UI/Switch";

// eslint-disable-next-line react/prop-types
export const WeaponSelect = ({ value, onChange }) => {
  return (
    <select
      className="browser-default custom-select pointer"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="mk6">Миномет Mk6 82мм</option>
      <option value="mk2">Миномет Mk2 82мм</option>
    </select>
  );
};

// eslint-disable-next-line react/prop-types
export const GridSize = ({ value, onChange }) => {
  return (
    <MDBInput
      type="number"
      label="Шаг сетки, метров"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

// eslint-disable-next-line react/prop-types
export const CenterGridSwitch = ({ value, onChange }) => (
  <Switch label="По центру квадрата" checked={value} onChange={onChange} />
);
