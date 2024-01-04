import { createBrowserRouter } from "react-router-dom";
import SignUp from "../page/SignUp";
import LogIn from "../page/LogIn";
import MyPage from "../page/MyPage";
import Home from "../page/Home";

const Router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <LogIn /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/mypage/:userId", element: <MyPage /> },
]);

export default Router;
