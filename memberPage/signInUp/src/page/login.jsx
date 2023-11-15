import { useState } from "react";
import styled from "styled-components";
import { Modal, Header, LoginInput, Input, InputTitle, SignUpBtn, InputContainer } from "../styles";
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const LogIn = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const navigate = useNavigate();

    const handleLogin = async () => {
        console.log(pw);
        try{
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/members/sign-in`, {
                username: id,
                password: pw,
            });
            response&&navigate(`/mypage/${response.data.id}`);
        } catch(err){
            console.log(err);
        }
    };

    return (
        <Modal>
            <Header>Log In</Header>
            <InputContainer>
                <LoginInput>
                    <InputTitle>ID</InputTitle>
                    <Input type="text" name="username" id="username"
                    placeholder="ID를 입력해주세요"
                    onKeyUp={(e) => setId(e.target.value)}/>
                </LoginInput>
                <LoginInput>
                    <InputTitle>비밀번호</InputTitle>
                    <Input type="text" name="pw" id="pw"
                    placeholder="비밀번호를 입력해주세요"
                    onKeyUp={(e) => setPw(e.target.value)}/>
                </LoginInput>
            </InputContainer>
            <LogInBtn onClick={handleLogin}>로그인</LogInBtn>
            <SignUpBtn onClick={()=>navigate(`/signup`)}>회원 가입</SignUpBtn>
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