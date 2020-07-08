import { parseGPS, calcGPS } from "./gps";

describe("GPS utilities. Test 'parseGPS' function", () => {
  test("6 digits gps parser with good result", () => {
    const source = "123456";
    const result = {
      x: 123,
      y: 456,
    };
    expect(parseGPS(source)).toEqual(result);
  });

  test("6 digits gps parser with good result", () => {
    const source = "999222";
    const result = {
      x: 999,
      y: 222,
    };
    expect(parseGPS(source)).toEqual(result);
  });

  test("6 digits gps parser with bad result", () => {
    const source = "999222";
    const result = {
      x: 123,
      y: 123,
    };
    expect(parseGPS(source)).not.toEqual(result);
  });

  test("8 digits gps parser with good result", () => {
    const source = "12345678";
    const result = {
      x: 123.4,
      y: 567.8,
    };
    expect(parseGPS(source)).toEqual(result);
  });

  test("8 digits gps parser with good result", () => {
    const source = "11112222";
    const result = {
      x: 111.1,
      y: 222.2,
    };
    expect(parseGPS(source)).toEqual(result);
  });

  test("8 digits gps parser with bad result", () => {
    const source = "11112222";
    const result = {
      x: 1111,
      y: 2222,
    };
    expect(parseGPS(source)).not.toEqual(result);
  });

  test("gps parser with wrong input (numbers)", () => {
    const source = 123456;
    const result = null;
    expect(parseGPS(source)).toEqual(result);
  });

  test("gps parser with wrong input (array)", () => {
    const source = [1, 2, 3, 4, 5, 6];
    const result = null;
    expect(parseGPS(source)).toEqual(result);
  });

  test("gps parser with shoot on center, case 1)", () => {
    const source = "123456";
    const result = {
      x: 123.5,
      y: 456.5,
    };
    expect(parseGPS(source, true)).toEqual(result);
  });

  test("gps parser with shoot on center, case 2)", () => {
    const source = "12345678";
    const result = {
      x: 123.45,
      y: 567.85,
    };
    expect(parseGPS(source, true)).toEqual(result);
  });
});

describe("GPS utilities. Test 'calcGPS' function", () => {
  test("gps calc with good result 1", () => {
    const source = [123.5, 456.5];
    const result = { gps: "123456" };
    expect(calcGPS(...source)).toEqual(result);
  });

  test("gps calc with good result 2", () => {
    const source = [999, 111];
    const result = { gps: "999111" };
    expect(calcGPS(...source)).toEqual(result);
  });

  test("gps calc with good result 3", () => {
    const source = [12, 345];
    const result = { gps: "012345" };
    expect(calcGPS(...source)).toEqual(result);
  });

  test("gps calc with good result 4", () => {
    const source = [123, 1.5];
    const result = { gps: "123001" };
    expect(calcGPS(...source)).toEqual(result);
  });

  test("gps calc with bad input", () => {
    const source = [123.4];
    const result = null;
    expect(calcGPS(...source)).toEqual(result);
  });
});
