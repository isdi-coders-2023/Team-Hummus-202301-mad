import { render, screen } from "@testing-library/react";
import { About } from "./about";

describe("Given the About component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the about on the screen", () => {
      render(<About></About>);
      const element = screen.getByText(/How does it work/i);
      expect(element).toBeInTheDocument();
    });
  });
});
