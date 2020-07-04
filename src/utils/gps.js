/**
 * @description parse gps and slice it into x- y- coordinates
 * @param {string} gps
 * @return {object|null} coords
 */
export const parseGPS = (gps) => {
  if (typeof gps !== "string" || (gps?.length !== 6 && gps?.length !== 8))
    return null;

  const divider = gps.length / 2;
  const fractionalPow = divider - 3;
  return {
    x: gps.slice(0, divider) / 10 ** fractionalPow,
    y: gps.slice(divider) / 10 ** fractionalPow,
  };
};

/**
 * @description parse gps and slice it into x- y- coordinates
 * @param {number|string} x
 * @param {number|string} y
 * @return {object|null} gps coords
 */
export const calcGPS = (x, y) => {
  if (!x || !y) return null;
  const parsedX = String(Math.floor(x));
  const parsedY = String(Math.floor(y));

  const maxCoordLength = Math.max(parsedX.length, parsedY.length);
  const leadingNullsX = maxCoordLength - parsedX.length;
  const gpsX = new Array(leadingNullsX).fill("0").join("") + parsedX;
  const leadingNullsY = maxCoordLength - parsedY.length;
  const gpsY = new Array(leadingNullsY).fill("0").join("") + parsedY;

  return { gps: `${gpsX}${gpsY}` };
};
