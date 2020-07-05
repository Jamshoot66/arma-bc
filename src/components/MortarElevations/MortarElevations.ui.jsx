import React from "react";
import PropTypes from "prop-types";
import Output from "components/UI/Output";

export const Charge = ({ value, chargeId }) => (
  <Output value={value} label={`Возвышение (заряд ${chargeId})`} />
);

Charge.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  chargeId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Charge.defaultProps = {
  value: "",
  chargeId: "",
};
