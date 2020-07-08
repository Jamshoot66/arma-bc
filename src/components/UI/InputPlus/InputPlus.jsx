import React, { useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { Wrapper, AddButton, SubButton, Input } from "./InputPlus.ui.jsx";

const InputPlus = (props) => {
  const decrease = () => {
    const { min, value, onChange } = props;
    if (value > min) {
      onChange(value - 1);
    }
  };

  const increase = () => {
    const { max, value, onChange } = props;
    if (value < max) {
      onChange(value + 1);
    }
  };

  const { value, min, max, onChange } = props;

  const inputChange = useCallback(
    (inputValue) => {
      if (inputValue > max) {
        return onChange(max);
      }

      if (inputValue < min) {
        return onChange(min);
      }

      return onChange(inputValue);
    },
    [min, max, onChange],
  );

  useEffect(() => {
    inputChange();
  }, [inputChange]);

  return (
    <Wrapper className="def-number-input number-input">
      <SubButton onClick={decrease} className="minus" />
      <Input
        className="quantity"
        name="quantity"
        value={value}
        onChange={(e) => inputChange(Number(e.target.value))}
        type="number"
      />
      <AddButton onClick={increase} className="plus" />
    </Wrapper>
  );
};

InputPlus.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
};

InputPlus.defaultProps = {
  value: 0,
  min: -Number.MAX_SAFE_INTEGER,
  max: Number.MAX_SAFE_INTEGER,
  onChange: () => {},
};

export default InputPlus;
