import styled from "styled-components";

export const Question = styled.h1`
    height: 2.5rem;
    width: 50vw;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: green;
    color: white;
    border-radius: 0.3rem;
    font-size: 1.225rem;
    font-weight: 600;
`;

export const ChoiceBoxWrapper = styled.div`
    width: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
`;

export const ChoiceBox = styled.button`
    min-width: 10rem;
    min-height: 10rem;
    width: 15vw;
    height: 15vw;
    padding: 0.5rem;

    background-color: white;
    border: 0.25rem solid red;
    border-radius: 1rem;
    font-size: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;

    word-break: keep-all;

    &:hover,
    &:focus{
        background-color: red;
        color: white;
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    gap: 2.5rem;
`;

export const Button = styled.button`
    height: 1.8rem;
    width: 5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: green;
    color: white;
    border-radius: 0.3rem;
`;

export const MoveButton = styled(Button)`
    &:hover{
        background-color: white;
        color: green;
        font-weight: 600;
    }
    &:disabled{
        background-color: lightgray;
        color: black;
        cursor: not-allowed;
    }
`;

export const Answer = styled.h2`
    height: 2.5rem;
    width: 50vw;
    padding: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    color: red;
    font-size: 1.4rem;
    font-weight: 600;
`;

export const AnswerImg = styled.img`
    width: 30vh;
    height: 30vh;

    object-fit: cover;
    overflow: hidden;
`;