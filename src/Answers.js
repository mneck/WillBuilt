import { useState, useEffect } from "react";
import Questions from "./questions";

const ListOfAnswers = () => {
  return (
    <div>
      <header className="App-header">
        {console.log(Questions)}
        <ol>
          {Questions.map(({ id, question }) => (
            <li key={id}>{question}</li>
          ))}
        </ol>
      </header>
    </div>
  );
};

export default ListOfAnswers;
