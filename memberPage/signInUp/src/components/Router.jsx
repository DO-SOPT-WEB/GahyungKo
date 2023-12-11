import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUp from "../page/SignUp";
import LogIn from "../page/LogIn";
import MyPage from "../page/MyPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mypage/:userId" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
