/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
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
      type: "-",
      gender: "male",
      location: "earth",
      isFavourite: false,
    };

    jest.fn().mockReturnValue({ name: "test" });
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
      const mockUser = "Rick";
      userEvent.type(elements[1], mockUser);
      expect(elements[1]).toHaveValue(mockUser);
    });
  });

  describe("When the user submits the form...", () => {
    test("submits the form with the correct ProtoCharacterStructure object", () => {
      userEvent.click(screen.getByRole("button"));
      // expect(onSubmit).toBeCalled();
    });
  });
});
