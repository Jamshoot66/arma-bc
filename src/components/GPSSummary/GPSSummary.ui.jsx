import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import { MDBRow, MDBCol } from "mdbreact";

export const Header = () => (
  <MDBRow className="mb-3">
    <MDBCol>
      <h4>Результат</h4>
    </MDBCol>
  </MDBRow>
);

const Label = styled.div``;
const Value = styled.div``;

const Element = ({ label, value }) => (
  <MDBRow className="mt-2">
    <MDBCol size="7">
      <Label>{label}</Label>
    </MDBCol>
    <MDBCol size="5">
      <Value>{value}</Value>
    </MDBCol>
  </MDBRow>
);

Element.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Element.defaultProps = {
  value: "",
};

export const Distance = ({ value }) => (
  <Element value={value} label="Дистанция" />
);

Distance.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Distance.defaultProps = {
  value: "",
};

export const Direction = ({ value }) => (
  <Element value={value} label="Направление" />
);

Direction.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Direction.defaultProps = {
  value: "",
};

export const Height = ({ value }) => (
  <Element value={value} label="Разница высот" />
);

Height.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Height.defaultProps = {
  value: "",
};
