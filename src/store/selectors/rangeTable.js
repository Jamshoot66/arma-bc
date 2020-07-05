import { createSelector } from "reselect";

const rangeTable = (store) => store.rangeTable;

export const getRangeTable = createSelector(rangeTable, (data) => data.table);
