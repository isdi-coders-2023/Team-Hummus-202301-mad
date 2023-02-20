/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import { AppContext } from "../../context/context public/context";
import { UseCharactersStructure } from "../../hook/use.characters";
import { CharacterStructure } from "../../models/character/character";
import { Card } from "./card";

export const mockCard: CharacterStructure = {
  id: 0,
  image: "",
  name: "",
  status: "",
  species: "",
  type: "",
  gender: "",
  location: { name: "" },
  isFavourite: false,
};

const mockContext = {
  loadChars: jest.fn(),
} as unknown as UseCharactersStructure;

describe("Given a character", () => {
  describe("when it is rendered", () => {
    let elements: HTMLElement[];
    beforeEach(() => {
      render(
        <AppContext.Provider value={mockContext}>
          <Card char={mockCard}></Card>
        </AppContext.Provider>
      );
      elements = [screen.getByText(mockCard.name)];
    });
    test("Then note title should be in the document", async () => {
      expect(elements).toBeTruthy();
    });
  });
});
