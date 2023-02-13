import { render, screen } from "@testing-library/react";
import Navbar from "./navbar";

describe("Given Navbar component", () => {
  describe("When it is rendered", () => {
    test("Then menu should be in the screen", () => {
      render(<Navbar></Navbar>);
      const element = screen.getByText("Home");
      expect(element).toBeInTheDocument();
    });
  });
});
