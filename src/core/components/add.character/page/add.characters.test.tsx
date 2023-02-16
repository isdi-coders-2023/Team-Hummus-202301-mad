import { AddCharacter } from "./add.character";
import { render, screen} from "@testing-library/react";

describe("Given the AddCharacter component", () => {
  describe("When it is rendered", () => {
    test("Then it should appear on the screen", () => {
      render(
        <AddCharacter></AddCharacter>
      )
      const element = screen.getByText(/add new character/i);
      expect(element).toBeInTheDocument();
    });
  });
});
