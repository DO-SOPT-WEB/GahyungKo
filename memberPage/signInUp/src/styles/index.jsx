import styled from 'styled-components';

export const Modal = styled.main`
    width: 70vw;
    height: 56vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 3rem 0;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    box-shadow: 0 0 20px 5px lightgray;
    border-radius: 8px;
`;

export const Header = styled.header`
    font-size: 1.5rem;
    font-weight: 600;
`;

export const InputContainer = styled.section`
    width: 80%;
    margin: 2rem 0;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.8rem;
`;

export const LoginInput = styled.div`
    height: 1.8rem;

    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const InputTitle = styled.span`
    width: 6rem;
    
    font-size: 0.8rem;
    font-weight: 600;
`;

export const Input = styled.input`
    height: 1.8rem;

    flex: 1;
`;

export const Button = styled.button`
    width: 5rem;
    height: 1.8rem;

    background-color: black;
    color: white;
    font-size: 0.9rem;
    border-radius: 5px;
`;

export const SignUpBtn = styled(Button)`
    height: 2.5rem;
    width: 80%;

    font-size: 1rem;
`;