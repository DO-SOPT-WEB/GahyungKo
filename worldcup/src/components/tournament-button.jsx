import reducer from "./tournament";
import { useReducer } from "react";
import { Button, ButtonWrapper, MoveButton } from "../style/item";

function ButtonType({pageInfo}){
    const {count, indexList, active, answer} = pageInfo;
    const [page, dispatch] = useReducer(reducer, { count: count, indexList: indexList, active: active, answer: answer });

    return count
    ? <ButtonWrapper>
        <MoveButton onClick={() => {dispatch({ type: "previous" })}}>
            이전으로
        </MoveButton>
        <MoveButton onClick={() => {dispatch({ type: "next" })}} 
        disabled={!page.active}>
            {page.count===3 ? "결과보기" : "다음으로"}
        </MoveButton>
    </ButtonWrapper>
    : <ButtonWrapper>
        <Button onClick={() => {dispatch({ type: "next" })}}>
            시작!
        </Button>
    </ButtonWrapper>
}

export default ButtonType;