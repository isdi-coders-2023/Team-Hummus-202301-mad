import { Route, Routes } from "react-router-dom";
import { MenuOption } from "../app/App";
import { Suspense, lazy } from "react";
const Home = lazy(() => import("../../pages/home/home"));
const About = lazy(() => import("../../pages/about/about"));
const HowTo = lazy(() => import("../../pages/how.to.use/instructions"));
const Favourites = lazy(() => import("../../pages/favourites/favourites"));
const Add = lazy(() => import("../../pages/add/add.character"));
const Detail = lazy(() => import("../../pages/detail/detail"));
const Error = lazy(() => import("../../pages/error/error"));

type AppRouterProps = {
  menuOptions: MenuOption[];
};

export function AppRouter({ menuOptions }: AppRouterProps) {
  return (
    <Suspense>
      <Routes>
        <Route path={"/"} element={<Home></Home>}></Route>
        <Route path={menuOptions[1].path} element={<About></About>}></Route>
        <Route path={menuOptions[2].path} element={<HowTo></HowTo>}></Route>

        <Route
          path={menuOptions[3].path}
          element={<Favourites></Favourites>}
        ></Route>
        <Route path={menuOptions[4].path} element={<Add></Add>}></Route>
        <Route path={menuOptions[5].path} element={<Detail></Detail>}></Route>
        <Route path={menuOptions[6].path} element={<Error></Error>}></Route>
      </Routes>
    </Suspense>
  );
}
