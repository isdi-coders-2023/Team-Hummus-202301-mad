import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { DetailCardStructure } from "../../models/cards/card";
import { Detail } from "./detail";
const mockDetailCard: DetailCardStructure = {
  char: "string",
} as unknown as DetailCardStructure;

describe("Given a character detail component", () => {
  describe("when it is rendered", () => {
    test("then it should list items", () => {
      render(
        <Router location={"/detail"} navigator={undefined}>
          DetailPage
          <Detail char={mockDetailCard}></Detail>
        </Router>
      );
      const elementNumber = screen.getAllByRole("img");
      console.log(elementNumber.length);
      expect(elementNumber.length).toBe(1);
    });
  });
});
