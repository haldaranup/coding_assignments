const timeConversion = require("./time")


describe("checking time args", () => {
    test("200000 to equal 3 min 20 sec", () => {
      expect(timeConversion(200000)).toBe("3 minutes 20 seconds");
    });
    test("2000000 to equal 3 min 20 sec", () => {
      expect(timeConversion(20000000)).toBe("5 hours 33 minutes 20 seconds");
    });
  });
  