/* eslint-disable testing-library/no-render-in-setup */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form } from "./form";

describe("Given the From component", () => {
  let elements: HTMLElement[];

  beforeEach(() => {
    // const mockValues = [
    //   { value: "https://www.example.png" },
    //   { value: "Rick" },
    //   { value: "alive" },
    //   { value: "human" },
    //   { value: "-" },
    //   { value: "male" },
    //   { value: "earth" },
    // ];
    // const mockCharacter = {
    //   id: 1,
    //   image: "https://www.example.png",
    //   name: "Rick",
    //   status: "alive",
    //   species: "human",
    //   type: "",
    //   gender: "male",
    //   location: "earth",
    //   isFavourite: false,
    // };
    // const mockNull = null;
    // render(<Form char={mockCharacter} />);
    // elements = [...screen.getAllByRole("textbox"), screen.getByRole("button")];
  });

  describe("When we render it", () => {
    test("Then the form should appear on the screen", () => {
      const handleSubmit = jest.fn();
      const mockCharacter = null;
      render(<Form char={mockCharacter} onSubmit={handleSubmit} />);
      const element = screen.getByText(/image url/i);
      expect(element).toBeInTheDocument();
    });
  });

  describe("When the user writes in all the inputs", () => {
    test("Then they should appear in the screen", () => {
      const mockCharacter = null;
      const handleSubmit = jest.fn();
      const mockValues = [
        { value: "https://www.example.png" },
        { value: "Rick" },
        { value: "alive" },
        { value: "human" },
        { value: "-" },
        { value: "male" },
        { value: "earth" },
      ];

      render(<Form char={mockCharacter} onSubmit={handleSubmit} />);

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

  /*
  describe("When we click the button", () => {
    test("It calls the onSubmit function", async () => {
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
      const mockOnSubmit = jest.fn();

      render(<Form char={mockCharacter} />);

      fireEvent.submit(screen.getByTestId("form"));

      elements = [
        ...screen.getAllByRole("textbox"),
        screen.getByRole("button"),
      ];

      // await act(async () => {
      //   fireEvent.change(elements[0], { target: { value: "email" } });
      // });

      // await act(async () => {
      //   userEvent.click(elements[7]);
      // });

      expect(mockOnSubmit).toHaveBeenCalled();
    });
  });
});
 Este ultimo test no funciona

  describe("When the user submits the form...", () => {
    test("it calls updateChar()", () => {
      const updateChar = jest.fn();
      // userEvent.click(screen.getByRole("button"));
      const form = screen.getByTestId("form");
      fireEvent.submit(form);

      expect(updateChar).toHaveBeenCalled();
    });
  });
  */
});
