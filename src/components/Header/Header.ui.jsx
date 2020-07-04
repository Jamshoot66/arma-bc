import React from "react";
import styled from "styled-components/macro";
import { MDBRow, MDBBtn, MDBNavbar } from "mdbreact";

export const Wrapper = styled(MDBRow)`
  justify-content: center;
  align-items: center;
`;

export const Caption = styled.h2`
  font-size: 1.6rem;
  margin-right: auto;
  margin-bottom: 0;
`;

export const Bar = styled(MDBNavbar)`
  flex-grow: 1;
`;

export const HeaderButton = styled(MDBBtn)`
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
`;

export const Settings = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <HeaderButton {...props} outline>
    <i className="fas fa-tools fa-lg" />
  </HeaderButton>
);
