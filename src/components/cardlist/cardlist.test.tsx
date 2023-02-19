import { render, screen } from "@testing-library/react";
import { CharacterList } from "./cardlist";

jest.mock("../card/card");

describe("Given a character list", () => {
  describe("when it is rendered", () => {
    test("then it should list items", async () => {
      render(<CharacterList></CharacterList>);
      const elementNumbers = screen.getAllByRole("list");

      for (let i = 0; i < elementNumbers.length; i++) {
        expect(elementNumbers).toBeTruthy();
      }
    });
  });
});
