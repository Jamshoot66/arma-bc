import React from "react";
import PropTypes from "prop-types";
import types from "types";
import Settings from "components/Settings";
import ModalContainer from "./ModalContainer";

class ModalManager extends React.PureComponent {
  getComponentType = (component) => {
    switch (component) {
      case types.modal.MODAL_SETTINGS:
        return <Settings />;
      default:
        throw new Error("Unknown component");
    }
  };

  renderModal = () => {
    const { modal } = this.props;

    return modal ? (
      <ModalContainer
        title={modal?.title}
        component={this.getComponentType(modal?.component)}
      />
    ) : null;
  };

  render() {
    const { isModalOpened } = this.props;

    return isModalOpened ? this.renderModal() : null;
  }
}

ModalManager.propTypes = {
  isModalOpened: PropTypes.bool.isRequired,
  modal: PropTypes.shape({
    title: PropTypes.string,
    component: PropTypes.string,
  }).isRequired,
};

export default ModalManager;
