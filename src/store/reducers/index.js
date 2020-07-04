import { combineReducers } from "redux";
import { modal } from "./modal";
import { settings } from "./settings";
import { gps } from "./gps";

export default combineReducers({ modal, settings, gps });
