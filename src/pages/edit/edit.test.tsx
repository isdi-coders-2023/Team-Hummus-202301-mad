import { render, screen } from "@testing-library/react";
import { CharacterStructure } from "../../models/character/character";
import Edit from "./edit";

describe("Given the Edit component", () => {
  describe("When it is rendered", () => {
    test("Then it should appear on the screen", () => {
      const mock: CharacterStructure = {
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
      render(<Edit char={mock}></Edit>);
      const element = screen.getByText(/edit/i);
      expect(element).toBeInTheDocument();
    });
  });
});
