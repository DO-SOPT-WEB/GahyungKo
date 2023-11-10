import { Question } from "../style/item";

export const Title = ({pageCount}) => {
    let title = "";

    switch (pageCount) {
        case 0:
            title = "원하는 추천 방식을 골라줘!";
            break;
        case 1:
            title = "누구랑 놀거야?";
            break;
        case 2:
            title = "뭐가 제일 중요해?";
            break;
        case 3:
            title = "어디가 좋아?";
            break;
    }      

    return <Question>{title}</Question>
}