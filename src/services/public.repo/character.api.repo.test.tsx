import { CharacterStructure } from "../../models/character/character";
import { CharacterApiRepo } from "./character.api.repo";

describe("Given CardApiRepo", () => {
  let cardApiRepo: CharacterApiRepo;

  beforeEach(() => {
    cardApiRepo = new CharacterApiRepo();
  });

  describe("When CardApiRepo is instanced, and we use the methods...", () => {
    test("Then loadCards should return an array of card data", async () => {
      const cards = await cardApiRepo.loadChars();
      expect(Array.isArray(cards)).toBe(true);
      expect(cards.length).toBeGreaterThan(0);
    });

    test("getCards should return an array of card data that matches the input", async () => {
      const cards = await cardApiRepo.getChars("name=rick");
      expect(Array.isArray(cards)).toBe(true);
      expect(cards.length).toBeGreaterThan(0);
      expect(
        cards.every((card: CharacterStructure) =>
          card.name.toLowerCase().includes("rick")
        )
      ).toBe(true);
    });
  });
});
