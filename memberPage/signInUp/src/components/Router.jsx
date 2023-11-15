import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUp from "../page/signup";
import LogIn from "../page/login";
import MyPage from "../page/mypage";

const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/mypage/:userId" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
    );
};

export default Router;