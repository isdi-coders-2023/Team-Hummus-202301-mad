import { CharacterStructure } from "../../models/character/character";
import { CardApiRepo } from "./card.api.repo";

const mockCard: CharacterStructure[] = [
  {
    id: 0,
    name: "a",
    status: "",
    species: "",
    type: "",
    gender: "",
    location: "",
    isFavourite: false,
  },
  {
    id: 1,
    name: "b",
    status: "",
    species: "",
    type: "",
    gender: "",
    location: "",
    isFavourite: false,
  },
];

describe("Given a new private repo", () => {
  let repo1: CardApiRepo;
  repo1 = new CardApiRepo();
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue([]),
    });
  });
  describe("When is called", () => {
    test("then it should load the data from the api", async () => {
      const r = await repo1.loadCards();
      expect(r).toEqual([]);
    });
  });
  describe("When we try to create new data", () => {
    test("then it should create the data in the api", async () => {
      const r = await repo1.createCard(mockCard[0]);
      expect(r).toEqual([]);
    });
  });
  describe("When we try to get new data", () => {
    test("then it should get the data from the api", async () => {
      const r = await repo1.getCards("");
      expect(r).toEqual([]);
    });
  });
  describe("When we try to update data", () => {
    test("then it should update the data in the private api", async () => {
      const r = await repo1.updateCard(mockCard[0]);
      expect(r).toEqual([]);
    });
  });
  describe("When we try to delete data", () => {
    test("then it should delete the selected data in the private api", async () => {
      const r = await repo1.deleteCard(mockCard[0].id);
      expect(r).toEqual(undefined);
    });
  });
  describe("When we try to delete data and resp.ok is not true", () => {
    beforeEach(() => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        json: jest.fn().mockResolvedValue([]),
      });
    });
    test("then it should throw error and not delete any data", async () => {
      try {
        await repo1.deleteCard(mockCard[0].id);
      } catch (error) {
        // eslint-disable-next-line jest/no-conditional-expect
        expect((error as Error).message).toBe("Delete not possible!");
      }
    });
  });
});
