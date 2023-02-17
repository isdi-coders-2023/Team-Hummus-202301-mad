/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import { AppContext } from "../../context public/context";
import { UseCharactersStructure } from "../../hook/use.characters";
import { CardStructure } from "../../models/cards/card";
import { Card } from "./card";

const mockCard: CardStructure = {
  name: "joaquin",
  char: "string",
} as unknown as CardStructure;

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
