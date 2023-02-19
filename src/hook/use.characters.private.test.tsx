/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useCharsPrivate } from "./use.characters.private";
import { CardApiRepo } from "../services/private.repo/card.api.repo";

describe("Given the useCharsPrivate customHook", () => {
  let mockRepo: CardApiRepo;
  beforeEach(async () => {
    mockRepo = {
      loadCards: jest.fn(),
      createCard: jest.fn(),
      updateCard: jest.fn(),
      deleteCard: jest.fn(),
    } as unknown as CardApiRepo;

    const char = {
      id: 0,
      image: "",
      name: "",
      status: "",
      species: "",
      type: "",
      gender: "",
      location: "",
      isFavourite: false,
    };

    const TestComponent = function () {
      const { loadChars, addChar, updateChar, deleteChar } =
        useCharsPrivate(mockRepo);
      return (
        <>
          <button onClick={() => loadChars()}>Load</button>
          <button onClick={() => addChar(char)}>Add</button>
          <button onClick={() => updateChar(char)}>Update</button>
          <button onClick={() => deleteChar(char.id)}>Delete</button>
        </>
      );
    };

    await act(async () => render(<TestComponent></TestComponent>));
  });

  describe("When TestComponent is rendered", () => {
    test("then buttons should be in the document", async () => {
      const element = await screen.findAllByRole("button");
      expect(element[0]).toBeInTheDocument();
    });
  });

  describe("When TestComponent is rendered and click the button", () => {
    test("then it should call loadCards, addChar, deleteChar, and updateChar", async () => {
      const element = await screen.findAllByRole("button");

      await act(async () => userEvent.click(element[0]));
      expect(mockRepo.loadCards).toHaveBeenCalled();

      await act(async () => userEvent.click(element[1]));
      expect(mockRepo.createCard).toHaveBeenCalled();

      await act(async () => userEvent.click(element[2]));
      expect(mockRepo.updateCard).toHaveBeenCalled();

      await act(async () => userEvent.click(element[3]));
      expect(mockRepo.deleteCard).toHaveBeenCalled();
    });
  });
});
