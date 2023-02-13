import { render } from "@testing-library/react";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import App from "./App";

jest.mock("../header/header");
jest.mock("../footer/footer");

describe("Given App component", () => {
  describe("When it is rendered", () => {
    test("Then it should call Header and Footer components", () => {
      render(<App />);
      expect(Header).toHaveBeenCalled();
      expect(Footer).toHaveBeenCalled();
    });
  });
});
