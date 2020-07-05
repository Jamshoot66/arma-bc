import React from "react";
import PropTypes from "prop-types";
import types from "types";
import Settings from "components/Settings";
import ModalContainer from "./ModalContainer";

class ModalManager extends React.PureComponent {
  getComponentType = (componentType) => {
    switch (componentType) {
      case types.modal.MODAL_SETTINGS.type:
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
  isModalOpened: PropTypes.bool,
  modal: PropTypes.oneOfType([
    PropTypes.shape({
      title: PropTypes.string,
      component: PropTypes.string,
    }),
    PropTypes.oneOf([null]),
  ]),
};

ModalManager.defaultProps = {
  isModalOpened: false,
  modal: null,
};

export default ModalManager;
