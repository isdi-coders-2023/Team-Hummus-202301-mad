import { Card } from "./card";

describe("Given a character model", () => {
  describe("when it is called", () => {
    test("then it should have the name and img properties", () => {
      const char = new Card("Item", "Item_img", true);
      expect(char).toHaveProperty("name");
      expect(char).toHaveProperty("img");
      expect(char).toHaveProperty("isFavourite");
    });
  });
});
