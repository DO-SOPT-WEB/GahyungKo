import { RouterProvider } from "react-router-dom";
import GlobalStyles from "./styles/Globalstyle";
import Router from "./components/Router";
import React from "react";

function App() {
  return (
    <>
      <RouterProvider router={Router} />
      <GlobalStyles />
    </>
  );
}

export default App;
