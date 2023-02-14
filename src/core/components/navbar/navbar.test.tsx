import { render, screen } from "@testing-library/react";
import { BrowserRouter, Router } from "react-router-dom";
import { Navbar } from "./navbar";

describe("Given Navbar component", () => {
  describe("When it is rendered", () => {
    test("Then menu should be in the screen", () => {
      render(
        <BrowserRouter location={""} navigator={undefined}>
          <Navbar></Navbar>
        </BrowserRouter>
      );
      const element = screen.getByText(/Home/i);
      expect(element).toBeInTheDocument();
    });
  });
});
