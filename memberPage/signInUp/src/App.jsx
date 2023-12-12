import { RouterProvider } from "react-router-dom";
import GlobalStyles from "./styles/Globalstyle";
import Router from "./components/Router";

function App() {
  return (
    <>
      <RouterProvider router={Router} />
      <GlobalStyles />
    </>
  );
}

export default App;
