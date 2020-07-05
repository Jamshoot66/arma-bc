import React from "react";
import PropTypes from "prop-types";
import { Charge } from "./MortarElevations.ui.jsx";

class MortarElevations extends React.PureComponent {
  lerpMortarRangeTable = (distance, height, table) => {
    const heightCorrectionFactor = 100;

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < table.length; i++) {
      if (
        distance < table[0].distance ||
        distance > table[table.length - 1].distance
      ) {
        return 0;
      }

      if (distance === table[i].distance) {
        return (
          table[i].elevation + (table[i].dh * height) / heightCorrectionFactor
        );
      }

      if (distance < table[i].distance) {
        const factor =
          (distance - table[i - 1].distance) /
          (table[i].distance - table[i - 1].distance);
        return (
          factor * (table[i].elevation - table[i - 1].elevation) +
          table[i - 1].elevation +
          ((factor * (table[i].dh - table[i - 1].dh) + table[i - 1].dh) *
            height) /
            heightCorrectionFactor
        );
      }
    }

    return 0;
  };

  calcElevation = (distance, height, table) => {
    const elevation = Math.round(
      this.lerpMortarRangeTable(distance, height, table),
    );

    return elevation || "-";
  };

  render() {
    const { distance, height, rangeTables } = this.props;

    const charges = rangeTables.map((table) =>
      this.calcElevation(distance, height, table),
    );

    return (
      <React.Fragment>
        {charges.map((charge, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Charge key={index} chargeId={index} value={charge} />
        ))}
      </React.Fragment>
    );
  }
}

MortarElevations.propTypes = {
  distance: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rangeTables: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        distance: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        elevation: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        dh: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        time: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      }),
    ),
  ),
};

MortarElevations.defaultProps = {
  distance: "",
  height: "",
  rangeTables: [[{ distance: "", elevation: "", dh: "", time: "" }]],
};

export default MortarElevations;
