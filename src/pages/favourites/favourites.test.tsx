import { render, screen } from "@testing-library/react";
import Favourites from "./favourites";

describe("Given the About component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the about on the screen", async () => {
      render(<Favourites></Favourites>);
      const element = screen.getByText(/My favourite characters/i);
      expect(element).toBeInTheDocument();
    });
  });
});
