import { render, screen } from "@testing-library/react";
import Favourites from "./favourites";

describe("Given the Favourite component", () => {
  describe("When it is rendered", () => {
    test("Then it should show favourites on the screen", async () => {
      render(<Favourites></Favourites>);
      const element = screen.getByText(/My favourite characters/i);
      expect(element).toBeInTheDocument();
    });
  });
});
