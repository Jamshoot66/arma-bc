/**
 * @description convert angle in radian to angle in degrees
 * @param {number} rad
 * @return {number}
 */

export const radToDeg = (rad) => {
  return (rad * 180) / Math.PI;
};

/**
 * @description convert angle in radian to angle in mils
 * @param {number} rad
 * @return {number}
 */

export const radToMil = (rad) => {
  return (rad * 3200) / Math.PI;
};

/**
 * @description calculate distance between two points
 * @param {number} start.x
 * @param {number} start.y
 * @param {number} end.x
 * @param {number} end.y
 * @return {number}
 *
 * @usage calcDistance({x:1, y:1}, {x:2, y:2}) -> ~0.254
 */
export const calcDistance = (start, end) =>
  Math.sqrt((start.x - end.x) ** 2 + (start.y - end.y) ** 2);

/**
 * @description calculate angle between {0,1} and {start, end} vectors
 * @param {number} start.x
 * @param {number} start.y
 * @param {number} end.x
 * @param {number} end.y
 * @return {number} in radians
 *
 * @usage calcAngle({x:1, y:1}, {x:2, y:2}) -> ~0.785
 */
export const calcAngle = (start, end) =>
  Math.acos((end.y - start.y) / calcDistance(start, end));
