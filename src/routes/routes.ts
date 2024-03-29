import { LazyExoticComponent } from "react";
import { ShoppingPage } from "../02-components-patterns/pages/ShoppingPage";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

export const routes: Route[] = [
  {
    to: "/shop",
    path: "",
    component: ShoppingPage,
    name: "Shopping Page",
  },
];
