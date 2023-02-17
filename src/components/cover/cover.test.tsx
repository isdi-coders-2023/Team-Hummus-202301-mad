import { render, screen } from "@testing-library/react";
import { Cover } from "./cover";

describe("Given the Cover component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the cover component on the screen", async () => {
      render(<Cover></Cover>);
      const element = screen.getByText(/Welcome/i);
      expect(element).toBeInTheDocument();
    });
  });
});
