import { render, screen } from "@testing-library/react";
import Error from "./error";

describe("Given the Error component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the error page on the screen", () => {
      render(<Error></Error>);
      const element = screen.getByText(/Error!/i);
      expect(element).toBeInTheDocument();
    });
  });
});
