const { reverseWords, capitalizeWords } = require(".");

describe("reverseWords", () => {
  it("should reverse the words of a sentence", () => {
    expect(reverseWords("alchemy rocks gold")).toBe("ymehcla skcor dlog");
  });
  it.only("should cap first letter of each word", () => {
    expect(capitalizeWords("alchemy rocks gold")).toBe("Alchemy Rocks Gold");
  });
});
