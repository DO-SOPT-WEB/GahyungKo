import { useState } from "react";
import { Container, GlobalStyle, Header, Stage } from './style/index.jsx';
import { ChoiceBox, ChoiceBoxWrapper, Question } from './style/item.jsx';
import { Choice } from "./components/tournament.jsx";
import Random from "./components/random.jsx";

function App() {
  const [currentStage, setCurrentStage] = useState("");

  const render = () => {
    switch (currentStage) {
      case "random":
        return <Random />;

      case "tournament":
        return <Choice />;

      default:
        return (
          <Stage>
            <Question>원하는 추천 방식을 골라줘!</Question>
            <ChoiceBoxWrapper>
              <ChoiceBox type="button"
                onClick={() => {
                  setCurrentStage("random");
                }}
              >
                랜덤으로 추천
              </ChoiceBox>
              <ChoiceBox type="button"
                onClick={() => {
                  setCurrentStage("tournament");
                }}
              >
                취향대로 추천
              </ChoiceBox>
            </ChoiceBoxWrapper>
          </Stage>
        );
    }
  };
  // const renderResetBtn = () => {
  //   if (currentStage !== "") {
  //     return (
  //       <ResetBtn
  //         type="button"
  //         onClick={() => {
  //           setCurrentStage("");
  //         }}
  //       >
  //         Start Over
  //       </ResetBtn>
  //     );
  //   }
  // };
  return (
    <>
      <GlobalStyle/>
      <Header>🎅 크리스마스에 뭐 할래? 🎄</Header>
      <Container>
        {render()}
        {/*renderResetBtn()*/}
      </Container>
    </>
  );
} 

export default App

