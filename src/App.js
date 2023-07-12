import './App.css';

import * as React from "react";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NotFound from './NotFound/NotFound';

/* Include to use the menu */
import MenuCore from "./MenuCore/Menu"
import Item from './Item/Item'

const router = createBrowserRouter([
  {
    path: "/",
    element:  (
      <>
        <MenuCore searchDisplayed={true}>
            <Item Title={"Home"} action={"/"} />
            <Item Title={"About"} action={"/about"} />
            <Item Title={"Shop"} type={"dropdown"} />
            <Item Title={"Contact"} action={"/contact"} />
        </MenuCore>
        <div></div>
      </>),
  },
  {
    path: "/about",
    element:  (
      <>
        <MenuCore searchDisplayed={true}>
            <Item Title={"Home"} action={"/"} />
            <Item Title={"About"} action={"/about"} />
            <Item Title={"Shop"} type={"dropdown"} />
            <Item Title={"Contact"} action={"/contact"} />
        </MenuCore>
        <div>About</div>
      </>),
  },
  {
    path: "/shop",
    element:  (
      <>
        <MenuCore searchDisplayed={true}>
            <Item Title={"Home"} action={"/"} />
            <Item Title={"About"} action={"/about"} />
            <Item Title={"Shop"} type={"dropdown"} />
            <Item Title={"Contact"} action={"/contact"} />
        </MenuCore>
        <div>Shop</div>
      </>),
  },
  {
    path: "/contact",
    element:  (
      <>
        <MenuCore searchDisplayed={true}>
            <Item Title={"Home"} action={"/"} />
            <Item Title={"About"} action={"/about"} />
            <Item Title={"Shop"} type={"dropdown"} />
            <Item Title={"Contact"} action={"/contact"} />
        </MenuCore>
        <div>Contact</div>
      </>),
  },
  {
    path: "*",
    element:  (
      <>
        <MenuCore searchDisplayed={true}>
            <Item Title={"Home"} action={"/"} />
            <Item Title={"About"} action={"/about"} />
            <Item Title={"Shop"} type={"dropdown"} />
            <Item Title={"Contact"} action={"/contact"} />
        </MenuCore>
        <NotFound />
      </>),
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
