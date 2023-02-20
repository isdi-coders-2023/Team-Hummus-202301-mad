import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { Detail } from "./detail";

describe("Given a character detail component", () => {
  describe("when it is rendered", () => {
    test("then it should list items", () => {
      render(
        <Router>
          <Detail></Detail>
        </Router>
      );
      const element = screen.getAllByRole("img");
      expect(element.length).toBe(2);
    });
  });
});
