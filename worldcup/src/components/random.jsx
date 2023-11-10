import { Stage } from "../style/index";
import { Question, ChoiceBox, ChoiceBoxWrapper, Button } from "../style/item";
import { useState, useEffect } from "react";
import RandomResult from "./random-result";
import styled, { keyframes } from 'styled-components';

function CountDown() {
    function Timer(){
        const [time, setTime] = useState(3);
    
        useEffect(() => {
            time > 0 && setTimeout(() => setTime(time - 1), 1000);
        }, [time]);
    
        return time
        ? <Stage><NumEffect>{time}</NumEffect></Stage>
        : <RandomResult></RandomResult> ;
    }

    return (<>{Timer()}</>);
}

function Random(){
    const [start, setStart] = useState(false);

    return start === false
    ?(
        <Stage>
            <Question>원하는 추천 방식을 골라줘!</Question>
            <ChoiceBoxWrapper>
                <ChoiceBox>
                    랜덤으로 추천
                </ChoiceBox>
            </ChoiceBoxWrapper>
            <Button onClick={() => {setStart(true)}}>시작!</Button>
        </Stage>
    )
    :<CountDown></CountDown>;
}

export default Random;

/* 카운트다운 애니메이션 스타일 */
const blink = keyframes`
    50% {
        opacity: 0;
    }
`;

const NumEffect = styled.span`
    font-size: 5.2rem;
    color: white;
    text-shadow: 3.2px 3.2px 0px ${({ theme }) => theme.colors.red}, 6.4px 6.4px 0px ${({ theme }) => theme.colors.darkRed};;

    animation: ${blink} 1.025s step-end infinite;
`;