import { mk6 } from "data";
// import actionType from "../actionTypes";

const initialState = {
  type: mk6.type,
  label: mk6.label,
  table: mk6.table,
};

export const rangeTable = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
