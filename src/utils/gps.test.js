import { parseGPS } from "./gps";

describe("gps utilities test", () => {
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
});
