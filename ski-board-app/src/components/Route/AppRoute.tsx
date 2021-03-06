import { Route, Routes } from "react-router-dom";
import { BoardPage } from "../Page/BoardPage/BoardPage";
import { NotFoudPage } from "../Page/NotFoudPage/NotFoudPage";
import { SkiPage } from "../Page/SkiPage/SkiPage";
import { StartPage } from "../Page/StartPage/StartPage";

export default function AppRoute(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<StartPage />}></Route>
      <Route path="/ski" element={<SkiPage />}></Route>
      <Route path="/board" element={<BoardPage />}></Route>
      <Route path="/*" element={<NotFoudPage />}></Route>
    </Routes>
  );
}
