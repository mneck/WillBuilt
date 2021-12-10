import "./App.css";
import CurrentQuestion from "./CurrentQuestion";
import Answers from "./Answers";
import questions from "./questions";
import React, { useState } from "react";
import Footer from "./Footer";
import Draft from "./Draft";

function App() {
  const [appState, setAppState] = useState({
    userName: "",
    userCity: "",
    execName: "",
    execRelation: "",
    execCity: "",
    execProvince: "",
    altExecName: "",
    altExecRelation: "",
    altExecCity: "",
    altExecProvince: "",
    numOfBeneficiaries: "",
    beneficiaryOneName: "",
    beneficiaryOneRelation: "",
    beneficiaryOneCity: "",
    beneficiaryOneProvince: "",
    beneficiaryTwoName: "",
    beneficiaryTwoRelation: "",
    beneficiaryTwoCity: "",
    beneficiaryTwoProvince: "",
    beneficiaryThreeName: "",
    beneficiaryThreeRelation: "",
    beneficiaryThreeCity: "",
    beneficiaryThreeProvince: "",
    predeceasedPlans: "",
    termsForMinors: "",
    minorTrustee: "",
    minorAge: "",
    remains: "",
    witnessOneName: "",
    witnessOneOccupation: "",
    witnessOneAddress: "",
    witnessTwoName: "",
    witnessTwoOccupation: "",
    witnessTwoAddress: "",
  });

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const updateDraft = (text, questionIndex) => {
    const key = questions[questionIndex].key;
    setAppState({ ...appState, [key]: text });
  };

  const switchToNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  // const answerArray = ;

  return (
    <div className="App grid-container">
      <div class="currentQ">
        {
          <CurrentQuestion
            updateDraft={updateDraft}
            switchToNextQuestion={switchToNextQuestion}
            questionIndex={currentQuestionIndex}
          />
        }
      </div>

      <div class="answers">
        <h4>Your Answers</h4>
        <Answers appState={appState} />
      </div>

      <div class="draft">
        <Draft appState={appState} />
      </div>
      <Footer />
    </div>
  );
}

<div class="item1">Current Question</div>;

export default App;
