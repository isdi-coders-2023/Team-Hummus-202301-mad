import { render, screen } from "@testing-library/react";
import { NavigationArrows } from "./navigation-arrows";
describe("Given NavigationArrows component", () => {
  describe("When it is rendered", () => {
    test("Then we should have the arrows on the screen", () => {
      render(<NavigationArrows></NavigationArrows>);
      const element = screen.getByAltText("navigation-arrow");
      expect(element).toBeInTheDocument();
    });
  });
});
