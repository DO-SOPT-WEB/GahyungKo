import { Modal, Header, LoginInput, InputTitle, Input, Button, SignUpBtn, InputContainer } from "../styles";

const SignUp = () => {
    return (
        <Modal>
            <Header>Sign Up</Header>
            <InputContainer>
                <LoginInput>
                    <InputTitle>ID</InputTitle>
                    <Input type="text"></Input>
                    <Button type="button">중복체크</Button>
                </LoginInput>
                <LoginInput>
                    <InputTitle>비밀번호</InputTitle>
                    <Input type="text"></Input>
                </LoginInput>
                <LoginInput>
                    <InputTitle>비밀번호 확인</InputTitle>
                    <Input type="text"></Input>
                </LoginInput>
                <LoginInput>
                    <InputTitle>닉네임</InputTitle>
                    <Input type="text"></Input>
                </LoginInput>
            </InputContainer>  
            <SignUpBtn>회원 가입</SignUpBtn>
        </Modal>
    );
}

export default SignUp;