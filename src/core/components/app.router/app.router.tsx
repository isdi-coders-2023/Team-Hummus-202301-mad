import { Route, Routes } from "react-router-dom";
import { MenuOption } from "../app/App";
import { Suspense, lazy } from "react";
const Home = lazy(() => import("../../../features/home/home"));
const About = lazy(() => import("../../../features/about/about"));
const HowTo = lazy(() => import("../../../features/how.to.use/instructions"));
const Add = lazy(
  () => import("../../../features/add.character/page/add.character")
);
/* const Favorites = lazy(() => import("../../../features/favorites/favorites"));*/

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
        <Route path={menuOptions[3].path} element={<Add></Add>}></Route>
      </Routes>
    </Suspense>
  );
}
