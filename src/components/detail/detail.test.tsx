import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { DetailCardStructure } from "../../models/cards/card";
import { Detail } from "./detail";
const mockDetailCard: DetailCardStructure = {
  char: "string",
} as unknown as DetailCardStructure;

describe("Given a character detail component", () => {
  describe("when it is rendered", () => {
    test("then it should list items", () => {
      render(
        <Router>
          DetailPage
          <Detail char={mockDetailCard}></Detail>
        </Router>
      );
      const element = screen.getAllByRole("img");
      expect(element.length).toBe(2);
    });
  });
});
