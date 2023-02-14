import { render, screen } from "@testing-library/react";
import { CharacterStructure } from "../model/character";
import { Character } from "./character";

const mockChar: CharacterStructure = {
  char: "string",
} as unknown as CharacterStructure;

describe("Given a character", () => {
  describe("when it is rendered", () => {
    test("then it should be a button", () => {
      render(<Character char={mockChar}></Character>);
      const element = screen.getByRole("button");
      expect(element).toBeInTheDocument();
    });
  });
});
