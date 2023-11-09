import { Stage } from "../style/index";
import { Question, ChoiceBox, ChoiceBoxWrapper, Button } from "../style/item";
import { useState, useEffect } from "react";
import RandomResult from "./random-result";

function CountDown() {
    function Timer(){
        const [time, setTime] = useState(3);
    
        useEffect(() => {
            time > 0 && setTimeout(() => setTime(time - 1), 1000);
        }, [time]);
    
        return time
        ? <Stage>{time}</Stage>
        : <RandomResult></RandomResult> ;
    }

    return (
        <Stage>
            {Timer()}
        </Stage>
    );
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