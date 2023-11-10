import { useReducer } from "react";
import { Stage } from "../style";
import { Process } from "../style/item";
import ChoiceResult from "./tournament-result";
import { Title } from "./tournament-title";
import { List } from "./tournament-content";
import ButtonType from "./tournament-button";

function reducer(state, action){
    switch (action.type){
        case "previous":
                state.indexList.pop();
            return { count: state.count - 1,
                    indexList: state.indexList,
                    active: true };        
        case "next":
            state.indexList.push("");
            return { count: state.count + 1, 
                    indexList: state.indexList, 
                    active: false };
        case "select":
            state.indexList.splice(state.indexList.length-1, 1, action.answer)
            return { count: state.count,
                    indexList: state.indexList, 
                    active: true };
    };
}

export default reducer;

export const Choice = () => {
    const [page, dispatch] = useReducer(reducer, { count: 0, indexList: [], active: false});

    return page.count === 4
    ? (<ChoiceResult indexList={page.indexList}></ChoiceResult>)
    :(  <Stage>
            <Title pageCount={page.count}></Title>
            <Process> 
                {page.count? page.count+"/3" : ""}
            </Process>
            <List pageInfo={{count: page.count, answer: page.indexList[page.indexList.length-1], dispatch: dispatch}}></List>
            <ButtonType pageInfo={{count: page.count, active: page.active, dispatch: dispatch}}></ButtonType>
            {    console.log(page.indexList)   }
        </Stage>
    );
 }