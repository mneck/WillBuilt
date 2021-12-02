import { useState, useEffect, createContext } from "react";
import React from "react";
import questions from "./questions";
import { AppContext } from "./AppContext";

const QuestionContext = React.createContext(null);

const CurrentQuestion = () => {
  // const MyContext = createContext(<default>);
  // <MyContext.Provider value={initialValue}>  --> passes initialValue to MyContext
  // const value = useContext(MyContext);
  // Receives the value stored in the context of MyContext
  // This value can be received in any child component of <MyContext.Provider>...</MyContext.Provider>
  // const value = useContext(MyContext); --> Receives the value stored in the context of MyContext.
  // This value can be received in any child component of <MyContext.Provider>...</MyContext.Provider>
  const [questionsList, setQuestionsList] = React.useState({ questions });
  const [answer, setAnswer] = useState("");

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    const newList = [questionsList];
    setAnswer(newList);
    e.preventDefault();
  };

  // function Form() {
  //   function handleSubmit(e) {
  //     e.preventDefault();
  //     console.log("You clicked submit.");
  //   }
  // }

  return (
    // <div>
    //   <p>{Form()}</p>
    //   <p>{answer}</p>
    //   <button onClick={() => updateAnswer(answer + 1)}>Increment Value</button>
    // </div>

    <AppContext.Provider value={answer}>
      <div>
        <h3>Current Question</h3>
        <p>{questions[0].name}</p>

        {/*questions.map((item) => (
          //   <li key={item.id}>{item.name}</li>
          // ))}
          </ul> */}

        <form>
          <label htmlFor="answer">
            Your Answer:
            <input
              id="answer"
              type="text"
              value={answer}
              placeholder="Answer"
              onChange={handleChange}
            />
          </label>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </AppContext.Provider>
  );
};

export default CurrentQuestion;
