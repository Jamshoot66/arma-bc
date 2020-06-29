import styled from "styled-components/macro";
import { MDBBtn } from "mdbreact";

export const TabButton = styled(MDBBtn)`
  margin: 0;
  border-radius: 0;
  box-shadow: none;
  padding: 10px;
  flex-grow: 1;

  :first-of-type {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  :last-of-type {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;
