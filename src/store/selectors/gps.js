import { createSelector } from "reselect";
import { calcDistance, calcAngle, radToMil } from "utils";

const gpsData = (store) => store.gps;
const settings = (store) => store.settings;

export const getGPSData = (who) =>
  createSelector(gpsData, (data) => ({
    gps: data[who]?.gps,
    height: data[who].height,
    x: data[who].x,
    y: data[who].y,
  }));

export const getShooterData = getGPSData("shooter");
export const getTargetData = getGPSData("target");

export const getDistance = createSelector(
  [gpsData, settings],
  (data, { gridSize }) => {
    const shooter = {
      x: data.shooter.x,
      y: data.shooter.y,
    };

    const target = {
      x: data.target.x,
      y: data.target.y,
    };

    const distance = calcDistance(shooter, target) * gridSize;
    return !isNaN(distance) ? Math.round(distance) : "";
  },
);

export const getHeight = createSelector(gpsData, ({ shooter, target }) => {
  const shooterHeight = shooter?.height;
  const targetHeight = target?.height;
  const height = targetHeight - shooterHeight;
  return !isNaN(height) ? Math.round(height) : "";
});

export const getDirection = createSelector(gpsData, (data) => {
  const shooter = {
    x: data.shooter.x,
    y: data.shooter.y,
  };

  const target = {
    x: data.target.x,
    y: data.target.y,
  };

  const directionRad = calcAngle(shooter, target);
  const directionMil =
    target.x - shooter.x < 0
      ? 6400 - radToMil(directionRad)
      : radToMil(directionRad);

  return !isNaN(directionMil) ? Math.round(directionMil) : "";
});
