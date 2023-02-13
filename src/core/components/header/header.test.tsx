import { render, screen } from "@testing-library/react";
import { Header } from "./header";

describe("Given Header component", () => {
  describe("When it is render", () => {
    test("Then it should be an image in the document", () => {
      render(<Header></Header>);
      const element = screen.getByRole("img");
      expect(element).toBeInTheDocument();
    });
  });
});
