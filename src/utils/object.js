export const isEmpty = (object) => {
  if (!object) return true;

  if (
    Object.prototype.toString.call(object) !== "[object Object]" &&
    !(object instanceof Array)
  ) {
    console.error("Object passed to isEmpty must be plain object or array");
    return null;
  }

  return Object.keys(object).length === 0;
};
