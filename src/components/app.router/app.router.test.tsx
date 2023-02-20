import { MemoryRouter as Router } from "react-router-dom";
// import { render, screen } from "@testing-library/react";
// import { MenuOption } from "../app/App";
// import { AppRouter } from "./app.router";
// import "@testing-library/jest-dom";
// import React from "react";

// describe("Given AppRouter component", () => {
//   const mockOptions: MenuOption[] = [
//     { label: "Home", path: "/" },
//     { label: "About", path: "/about" },
//     { label: "To do", path: "/howto" },
//     { label: "Favourites", path: "/favourites" },
//     { label: "Add", path: "/add" },
//     { label: "Detail", path: "/detail" },
//     { label: "Error", path: "*" },
//   ];
//   describe("When rendering and the path is '/'", () => {
//     test("Then, the title 'Welcome to the Rick and Morty' from Home should be in the screen", async () => {
//       render(
//         <Router
//           initialEntries={[
//             "/",
//             "/about",
//             "/howto",
//             "/favourites",
//             "/add",
//             "/detail",
//           ]}
//           initialIndex={0}
//         >
//           <AppRouter menuOptions={mockOptions}></AppRouter>
//         </Router>
//       );

//       const element = await screen.findByRole("heading", {
//         name: "Welcome to the Rick and Morty character fanpage.",
//       });
//       expect(element).toBeInTheDocument();
//     });
//   });
//   describe("When rendering and the path is '/about'", () => {
//     test("Then, the title 'What is this site for?' from Home should be in the screen", async () => {
//       render(
//         <Router
//           initialEntries={[
//             "/",
//             "/about",
//             "/howto",
//             "/favourites",
//             "/add",
//             "/detail",
//           ]}
//           initialIndex={1}
//         >
//           <AppRouter menuOptions={mockOptions}></AppRouter>
//         </Router>
//       );

//       const element = await screen.findByRole("heading", {
//         name: "What is this site for?",
//       });
//       expect(element).toBeInTheDocument();
//     });
//   });
//   describe("When rendering and the path is '/howto'", () => {
//     test("Then, the title 'How to use?' from Home should be in the screen", async () => {
//       render(
//         <Router
//           initialEntries={[
//             "/",
//             "/about",
//             "/howto",
//             "/favourites",
//             "/add",
//             "/detail",
//           ]}
//           initialIndex={2}
//         >
//           <AppRouter menuOptions={mockOptions}></AppRouter>
//         </Router>
//       );

//       const element = await screen.findByRole("heading", {
//         name: "How to use?",
//       });
//       expect(element).toBeInTheDocument();
//     });
//   });
//   describe("When rendering and the path is '/favourites'", () => {
//     test("Then, the title 'Favourite' from Home should be in the screen", async () => {
//       render(
//         <Router
//           initialEntries={[
//             "/",
//             "/about",
//             "/howto",
//             "/favourites",
//             "/add",
//             "/detail",
//           ]}
//           initialIndex={3}
//         >
//           <AppRouter menuOptions={mockOptions}></AppRouter>
//         </Router>
//       );

//       const element = await screen.findByRole("heading", {
//         name: "My favourite characters",
//       });
//       expect(element).toBeInTheDocument();
//     });
//   });
//   describe("When rendering and the path is '/add'", () => {
//     test("Then, the title 'Add new character' from Home should be in the screen", async () => {
//       render(
//         <Router
//           initialEntries={[
//             "/",
//             "/about",
//             "/howto",
//             "/favourites",
//             "/add",
//             "/detail",
//           ]}
//           initialIndex={4}
//         >
//           <AppRouter menuOptions={mockOptions}></AppRouter>
//         </Router>
//       );

//       const element = await screen.findByRole("heading", {
//         name: "Add new character",
//       });
//       expect(element).toBeInTheDocument();
//     });
//   });
//   describe("When rendering and the path is '/detail", () => {
//     test("Then, the title 'Favourite' from Home should be in the screen", async () => {
//       render(
//         <Router
//           initialEntries={[
//             "/",
//             "/about",
//             "/howto",
//             "/favourites",
//             "/add",
//             "/detail",
//           ]}
//           initialIndex={5}
//         >
//           <AppRouter menuOptions={mockOptions}></AppRouter>
//         </Router>
//       );

//       const element = await screen.findByRole("heading", {
//         name: ".",
//       });
//       expect(element).toBeInTheDocument();
//     });
//   });
// });
