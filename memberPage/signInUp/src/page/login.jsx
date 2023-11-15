import styled from "styled-components";
import { Modal, Header, LoginInput, Input, InputTitle, SignUpBtn, InputContainer } from "../styles";
import { Outlet, useNavigate } from 'react-router-dom';

const LogIn = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate(`/mypage`);
    };

    const handleSignup = () => {
        navigate(`/signup`);
    };

    return (
        <Modal>
            <Header>Log In</Header>
            <Outlet />
            <InputContainer>
                <LoginInput>
                    <InputTitle>ID</InputTitle>
                    <Input type="text" placeholder="ID를 입력해주세요"></Input>
                </LoginInput>
                <LoginInput>
                    <InputTitle>비밀번호</InputTitle>
                    <Input type="text" placeholder="비밀번호를 입력해주세요"></Input>
                </LoginInput>
            </InputContainer>
            <LogInBtn onClick={handleLogin}>로그인</LogInBtn>
            <SignUpBtn onClick={handleSignup}>회원 가입</SignUpBtn>
        </Modal>
    );
}

export default LogIn;

const LogInBtn = styled(SignUpBtn)`
    background-color: white;
    color: black;
    font-weight: 600;
    border: 0.2rem solid black;
`;