/* eslint-disable testing-library/no-render-in-setup */
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AppContextPrivate } from "../../context/context private/context.private";
import { Form } from "./form";

describe("Given the From component", () => {
  let elements: HTMLElement[];

  describe("When we render it", () => {
    test("Then the form should appear on the screen", () => {
      const mockCharacter = null;
      render(<Form char={mockCharacter} />);
      const element = screen.getByText(/image url/i);
      expect(element).toBeInTheDocument();
    });
  });

  describe("When the user writes in all the inputs", () => {
    test("Then they should appear in the screen", () => {
      const mockCharacter = null;
      const mockValues = [
        { value: "https://www.example.png" },
        { value: "Rick" },
        { value: "alive" },
        { value: "human" },
        { value: "-" },
        { value: "male" },
        { value: "earth" },
      ];

      render(<Form char={mockCharacter} />);
      elements = [
        ...screen.getAllByRole("textbox"),
        screen.getByRole("button"),
      ];
      userEvent.type(elements[0], mockValues[0].value);
      userEvent.type(elements[1], mockValues[1].value);
      userEvent.type(elements[2], mockValues[2].value);
      userEvent.type(elements[3], mockValues[3].value);
      userEvent.type(elements[4], mockValues[4].value);
      userEvent.type(elements[5], mockValues[5].value);
      userEvent.type(elements[6], mockValues[6].value);

      expect(elements[0]).toHaveValue(mockValues[0].value);
      expect(elements[1]).toHaveValue(mockValues[1].value);
      expect(elements[2]).toHaveValue(mockValues[2].value);
      expect(elements[3]).toHaveValue(mockValues[3].value);
      expect(elements[4]).toHaveValue(mockValues[4].value);
      expect(elements[5]).toHaveValue(mockValues[5].value);
      expect(elements[6]).toHaveValue(mockValues[6].value);
    });
  });

  describe("When the user clicks the submit button", () => {
    const char1 = {
      id: 1,
      image: "https://www.example.png",
      name: "Rick",
      status: "alive",
      species: "human",
      type: "",
      gender: "male",
      location: { name: "earth" },
      isFavourite: true,
    };

    const char2 = null;

    const mockAddChar = jest.fn();
    const mockUpdateChar = jest.fn();
    const mockloadChars = jest.fn();
    const deleteChar = jest.fn();

    const mockAppContext = {
      chars: [],
      loadChars: mockloadChars,
      updateChar: mockUpdateChar,
      addChar: mockAddChar,
      deleteChar: deleteChar,
    };

    test("calls addChar when submitted with a null character", () => {
      render(
        <AppContextPrivate.Provider value={mockAppContext}>
          <Form char={char2} />
        </AppContextPrivate.Provider>
      );

      fireEvent.change(screen.getByPlaceholderText("https://www.example.png"), {
        target: { value: "https://www.example2.png" },
      });

      fireEvent.click(screen.getByText("SUBMIT"));

      expect(mockAddChar).toHaveBeenCalledTimes(1);
    });

    test("calls updateChar when submitted with a non-null character", () => {
      render(
        <AppContextPrivate.Provider value={mockAppContext}>
          <Form char={char1} />
        </AppContextPrivate.Provider>
      );

      fireEvent.change(screen.getByPlaceholderText("https://www.example.png"), {
        target: { value: "https://www.example2.png" },
      });

      fireEvent.click(screen.getByText("SUBMIT"));

      expect(mockUpdateChar).toHaveBeenCalledTimes(1);
    });
  });
});
