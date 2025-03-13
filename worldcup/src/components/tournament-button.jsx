import { Button, ButtonWrapper, MoveButton } from "../style/item";

function ButtonType({pageInfo}){
    const {count, active, dispatch} = pageInfo;

    return count
    ? <ButtonWrapper>
        <MoveButton onClick={() => {dispatch({ type: "previous" })}}>
            이전으로
        </MoveButton>
        <MoveButton onClick={() => {dispatch({ type: "next" })}} 
        disabled={!active}>
            {count === 3 ? "결과보기" : "다음으로"}
        </MoveButton>
    </ButtonWrapper>
    : <ButtonWrapper>
        <Button onClick={() => {dispatch({ type: "next" })}}>
            시작!
        </Button>
    </ButtonWrapper>
}

export default ButtonType;