import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Modal,
  Header,
  LoginInput,
  Input,
  InputTitle,
  SignUpBtn,
  InputContainer,
} from "../styles";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";

import axios, { AxiosError } from "axios";

type ServerError = {
  message: string;
};

const LogIn = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [fail, setFail] = useState("");

  const navigate = useNavigate();

  //toast가 일정 시간 뒤에 사라지게
  useEffect(() => {
    let timer = setTimeout(() => {
      setFail("");
    }, 1200);

    return () => {
      clearTimeout(timer);
    };
  }, [fail]);

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/members/sign-in`,
        {
          username: id,
          password: pw,
        }
      );
      response && navigate(`/mypage/${response.data.id}`);
    } catch (error) {
      const err = error as AxiosError<ServerError>;

      err.response && setFail(err.response?.data.message);
    }
  };

  return (
    <>
      <Modal>
        <Header>Log In</Header>
        <InputContainer>
          <LoginInput>
            <InputTitle>ID</InputTitle>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="ID를 입력해주세요"
              onChange={(e) => setId(e.target.value)}
            />
          </LoginInput>
          <LoginInput>
            <InputTitle>비밀번호</InputTitle>
            <Input
              type="text"
              name="pw"
              id="pw"
              placeholder="비밀번호를 입력해주세요"
              onChange={(e) => setPw(e.target.value)}
            />
          </LoginInput>
        </InputContainer>
        <LogInBtn onClick={handleLogin}>로그인</LogInBtn>
        <SignUpBtn onClick={() => navigate(`/signup`)}>회원 가입</SignUpBtn>
      </Modal>
      {fail
        ? createPortal(<Toast>{fail}</Toast>, document.getElementById("toast")!)
        : null}
    </>
  );
};

export default LogIn;

const LogInBtn = styled(SignUpBtn)`
  background-color: white;
  color: black;
  font-weight: 600;
  border: 0.2rem solid black;
`;

const Toast = styled.p`
  height: 2rem;
  width: 40vw;
  position: absolute;
  bottom: 5rem;
  left: 50%;
  transform: translate(-50%, 0);

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(255, 0, 0, 0.8);
  color: white;
  font-weight: 600;
  border-radius: 5px;
  box-shadow: 0 0 8px 2px lightgray;
`;
