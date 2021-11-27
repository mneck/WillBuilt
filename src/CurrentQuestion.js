import { useState, useEffect } from "react";
import questions from "./questions";

const CurrentQuestion = () => {
  function Form() {
    function handleSubmit(e) {
      e.preventDefault();
      console.log("You clicked submit.");
    }
  }
  const [answer, updateAnswer] = useState("");
  return (
    <div>
      <h3>Current Question</h3>
      <p>{questions[0].question}</p>
      <form>
        <label htmlFor="answer">
          Your Answer:
          <input
            id="answer"
            value={answer}
            placeholder="Answer"
            onChange={(e) => updateAnswer(e.target.value)}
          />
        </label>
      </form>
      <form onSubmit={Form}>
        <button type="submit">Submit</button>
      </form>
    </div>
    //   <header className="App-header">
    // <ul>
    //   {Questions.questions.map(({ id, question }) => (
    //     <li key={id}>{question}</li>
    //   ))}
    // </ul>
    //   </header>
  );
};

export default CurrentQuestion;
