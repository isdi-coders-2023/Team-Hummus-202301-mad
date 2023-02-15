import { MemoryRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { MenuOption } from "../app/App";
import { AppRouter } from "./app.router";
import "@testing-library/jest-dom";

describe("Given AppRouter component", () => {
  const mockOptions: MenuOption[] = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "To do", path: "/instructions" },
  ];
  describe("When rendering and the path is '/'", () => {
    test("Then, the title 'Welcome to the Rick and Morty' from Home should be in the screen", async () => {
      render(
        <Router
          initialEntries={["/", "/about", "/instructions"]}
          initialIndex={0}
        >
          <AppRouter menuOptions={mockOptions}></AppRouter>
        </Router>
      );

      const element = await screen.findByRole("heading", {
        name: "Welcome to the Rick and Morty character fanpage.",
      });
      expect(element).toBeInTheDocument();
    });
  });
});
