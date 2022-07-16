const sum = require("./sum_arguments");

describe("checking sum args", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
