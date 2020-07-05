import { connect } from "react-redux";
import { getShooterData, getTargetData } from "store/selectors";
import actions from "store/actions";
import GPS from "./GPS";

const mapStateToProps = (store) => ({
  shooter: getShooterData(store),
  target: getTargetData(store),
});

const mapDispatchToProps = (dispatch) => ({
  setShooterGPS: (gps) => dispatch(actions.setGPS({ shooter: { gps } })),
  setShooterXY: ({ x, y }) => dispatch(actions.setXY({ shooter: { x, y } })),
  setShooterHeight: (height) =>
    dispatch(actions.setHeight({ shooter: { height } })),
  setTargetGPS: (gps) => dispatch(actions.setGPS({ target: { gps } })),
  setTargetXY: ({ x, y }) => dispatch(actions.setXY({ target: { x, y } })),
  setTargetHeight: (height) =>
    dispatch(actions.setHeight({ target: { height } })),
});

export default connect(mapStateToProps, mapDispatchToProps)(GPS);
