import './App.css';

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MenuCore from "./MenuCore/Menu"

const router = createBrowserRouter([
  {
    path: "/",
    element: <div></div>,
  },
  {
    path: "/about",
    element: <div>About</div>,
  },
  {
    path: "/shop",
    element: <div>Shop</div>,
  },
  {
    path: "/contact",
    element: <div>Contact</div>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <MenuCore />
    </div>
  );
}

export default App;
