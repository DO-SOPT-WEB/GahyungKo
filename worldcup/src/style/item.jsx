import styled from "styled-components";

export const Question = styled.h1`
    height: 3rem;
    width: 45vw;
    padding-bottom: 0.2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 0.5rem;
    ${({ theme }) => theme.fonts.subtitle }
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
    width: 12vw;
    height: 12vw;
    padding: 0.5rem;

    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.red};
    font-size: 1.2rem;
    border: 0.4rem solid ${({ theme }) => theme.colors.red};
    border-radius: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;

    word-break: keep-all;

    &:hover,
    &:focus,
    &.active{
        background-color: ${({ theme }) => theme.colors.red};
        color: ${({ theme }) => theme.colors.white};
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

    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 0.3rem;
`;

export const MoveButton = styled(Button)`
    &:hover{
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.green};
        font-weight: 600;
    }
    &:disabled{
        background-color: lightgray;
        color: ${({ theme }) => theme.colors.darkred};
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

    color: ${({ theme }) => theme.colors.red};
    ${({ theme }) => theme.fonts.subtitle }
    `;

export const AnswerImg = styled.img`
    width: 30vh;
    height: 30vh;

    object-fit: cover;
    overflow: hidden;
`;

export const ResetBtn = styled(Button)`
    position: fixed;
    right: 5rem;

    ${({ theme }) => theme.fonts.content }
`;

export const Process = styled.span`
    position: absolute;
    top: 20vh;
    right: 20vw;

    color: ${({ theme }) => theme.colors.green};
`;