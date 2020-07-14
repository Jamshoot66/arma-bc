import styled from "styled-components/macro";

export const Wrapper = styled.div`
  display: flex;
  align-self: flex-start;
`;

export const Button = styled.button`
  border: 1px solid #dddddd;
  background-color: #dddddd;
  width: 2rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  appearance: none;
`;

export const AddButton = styled(Button)`
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;

  :before {
    content: "";
    position: absolute;
    width: 10px;
    height: 2px;
    border-radius: 1px;
    background: #186860;
  }

  :after {
    position: absolute;
    content: "";
    width: 10px;
    height: 2px;
    background: #186860;
    border-radius: 1px;
    transform: rotateZ(90deg);
  }
`;

export const SubButton = styled(Button)`
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;

  :before {
    content: "";
    position: absolute;
    width: 10px;
    height: 2px;
    border-radius: 1px;
    background: #186860;
  }
`;

export const Input = styled.input`
  width: 2.5rem;
  text-align: center;
  border: 1px solid #dddddd;
  box-sizing: content-box;
  appearance: none;
  border-radius: 0;
  padding: 3px 0;
  margin: 0;
`;
