import { render, screen } from "@testing-library/react";
import { Navbar } from "./navbar";
import { MenuOption } from "../app/App";
import { MemoryRouter as Router } from "react-router-dom";

describe("Given Navbar component", () => {
  describe("When it is rendered", () => {
    test("Then it should render in the header component", () => {
      const mockOptions: MenuOption[] = [
        {
          label: "test",
          path: "/test",
        },
      ];
      render(
        <Router>
          <Navbar menuOptions={mockOptions}></Navbar>
        </Router>
      );
      const element = screen.getByText(mockOptions[0].label);
      expect(element).toBeInTheDocument();
    });
  });
});
