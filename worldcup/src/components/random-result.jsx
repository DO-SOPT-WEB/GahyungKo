import { Question, Answer, AnswerImg, Button } from "../style/item";
import { Stage } from "../style";
import { RESULT_LIST } from "../assets/result-item";
import Random from "./random";
import { useState } from "react";

function RandomResult(){
    const [initial, setInitial] = useState(false);

    const randomVal = Math.floor( Math.random()*RESULT_LIST.length );
    const tempInfo = RESULT_LIST[randomVal];
    const {link, description , ...indexs} = tempInfo;
  
    return initial === false 
    ?(
        <Stage>
            <Question>크리스마스에 이거 하면 되겠다!</Question>
            <AnswerImg src={link}></AnswerImg>
            <Answer>🌟{description}❄️</Answer>
            <Button onClick={ () => {setInitial(true)} }>다시하기</Button>
        </Stage>
    )
    : <Random></Random>;  
}

export default RandomResult;