import { render, screen } from "@testing-library/react";
import { FavCharacterList } from "./favcardlist";

jest.mock("../card/card");

describe("Given a character list", () => {
  describe("when it is rendered", () => {
    test("then it should list items", async () => {
      render(<FavCharacterList></FavCharacterList>);
      const elementNumbers = screen.getAllByRole("list");

      for (let i = 0; i < elementNumbers.length; i++) {
        expect(elementNumbers).toBeTruthy();
      }
    });
  });
});
