import './App.css';

import * as React from "react";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MenuCore from "./MenuCore/Menu"
import NotFound from './NotFound/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element:  (
      <>
        <MenuCore />
        <div></div>
      </>),
  },
  {
    path: "/about",
    element:  (
      <>
        <MenuCore />
        <div>About</div>
      </>),
  },
  {
    path: "/shop",
    element:  (
      <>
        <MenuCore />
        <div>Shop</div>
      </>),
  },
  {
    path: "/contact",
    element:  (
      <>
        <MenuCore />
        <div>Contact</div>
      </>),
  },
  {
    path: "*",
    element:  (
      <>
        <MenuCore />
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
