import { connect } from "react-redux";
import { getDistance, getHeight, getDirection } from "store/selectors";
import GPSSummary from "./GPSSummary.jsx";

const mapStateToProps = (store) => {
  return {
    distance: getDistance(store),
    height: getHeight(store),
    direction: getDirection(store),
  };
};

export default connect(mapStateToProps)(GPSSummary);
