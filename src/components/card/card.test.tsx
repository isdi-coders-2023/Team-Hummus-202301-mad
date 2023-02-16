import { render, screen } from "@testing-library/react";
import { CardStructure } from "../../models/cards/card";
import { Card } from "./card";
/* Parte del test que no se puede hacer hasta tener contexto
import userEvent from "@testing-library/user-event"; */

const mockCard: CardStructure = {
  char: "string",
} as unknown as CardStructure;

describe("Given a character", () => {
  describe("when it is rendered", () => {
    test("then it should be a button", () => {
      render(<Card char={mockCard}></Card>);
      const element = screen.getAllByRole("button");
      expect(element[0]).toBeInTheDocument();
    });
    /* Parte del test que no se puede hacer hasta tener contexto test("then if user clic on fav button it should  handle function", async () => {
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
