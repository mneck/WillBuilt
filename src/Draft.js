import React, { useState, useEffect } from "react";
import Questions, { questions } from "./questions";
import CurrentQuestion from "./CurrentQuestion";

const Draft = (props) => {
  return (
    <div>
      <p>
        This is the last Will of me, {props.appState.userName.toUpperCase()},
        presently of {props.appState.userCity}, British Columbia.
      </p>
      <p>
        <span class="tooltip">
          1. I revoke all my prior wills and codicils.
          <span class="tooltiptext">
            Headers, you are cancelling any wills you've made in the past and
            any changes [codicils] to those wills.
          </span>
        </span>
      </p>
      <h3>Appointment of Executor and Trustee</h3>
      <p>
        2. In this Will I refer to the person who is both the Executor of my
        Will and the Trustee of my Estate as my "Trustee".
      </p>
      <p>
        3. (a) I appoint my {props.appState.execRelation},{" "}
        {props.appState.execName.toUpperCase()}, to be my Trustee.
      </p>
      <p>
        (b) If {props.appState.execName.toUpperCase()} is unwilling or unable to
        act or continue to act as my Trustee, I appoint my{" "}
        {props.appState.altExecRelation},{" "}
        {props.appState.altExecName.toUpperCase()}, of{" "}
        {props.appState.altExecCity}, {props.appState.altExecProvince} to be my
        Trustee.
      </p>
      <h3>Trustee to Administer My Estate</h3>
      <p>
        {" "}
        4. I give my Trustee all my property of every kind and wherever located
        to administer as I direct in this Will. In administering my estate, my
        Trustee may convert or retain my estate as set out in this Will.
      </p>
      <p>
        {" "}
        5. I direct my Trustee to hold that property on the following trusts:
      </p>
      <h3>Debts to Be Paid From My Estate</h3>
      <p> (a) to pay out of my estate:</p>
      <p>
        {" "}
        (i) my debts, including income taxes payable up to and including the
        date of my death;
      </p>
      <p>
        {" "}
        (ii) my funeral and other expenses related to this Will and my death;
        and
      </p>
      <p>
        {" "}
        (iii) all estate, gift, inheritance, succession, and other death taxes
        or duties payable in respect of all property passing on my death;
      </p>
      <h3>Residue of Estate</h3>
      <p>
        {" "}
        to give the residue of my estate (the "Residue") to my{" "}
        {props.appState.beneficiaryOneRelation},{" "}
        {props.appState.beneficiaryOneName.toUpperCase()}, of{" "}
        {props.appState.beneficiaryOneCity},{" "}
        {props.appState.beneficiaryOneProvince} if she is alive on the date that
        is 30 days after the date of my death;
      </p>
    </div>
  );
};

export default Draft;
