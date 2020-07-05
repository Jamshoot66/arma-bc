import React from "react";
import PropTypes from "prop-types";

export const Switch = ({ label, checked, onChange }) => (
  <div className="custom-control custom-switch">
    <input
      type="checkbox"
      className="custom-control-input pointer"
      id="customSwitchesChecked"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
    />
    <label
      className="custom-control-label pointer"
      htmlFor="customSwitchesChecked"
    >
      {label}
    </label>
  </div>
);

Switch.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Switch;
