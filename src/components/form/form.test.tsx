/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form } from "./form";

describe("Given the From component ", () => {
  let elements: HTMLElement[];

  beforeEach(() => {
    jest.fn().mockReturnValue({ name: "test" });
    render(<Form></Form>);

    elements = [...screen.getAllByRole("textbox"), screen.getByRole("button")];
  });

  describe("When we render it", () => {
    test("Then it should appear on the screen", () => {
      const element = screen.getByText(/image url/i);
      expect(element).toBeInTheDocument();
    });
  });

  describe("When the user writes in the inputs", () => {
    test("Then they should appear in the screen", () => {
      const mockUser = "Rick";
      userEvent.type(elements[1], mockUser);
      expect(elements[1]).toHaveValue(mockUser);
    });
  });
});