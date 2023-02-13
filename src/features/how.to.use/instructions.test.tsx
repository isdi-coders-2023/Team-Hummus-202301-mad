import { render, screen } from "@testing-library/react";
import { Instructions } from "./instructions";

describe("Given the About component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the about on the screen", () => {
      render(<Instructions></Instructions>);
      const element = screen.getByText(/How to use?/i);
      expect(element).toBeInTheDocument();
    });
  });
});
