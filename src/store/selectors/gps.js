import { createSelector } from "reselect";

const gpsData = (store) => store.gps;

export const getGPSData = (who) =>
  createSelector(gpsData, (data) => ({
    gps: data[who]?.gps,
    height: data[who].height,
    x: data[who].x,
    y: data[who].y,
  }));

export const getShooterData = getGPSData("shooter");
export const getTargetData = getGPSData("target");
