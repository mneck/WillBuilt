import "./App.css";
import CurrentQuestion from "./CurrentQuestion";
import ListOfAnswers from "./Answers";
import { AppContext } from "./AppContext";
import people from "./people";

function App() {
  return (
    <div className="App grid-container">
      <div class="item1">{<CurrentQuestion />}</div>
      <div class="item2">
        <h4>Questions asked and answered:</h4>
        <ListOfAnswers />
      </div>
      <div class="item3">
        <h4>
          <div>
            <p>
              This is the last Will of me, {people[0].toUpperCase()}, presently
              of
              {people[1]}.
            </p>
            <p>1. I revoke all my prior wills and codicils.</p>
            <h3>Appointment of Executor and Trustee</h3>
            <p>
              2. In this Will I refer to the person who is both the Executor of
              my Will and the Trustee of my Estate as my "Trustee".
            </p>
            <p>
              3. (a) I appoint my {people[3]}, {people[2]}, to be my Trustee.
            </p>
            <p>
              (b) If {people[2]} is unwilling or unable to act or continue to
              act as my Trustee, I appoint my {people[6]}, {people[5]}, of{" "}
              {people[7]} to be my Trustee.
            </p>
            <h3>Trustee to Administer My Estate</h3>
            <p>
              {" "}
              4. I give my Trustee all my property of every kind and wherever
              located to administer as I direct in this Will. In administering
              my estate, my Trustee may convert or retain my estate as set out
              in this Will.
            </p>
          </div>
        </h4>
      </div>
      <div class="item4">
        For demo purposes only. 😉 Do not use or rely on any content provided by
        this web application for estate planning purposes without first speaking
        with a lawyer or notary. Seriously.
      </div>
    </div>
  );
}

<div class="item1">Current Question</div>;

export default App;
