import { useState, useEffect } from "react";
import Questions, { questions } from "./questions";

const ListOfAnswers = () => {
  return (
    <div>
      <header className="App-header">
        {console.log(questions)}
        <ol>
          {questions.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ol>
      </header>
    </div>
  );
};

export default ListOfAnswers;
