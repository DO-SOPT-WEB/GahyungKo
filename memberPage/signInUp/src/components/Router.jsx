import { createBrowserRouter } from "react-router-dom";
import SignUp from "../page/SignUp";
import LogIn from "../page/LogIn";
import MyPage from "../page/MyPage";

const Router = createBrowserRouter([
  { path: "/", element: <LogIn /> },
  { path: "/login", element: <LogIn /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/mypage/:userId", element: <MyPage /> },
]);

export default Router;
