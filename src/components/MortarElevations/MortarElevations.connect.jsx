import { connect } from "react-redux";
import { getDistance, getHeight, getRangeTable } from "store/selectors";
import MortarElevations from "./MortarElevations.jsx";

const mapStateToProps = (store) => {
  return {
    distance: getDistance(store),
    height: getHeight(store),
    rangeTables: getRangeTable(store),
  };
};

export default connect(mapStateToProps)(MortarElevations);
