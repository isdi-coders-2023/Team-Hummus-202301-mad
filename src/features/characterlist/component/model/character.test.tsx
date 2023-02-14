import { Character } from "./character";

describe("Given a character model", () => {
  describe("when it is called", () => {
    test("then it should have the name and img properties", () => {
      const char = new Character("Item", "Item_img");
      expect(char).toHaveProperty("name");
      expect(char).toHaveProperty("family");
    });
  });
});
