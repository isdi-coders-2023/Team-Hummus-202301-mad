/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */
import { CharacterApiRepo } from "../services/public.repo/character.api.repo";
import { useChars } from "./use.characters";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Given the useChars customHook", () => {
  let mockRepo: CharacterApiRepo;
  beforeEach(async () => {
    mockRepo = {
      loadChars: jest.fn(),
    } as unknown as CharacterApiRepo;

    const TestComponent = function () {
      const { loadChars } = useChars(mockRepo);
      return (
        <>
          <button onClick={() => loadChars()}>Load</button>
        </>
      );
    };

    await act(async () => render(<TestComponent></TestComponent>));
  });

  describe("When TestComponent is rendered", () => {
    test("then button should be in the document", async () => {
      const element = await screen.findByRole("button");
      expect(element).toBeInTheDocument();
    });
  });

  describe("When TestComponent is rendered and click the button", () => {
    test("then it should call loadChars", async () => {
      const element = await screen.findByRole("button");
      await act(async () => userEvent.click(element));
      expect(mockRepo.loadChars).toHaveBeenCalled();
    });
  });
});

describe("Given the useChars cstomHook and the testError component", () => {
  let spyLog: jest.SpyInstance;
  beforeEach(async () => {
    spyLog = jest.spyOn(global.console, "log");

    const mockRepoError = {
      loadPublicBeers: jest.fn().mockRejectedValue(new Error("Test Error")),
    } as unknown as CharacterApiRepo;

    const TestError = function () {
      const { loadChars } = useChars(mockRepoError);
      return (
        <>
          <button onClick={() => loadChars()}>Error</button>
        </>
      );
    };

    await act(async () => render(<TestError></TestError>));
  });

  describe("When the TestError is rendered and click the button", () => {
    test("then loadChars should give error", async () => {
      const element = await screen.findByRole("button");
      await act(async () => userEvent.click(element));
      expect(spyLog).toHaveBeenCalled();
    });
  });
});
