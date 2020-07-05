import { MDBCol, MDBRow } from "mdbreact";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components/macro";

const Label = styled.div``;
const Value = styled.div``;

const Output = ({ label, value }) => (
  <MDBRow className="mt-2">
    <MDBCol size="7">
      <Label>{label}</Label>
    </MDBCol>
    <MDBCol size="5">
      <Value>{value}</Value>
    </MDBCol>
  </MDBRow>
);

Output.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Output.defaultProps = {
  value: "",
};

export default Output;
