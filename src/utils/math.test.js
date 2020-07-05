import { calcDistance, calcAngle } from "./math.js";

describe("Math utilities. Test 'calcDistance' function", () => {
  test("test case 1", () => {
    const start = { x: 1, y: 1 };
    const end = { x: 2, y: 2 };
    const result = 1.414213;
    expect(calcDistance(start, end)).toBeCloseTo(result, 5);
  });

  test("test case 2", () => {
    const start = { x: -8, y: 10 };
    const end = { x: 74, y: -42 };
    const result = 97.097888;
    expect(calcDistance(start, end)).toBeCloseTo(result, 5);
  });
});

describe("Math utilities. Test 'calcAngle' function", () => {
  test("test case 1", () => {
    const start = { x: 0, y: 1 };
    const end = { x: 2, y: 2 };
    const result = 1.107148;
    expect(calcAngle(start, end)).toBeCloseTo(result, 5);
  });

  test("test case 2", () => {
    const start = { x: -8, y: 10 };
    const end = { x: 74, y: -42 };
    const result = 2.135945;
    expect(calcAngle(start, end)).toBeCloseTo(result, 5);
  });
});
