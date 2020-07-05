import React, { memo } from "react";
import PropTypes from "prop-types";
import { MDBInput, MDBRow, MDBCol } from "mdbreact";

export function GPSForm(props) {
  const { gps, onGPSChange, height, caption, x, y, onCoordsChange } = props;
  return (
    <React.Fragment>
      <MDBRow>
        <MDBCol>
          <h4 className="mb-3">{caption}</h4>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol size="8">
          <MDBInput
            label="GPS"
            value={gps}
            containerClass="mb-0 mt-2"
            onChange={(e) => onGPSChange(e.target.value)}
          />
        </MDBCol>
        <MDBCol size="4">
          <MDBInput
            label="Высота, м"
            value={height}
            containerClass="mb-0 mt-2"
          />
        </MDBCol>
      </MDBRow>
      <MDBRow className="mb-5">
        <MDBCol size="6">
          <MDBInput
            label="Координата X"
            type="number"
            value={x}
            containerClass="mb-0 mt-2"
            onChange={(e) => onCoordsChange({ x: e.target.value })}
          />
        </MDBCol>
        <MDBCol size="6">
          <MDBInput
            label="Координата Y"
            type="number"
            value={y}
            containerClass="mb-0 mt-2"
            onChange={(e) => onCoordsChange({ y: e.target.value })}
          />
        </MDBCol>
      </MDBRow>
    </React.Fragment>
  );
}

GPSForm.propTypes = {
  caption: PropTypes.string.isRequired,
  onGPSChange: PropTypes.func,
  onCoordsChange: PropTypes.func,
  gps: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

GPSForm.defaultProps = {
  onGPSChange: () => {},
  onCoordsChange: () => {},
};

export const ShooterForm = memo((props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <GPSForm caption="Позиция стрелка" {...props} />
));

export const TargetForm = memo((props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <GPSForm caption="Позиция цели" {...props} />
));
