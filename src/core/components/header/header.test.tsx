import { render, screen } from "@testing-library/react";
import { Header } from "./header";

describe("Given Footer component", () => {
  describe("When it is render", () => {
    test("Then it should have the footer in the screen", () => {
      render(<Header></Header>);
      const element = screen.getByRole("img");
      expect(element).toBeInTheDocument();
    });
  });
});
