import { useState, useEffect } from "react";
import {
  Modal,
  Header,
  LoginInput,
  InputTitle,
  Input,
  Button,
  SignUpBtn,
  InputContainer,
} from "../styles";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const SignUp = () => {
  const [activeSignUp, setActiveSignUp] = useState(false);
  const [exist, setExist] = useState(null);

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [checkPw, setCheckPw] = useState("");
  const [nickname, setNickname] = useState("");

  const navigate = useNavigate();

  //회원 가입 버튼 활성화
  useEffect(() => {
    id && pw && checkPw && nickname && checkPw === pw && exist === false
      ? setActiveSignUp(true)
      : setActiveSignUp(false);
  }, [id, pw, checkPw, nickname, exist]);

  //아이디 이벤트 발생시 작동하는 함수
  const idEvent = (event) => {
    setId(event.target.value);
    setExist(null);
    setActiveSignUp(false);
  };

  //아이디 중복확인
  const idCheck = async () => {
    try {
      const exist = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/v1/members/check?username=${id}`
      );
      setExist(exist.data.isExist);
    } catch (err) {
      console.log(err);
    }
  };

  //가입할 회원 데이터 전달
  const signUpHandler = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/members`,
        {
          username: id,
          password: pw,
          nickname: nickname,
        }
      );
      response && navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal>
      <Header>Sign Up</Header>
      <InputContainer>
        <LoginInput>
          <InputTitle>ID</InputTitle>
          <Input
            type="text"
            name="id"
            id="id"
            onChange={(e) => {
              idEvent(e);
            }}
          />
          <Button
            className={
              exist === true ? "exist" : exist === false ? "notExist" : null
            }
            type="button"
            onClick={idCheck}
          >
            중복체크
          </Button>
        </LoginInput>
        <LoginInput>
          <InputTitle>비밀번호</InputTitle>
          <Input
            type="text"
            name="password"
            id="password"
            onChange={(e) => {
              setPw(e.target.value);
            }}
          />
        </LoginInput>
        <LoginInput>
          <InputTitle>비밀번호 확인</InputTitle>
          <Input
            type="text"
            name="pwCheck"
            id="pwCheck"
            onChange={(e) => {
              setCheckPw(e.target.value);
            }}
          />
        </LoginInput>
        <LoginInput>
          <InputTitle>닉네임</InputTitle>
          <Input
            type="text"
            name="name"
            id="name"
            onChange={(e) => {
              setNickname(e.target.value);
            }}
          />
        </LoginInput>
      </InputContainer>
      <SignUpBtn
        className={!activeSignUp && "inactive"}
        disabled={!activeSignUp}
        onClick={signUpHandler}
      >
        회원 가입
      </SignUpBtn>
    </Modal>
  );
};

export default SignUp;
