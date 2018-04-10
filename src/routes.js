import Home from "./components/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Companies from "./components/Companies/Companies";

export const routes = [
  { path: "/", component: Home },
  { path: "/portfolio", component: Portfolio },
  { path: "/companies", component: Companies }
];
