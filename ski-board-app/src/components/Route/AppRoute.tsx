import { Route, Routes } from "react-router-dom";
import { SkiPage } from "../Page/SkiPage/SkiPage";
import { StartPage } from "../Page/StartPage/StartPage";

export default function AppRoute(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<StartPage />}></Route>
      <Route path="/ski" element={<SkiPage />}></Route>
    </Routes>
  );
}
