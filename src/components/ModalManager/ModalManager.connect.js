import { connect } from "react-redux";

import ModalManager from "./ModalManager";

const mapStateToProps = (store) => ({
  isModalOpened: store.modal.isModalOpened,
  modal: store.modal.modal,
});

export default connect(mapStateToProps)(ModalManager);
