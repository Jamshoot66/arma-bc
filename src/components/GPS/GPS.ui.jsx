import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import { MDBInput, MDBRow, MDBCol } from "mdbreact";
import InputPlus from "components/UI/InputPlus";

// eslint-disable-next-line react/prop-types
const PositionNumber = ({ value, onChange }) => (
  <InputPlus min={1} value={value} onChange={onChange} />
);

// eslint-disable-next-line react/prop-types
const GPSInput = ({ value, onChange }) => (
  <MDBInput
    className="clear-input"
    label="GPS"
    type="number"
    value={value}
    containerClass="mb-0 mt-2"
    onChange={(e) => onChange(e.target.value)}
  />
);

// eslint-disable-next-line react/prop-types
const CoordInput = ({ value, label, onChange }) => (
  <MDBInput
    label={`Координата ${label}`}
    type="number"
    value={value}
    containerClass="mb-0 mt-2"
    onChange={(e) => onChange(e.target.value)}
  />
);

// eslint-disable-next-line react/prop-types
const CoordInputX = ({ value, onChange }) => (
  <CoordInput
    label="X"
    value={value}
    onChange={(newValue) => onChange({ x: newValue })}
  />
);

// eslint-disable-next-line react/prop-types
const CoordYInput = ({ value, onChange }) => (
  <CoordInput
    label="Y"
    value={value}
    onChange={(newValue) => onChange({ y: newValue })}
  />
);

// eslint-disable-next-line react/prop-types
const HeightInput = ({ value, onChange }) => (
  <MDBInput
    label="Высота, м"
    type="number"
    value={value}
    containerClass="mb-0 mt-2"
    onChange={(e) => onChange(e.target.value)}
  />
);

export function GPSForm(props) {
  const {
    gps,
    onGPSChange,
    height,
    onHeightChange,
    caption,
    x,
    y,
    onCoordsChange,
  } = props;

  const [positionNumber, setPositionNumber] = useState(0);

  return (
    <React.Fragment>
      <MDBRow>
        <MDBCol>
          <h4 className="mb-3">{caption}</h4>
        </MDBCol>
        <MDBCol size="4">
          <PositionNumber value={positionNumber} onChange={setPositionNumber} />
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol size="8">
          <GPSInput value={gps} onChange={onGPSChange} />
        </MDBCol>
        <MDBCol size="4">
          <HeightInput value={height} onChange={onHeightChange} />
        </MDBCol>
      </MDBRow>
      <MDBRow className="mb-5">
        <MDBCol size="6">
          <CoordInputX value={x} onChange={onCoordsChange} />
        </MDBCol>
        <MDBCol size="6">
          <CoordYInput value={y} onChange={onCoordsChange} />
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
  onHeightChange: PropTypes.func,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

GPSForm.defaultProps = {
  onGPSChange: () => {},
  onCoordsChange: () => {},
  onHeightChange: () => {},
};

export const ShooterForm = memo((props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <GPSForm caption="Позиция стрелка" {...props} />
));

export const TargetForm = memo((props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <GPSForm caption="Позиция цели" {...props} />
));
