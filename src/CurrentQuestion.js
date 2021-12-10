import React, { useState, useEffect } from "react";
import questions from "./questions";

// const QuestionContext = React.createContext(null);

const answerList = [];

const CurrentQuestion = ({
  updateDraft,
  switchToNextQuestion,
  questionIndex,
}) => {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value) {
      updateDraft(value, questionIndex);
      switchToNextQuestion();
    }
    setValue("");
  };

  return (
    <div>
      <h3>Current question:</h3>
      <p>{questions[questionIndex].name}</p>
      <ul>
        <form onSubmit={handleSubmit}>
          {questions[questionIndex].inputType === "text" && (
            <input type="text" value={value} onChange={handleChange} />
          )}
          {questions[questionIndex].inputType === "dropDown" && (
            <div>
              <select onChange={handleChange}>
                <option disabled hidden selected>
                  Select One
                </option>
                {questions[questionIndex].options.map((option) => (
                  <option value={option}>{option}</option>
                ))}
              </select>
            </div>
          )}
          <button type="submit">Submit Answer</button>
        </form>
      </ul>
    </div>
  );
};

export default CurrentQuestion;
