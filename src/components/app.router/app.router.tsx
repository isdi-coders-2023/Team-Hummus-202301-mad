import { Route, Routes } from "react-router-dom";
import { MenuOption } from "../app/App";
import { Suspense, lazy } from "react";
const Home = lazy(() => import("../../pages/home/home"));
const About = lazy(() => import("../../pages/about/about"));
const HowTo = lazy(() => import("../../pages/how.to.use/instructions"));
const Favourites = lazy(() => import("../../pages/favourites/favourites"));

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
      </Routes>
    </Suspense>
  );
}
