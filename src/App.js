import "./App.css";
import CurrentQuestion from "./CurrentQuestion";
import ListOfAnswers from "./Answers";

function App() {
  return (
    <div className="App grid-container">
      <div class="item1">{<CurrentQuestion />}</div>
      <div class="item2">
        <h4>Questions asked and answered:</h4>
        <ListOfAnswers />
      </div>
      <div class="item3">
        <h4>In this Will... [...Filler text...]{/* <Draft /> */}</h4>
      </div>
      <div class="item4">
        For demo purposes only. 😉 If you need a will, speak with a lawyer or
        notary.
      </div>
    </div>
  );
}

<div class="item1">Current Question</div>;

export default App;
