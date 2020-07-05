import { isEmpty } from "./object";

describe("Object utilities. Test 'isEmpty' function", () => {
  let consoleOutput = [];
  console.error = (output) => consoleOutput.push(output);

  beforeEach(() => {
    consoleOutput = [];
  });

  test("on empty object", () => {
    const source = {};
    const result = true;
    expect(isEmpty(source)).toEqual(result);
  });

  test("on not empty object", () => {
    const source = { some: 1 };
    const result = false;
    expect(isEmpty(source)).toEqual(result);
  });

  test("on empty array", () => {
    const source = [];
    const result = true;
    expect(isEmpty(source)).toEqual(result);
  });

  test("on not empty array", () => {
    const source = [1];
    const result = false;
    expect(isEmpty(source)).toEqual(result);
  });

  test("on map should print error on console", () => {
    const source = new Map();
    const result = null;
    expect(isEmpty(source)).toEqual(result);
    expect(consoleOutput.length).toEqual(1);
  });

  test("on set should print error on console", () => {
    const source = new Set([1, 2, 2, 3]);
    const result = null;
    expect(isEmpty(source)).toEqual(result);
    expect(consoleOutput.length).toEqual(1);
  });

  test("on null should print error on console", () => {
    const source = null;
    const result = null;
    expect(isEmpty(source)).toEqual(result);
    expect(consoleOutput.length).toEqual(1);
  });
});
