import { BrowserRouter } from "react-router-dom";
import "./App.css";
import  AppRoute  from "./components/Route/AppRoute";

export default function App():JSX.Element {
  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  );
}
