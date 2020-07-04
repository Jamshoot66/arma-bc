/**
 * @description parse gps and slice it into x- y- coordinates
 * @param {string} gps
 * @return {object} coords
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
