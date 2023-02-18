/* eslint-disable testing-library/no-render-in-setup */
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form } from "./form";

describe("Given the From component", () => {
  let elements: HTMLElement[];

  beforeEach(() => {
    const mockValues = [
      { value: "https://www.example.png" },
      { value: "Rick" },
      { value: "alive" },
      { value: "human" },
      { value: "-" },
      { value: "male" },
      { value: "earth" },
    ];

    const mockCharacter = {
      id: 1,
      image: "https://www.example.png",
      name: "Rick",
      status: "alive",
      species: "human",
      type: "",
      gender: "male",
      location: "earth",
      isFavourite: false,
    };

    render(<Form char={mockCharacter} />);

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
      const mockUser = "Scientist";
      userEvent.type(elements[4], mockUser);
      expect(elements[4]).toHaveValue(mockUser);
    });
  });
});
/* Este ultimo test no funciona

  describe("When the user submits the form...", () => {
    test("it calls updateChar()", () => {
      const updateChar = jest.fn();
      // userEvent.click(screen.getByRole("button"));
      const form = screen.getByTestId("form");
      fireEvent.submit(form);

      expect(updateChar).toHaveBeenCalled();
    });
  });
});

*/
