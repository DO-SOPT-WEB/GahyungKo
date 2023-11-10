import { ChoiceBoxWrapper } from "../style/item";

export const List = (pageCount) => {
    const list = [];

    switch (pageCount) {
        case 0:
            list = (["취향대로 추천"]);
            break;
        case 1:
            list = (["가족들이랑 놀래", "친구들이나 애인이랑 놀래", "웨비들💛이랑 놀래"]);
            break;
        case 2:
            list = (["맛있는 거 먹기", "크리스마스 분위기 느끼기", "신나게 놀기"]);
            break;
        case 3:
            list = (["실내가 좋아", "실외가 좋아"]);
            break;
    }      

    return (
        <ChoiceBoxWrapper>
            {list.map((item) => (
                <ChoiceBox key={item} onClick={(e) => {{selectAnswer(e)}}}
                    className={answer === item ? "active" : null}>
                        {item}
                </ChoiceBox>
            ))}
        </ChoiceBoxWrapper>
    );
}