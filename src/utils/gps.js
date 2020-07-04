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
 * @return {string|null} gps coords
 */
export const calcGPS = (x, y) => {
  if (!x || !y) return null;

  return `${Math.floor(x)}${Math.floor(y)}`;
};
