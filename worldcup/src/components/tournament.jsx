import { useEffect, useReducer, useState } from "react";
import { Stage } from "../style";
import { ChoiceBox, ChoiceBoxWrapper, ButtonWrapper, MoveButton, Button, Process } from "../style/item";
import ChoiceResult from "./tournament-result";
//import { List } from "./tournament-content";
import { Title } from "./tournament-title";
//import ButtonType from "./tournament-button";

function reducer(state, action){
    switch (action.type){
        case "previous":
            return { count: state.count - 1,
                indexList: state.indexList.splice(state.indexList.length -1),
                active: true, answer: state.answer };
        case "next":
            return state.count === 0
                ?{ count: state.count + 1, indexList: [], 
                    active: false, answer: state.answer }
                :{ count: state.count + 1, indexList: [...state.indexList, state.answer], 
                    active: false, answer: state.answer };
        case "select":
            return { count: state.count, indexList: state.indexList, 
                active: true, answer: action.answer }
    }
}

export default reducer;

export const Choice = () => {
    const [list, setList] = useState(["취향대로 추천"]);
    const [next, setNext] = useState("다음으로");
    const [page, dispatch] = useReducer(reducer, { count: 0, indexList: [], active: false, answer: "" });

    useEffect(() => {
        switch (page.count) {
            case 0:
                setList(["취향대로 추천"]);
                setNext("시작!");
                break;
            case 1:
                setList(["가족들이랑 놀래", "친구들이나 애인이랑 놀래", "웨비들💛이랑 놀래"]);
                setNext("다음으로");
                break;
            case 2:
                setList(["맛있는 거 먹기", "크리스마스 분위기 느끼기", "신나게 놀기"]);
                setNext("다음으로");
                break;
            case 3:
                setList(["실내가 좋아", "실외가 좋아"]);
                setNext("결과보기");
                break;
        }   
    }, [page.count]);

    function buttonType(num){
        return num
        ? <ButtonWrapper>
            <MoveButton onClick={() => {dispatch({ type: "previous" })}}>
                이전으로
            </MoveButton>
            <MoveButton onClick={() => {dispatch({ type: "next" })}} 
            disabled={!page.active}>
                {next}
            </MoveButton>
        </ButtonWrapper>
        : <ButtonWrapper>
            <Button onClick={() => {dispatch({ type: "next" })}}>
                {next}
            </Button>
        </ButtonWrapper>
    }

    return page.count === 4
    ? (<ChoiceResult indexList={page.indexList}></ChoiceResult>)
    :(  <Stage>
            <Title pageCount={page.count}></Title>
            <Process> 
                {page.count? page.count+"/3" : ""}
            </Process>
            <ChoiceBoxWrapper>
            {list.map((item) => (
                <ChoiceBox key={item} onClick={(e) => {dispatch({ type: "select", answer: e.target.innerText })}}
                    className={ page.answer === item ? "active" : null}>
                        {item}
                </ChoiceBox>
            ))}
            </ChoiceBoxWrapper>
            {/* <ButtonType pageInfo={page}></ButtonType> */}
            {buttonType(page.count)}
        </Stage>
    );
 }