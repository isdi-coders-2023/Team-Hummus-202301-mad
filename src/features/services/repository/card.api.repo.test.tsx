import { CardStructure } from "../../card/models/card";
import { CardApiRepo } from "./card.api.repo";

describe("Given CardApiRepo", () => {
  let cardApiRepo: CardApiRepo;

  beforeEach(() => {
    cardApiRepo = new CardApiRepo();
  });

  describe("When CardApiRepo is instanced, and we use the methods...", () => {
    test("Then loadCards should return an array of card data", async () => {
      const cards = await cardApiRepo.loadCards();
      expect(Array.isArray(cards)).toBe(true);
      expect(cards.length).toBeGreaterThan(0);
    });

    test("getCards should return an array of card data that matches the input", async () => {
      const cards = await cardApiRepo.getCards("name=rick");
      expect(Array.isArray(cards)).toBe(true);
      expect(cards.length).toBeGreaterThan(0);
      expect(
        cards.every((card: CardStructure) =>
          card.name.toLowerCase().includes("rick")
        )
      ).toBe(true);
    });
  });
});
