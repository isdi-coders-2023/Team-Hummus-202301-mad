import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import Detail from "./detail";

describe("Given the About component", () => {
  describe("When Detail is rendered", () => {
    test("Then it should show the about on the screen", () => {
      render(
        <Router>
          <Detail></Detail>
        </Router>
      );
      const element = screen.getByAltText(/Character_Image/i);
      expect(element).toBeInTheDocument();
    });
  });
});
