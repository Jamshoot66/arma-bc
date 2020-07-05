import React from "react";
import PropTypes from "prop-types";
import { MDBRow, MDBCol } from "mdbreact";
import Output from "components/UI/Output";

export const Header = () => (
  <MDBRow className="mb-3">
    <MDBCol>
      <h4>Результат</h4>
    </MDBCol>
  </MDBRow>
);

export const Distance = ({ value }) => (
  <Output value={value} label="Дистанция" />
);

Distance.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Distance.defaultProps = {
  value: "",
};

export const Direction = ({ value }) => (
  <Output value={value} label="Направление" />
);

Direction.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Direction.defaultProps = {
  value: "",
};

export const Height = ({ value }) => (
  <Output value={value} label="Разница высот" />
);

Height.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Height.defaultProps = {
  value: "",
};
