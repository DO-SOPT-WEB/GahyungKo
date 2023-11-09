import { Question, Answer, AnswerImg, Button } from "../style/item";
import { Stage } from "../style";
import { RESULT_LIST } from "../assets/result-item";

function Result(page) {
  {console.log(page)}
  const { a, b, c, d} = page;


  return (
    <Stage>
      <Question>크리스마스에 이거 하면 되겠다!</Question>
        <AnswerImg></AnswerImg>
        <Answer></Answer>
        <Button>다시하기</Button>
      </Stage>
  );
}

export default Result;