import { Question, Answer, AnswerImg, Button } from "../style/item";
import { Stage } from "../style";
import { RESULT_LIST } from "../assets/result-item";
import { Choice } from "./tournament";
import { useState } from "react";

function ChoiceResult({page}) {
  const [initial, setInitial] = useState(false);
  const { count, indexList: [firstIndex, secondIndex, thirdIndex] } = page;
  
  const tempInfo = RESULT_LIST.filter(item => (
    item.firstIndex === firstIndex 
    && item.secondIndex === secondIndex 
    && item.thirdIndex === thirdIndex 
  ));
  const [{link, description , ...indexs}] = tempInfo;

  return initial === false 
  ?(
    <Stage>
      <Question>크리스마스에 이거 하면 되겠다!</Question>
        <AnswerImg src={link}></AnswerImg>
        <Answer>🌟{description}❄️</Answer>
        <Button onClick={ () => {setInitial(true)} }>다시하기</Button>
      </Stage>
  )
  : <Choice></Choice>;
}

export default ChoiceResult;