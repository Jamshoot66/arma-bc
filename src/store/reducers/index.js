import { combineReducers } from "redux";
import { modal } from "./modal";
import { settings } from "./settings";
import { gps } from "./gps";
import { rangeTable } from "./rangeTable";
import { shootingTable } from "./shootingTable";

export default combineReducers({
  modal,
  settings,
  gps,
  rangeTable,
  shootingTable,
});
