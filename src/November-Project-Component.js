import logo from "./logo.svg";
import "./App.css";
import * as questionsInApp from "./src/questions.js";
import Clock from "./Clock.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p></p>
        <p>This is the November Project.</p>
        <p>Edit and reload.</p>
        <div>
          <Clock />
        </div>

        <ul>
          {questionsInApp.questions.map(({ id, question }) => (
            <li key={id}>{question}</li>
          ))}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
