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

/**
 * @description calculate distance between two points
 * @param {number} start.x
 * @param {number} start.y
 * @param {number} end.x
 * @param {number} end.y
 * @return {number}
 *
 * @usage countDistance({x:1, y:1}, {x:2, y:2}) -> ~1.41
 */
export const countDistance = (start, end) =>
  Math.sqrt((start.x - end.x) ** 2 + (start.y - end.y) ** 2);
