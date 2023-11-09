import { useEffect, useReducer, useState } from "react";
import { Stage } from "../style";
import { ChoiceBox, ChoiceBoxWrapper, ButtonWrapper, MoveButton, Question, Button, Process } from "../style/item";
import ChoiceResult from "./tournament-result";

function reducer(state, action){
    switch (action.type){
        case "previous":
            return { count: state.count - 1,
                indexList: state.indexList.splice(state.indexList.length -1)};
        case "next":
            return state.count === 0
                ?{ count: state.count + 1, indexList: []}
                :{ count: state.count + 1, indexList: [...state.indexList, action.add]};
    }
}

export const Choice = () => {
    const [title, setTitle] = useState("원하는 추천 방식을 골라줘!");
    const [list, setList] = useState(["취향대로 추천"]);
    const [next, setNext] = useState("다음으로");
    const [select, setSelect] = useState(false);
    const [page, dispatch] = useReducer(reducer, { count: 0, indexList: []});
    const [answer, setAnwer] = useState("");

    useEffect(() => {
        switch (page.count) {
            case 0:
                setTitle("원하는 추천 방식을 골라줘!");
                setList(["취향대로 추천"]);
                setNext("시작!");
                break;
            case 1:
                setTitle("누구랑 놀거야?");
                setList(["가족들이랑 놀래", "친구들이나 애인이랑 놀래", "웨비들💛이랑 놀래"]);
                setNext("다음으로");
                break;
            case 2:
                setTitle("뭐가 제일 중요해?");
                setList(["맛있는 거 먹기", "크리스마스 분위기 느끼기", "신나게 놀기"]);
                setNext("다음으로");
                break;
            case 3:
                setTitle("어디가 좋아?");
                setList(["실내가 좋아", "실외가 좋아"]);
                setNext("결과보기");
                break;
        }   
    }, [page.count]);

    function buttonType(num){
        return num
        ? <ButtonWrapper>
            <MoveButton onClick={() => {dispatch({ type: "previous" }); setSelect(true);}}>
                이전으로
            </MoveButton>
            <MoveButton onClick={() => {dispatch({ type: "next", add: answer }); setSelect(false);}} 
            disabled={!select}>
                {next}
            </MoveButton>
        </ButtonWrapper>
        : <ButtonWrapper>
            <Button onClick={() => {dispatch({ type: "next" }); setSelect(false);}}>
                {next}
            </Button>
        </ButtonWrapper>
    }

    const selectAnswer = (e) => {
        setSelect(true);
        setAnwer(e.target.innerText);
    }

    return page.count === 4
    ? (<ChoiceResult page={page}></ChoiceResult>)
    :(
        <Stage>
            <Question>{title}</Question>
            <Process> 
                {page.count? page.count+"/3" : ""}
            </Process>
            <ChoiceBoxWrapper>
                {list.map((item) => (
                    <ChoiceBox key={item} onClick={(e) => {{selectAnswer(e)}}}
                    className={answer === item ? "active" : null}>
                        {console.log(item)}
                        {console.log(answer)}
                        {item}
                    </ChoiceBox>
                ))}
            </ChoiceBoxWrapper>
            {buttonType(page.count)}
        </Stage>
    );
 }