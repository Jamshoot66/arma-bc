import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader } from "mdbreact";
import actions from "store/actions";

function ModalContainer(props) {
  const { title, component } = props;
  const dispatch = useDispatch();
  const closeModal = () => dispatch(actions.closeModal());
  return (
    <MDBContainer>
      <MDBModal
        isOpen
        toggle={closeModal}
        size="lg"
        inline={false}
        noClickableBodyWithoutBackdrop
        overflowScroll
      >
        <MDBModalHeader toggle={closeModal}>{title}</MDBModalHeader>
        <MDBModalBody>{component}</MDBModalBody>
      </MDBModal>
    </MDBContainer>
  );
}

ModalContainer.propTypes = {
  title: PropTypes.string.isRequired,
  component: PropTypes.element.isRequired,
};

export default ModalContainer;
