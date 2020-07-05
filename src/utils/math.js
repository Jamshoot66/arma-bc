/**
 * @description convert angle in degrees to angle in radian
 * @param {number} deg
 * @return {number}
 */

export const radToDeg = (deg) => {
  return (deg * 180) / Math.PI;
};

/**
 * @description convert angle in radian to angle in mils
 * @param {number} deg
 * @return {number}
 */

export const radToMil = (deg) => {
  return (deg * 6400) / (2 * Math.PI);
};
