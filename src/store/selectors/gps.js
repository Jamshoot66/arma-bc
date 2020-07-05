import { createSelector } from "reselect";
import types from "types";

const gpsData = (store) => store.gps;

export const getGPSData = (who) =>
  createSelector(gpsData, (data) => ({
    gps: data[who]?.gps,
    height: data[who].height,
    x: data[who].x,
    y: data[who].y,
  }));

export const getShooterData = getGPSData(types.gps.SHOOTER_KEY);
export const getTargetData = getGPSData(types.gps.TARGET_KEY);
