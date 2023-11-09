import { useEffect, useReducer, useState } from "react";
import { Stage } from "../style";
import { ChoiceBox, ChoiceBoxWrapper, ButtonWrapper, MoveButton, Question, Button } from "../style/item";
import Result from "./result";

function reducer(state, action){
    switch (action.type){
        case "previous":
            return { count: state.count - 1,
                indexList: state.indexList.splice(state.indexList.length -1) };
        case "next":
            return state.count === 0
                ?{ count: state.count + 1, indexList: [] }
                :{ count: state.count + 1, indexList: [...state.indexList, action.add] };
    }
}

export const Choice = () => {
    const [click, setClick] = useState(false);
    const [title, setTitle] = useState("원하는 추천 방식을 골라줘!");
    const [list, setList] = useState(["취향대로 추천"]);
    const [next, setNext] = useState("다음으로");
    const [page, dispatch] = useReducer(reducer, { count: 0, indexList: [] });
    const [answer, setAnwer] = useState("");

    const active = () => {
        if(click === false)
            return (<MoveButton onClick={() => {dispatch({ type: "next", add: answer })}} disabled>{next}</MoveButton>);
        else    
            return (<MoveButton onClick={() => {dispatch({ type: "next", add: answer })}}>{next}</MoveButton>);
    }

    const selectAnswer = (e) => {
        setClick(true);
        setAnwer(e.target.innerText);
    }

    useEffect(() => {
        setClick(false); 

        switch (page.count) {
            case 0:
                setTitle("원하는 추천 방식을 골라줘!");
                setList(["취향대로 추천"]);
                break;
            case 1:
                setTitle("누구랑 놀거야?");
                setList(["가족들이랑 놀래", "친구들이나 애인이랑 놀래", "웨비들💛이랑 놀래"]);
                break;
            case 2:
                setTitle("뭐가 제일 중요해?");
                setList(["맛있는 거 먹기", "크리스마스 분위기 느끼기", "신나게 놀기"]);
                break;
            case 3:
                setTitle("어디가 좋아?");
                setList(["실내가 좋아", "실외가 좋아"]);
                setNext("결과보기");
                break;
        }   
    }, [page.count]);

    function ButtonType(num){
        if(num === 0){
            return(
            <ButtonWrapper>
                <Button onClick={() => {dispatch({ type: "next" })}}>시작!</Button>
            </ButtonWrapper>);
        }
        else{
            return(
            <ButtonWrapper>
                <MoveButton onClick={() => {dispatch({ type: "previous" })}}>이전으로</MoveButton>
                {active()}
            </ButtonWrapper>
            );
        }
    }

    return page.count === 4
    ? (<Result page={page}></Result>)
    :(
        <Stage>
            <Question>{title}</Question>
            <ChoiceBoxWrapper>
                {list.map((item) => (
                    <ChoiceBox key={item} onClick={(e) => {{selectAnswer(e)}}}>
                        {item}
                    </ChoiceBox>
                ))}
            </ChoiceBoxWrapper>
            {ButtonType(page.count)}
        </Stage>
    );
 }