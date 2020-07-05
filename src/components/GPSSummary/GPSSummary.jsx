import React from "react";
import PropTypes from "prop-types";
import { Distance, Header, Direction, Height } from "./GPSSummary.ui.jsx";

function GPSSummary({ distance, height, direction }) {
  return (
    <React.Fragment>
      <Header />
      <Distance value={distance} />
      <Height value={height} />
      <Direction value={direction} />
    </React.Fragment>
  );
}

GPSSummary.propTypes = {
  distance: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  direction: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GPSSummary.defaultProps = {
  distance: "",
  height: "",
  direction: "",
};

export default GPSSummary;
