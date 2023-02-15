import { render, screen } from "@testing-library/react";
//import userEvent from "@testing-library/user-event";
import { CharacterStructure } from "../model/character";
import { Character } from "./character";

const mockChar: CharacterStructure = {
  char: "string",
} as unknown as CharacterStructure;

describe("Given a character", () => {
  describe("when it is rendered", () => {
    test("then it should be a button", () => {
      render(<Character char={mockChar}></Character>);
      const element = screen.getAllByRole("button");
      expect(element[0]).toBeInTheDocument();
    });
    // Parte del test que no se puede hacer hasta tener contexto
    /*   test("then if user clic on fav button it should  handle function", async () => {
      render(<Character char={mockChar}></Character>);
      const handleFav = jest.fn();
      const element = screen.getAllByRole("button", {
        hidden: true,
      });

      userEvent.click(element[0]);
      console.log(element[0]);
      expect(handleFav).toBeCalled();
    }); */
  });
});
