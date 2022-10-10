import React, { useState, useEffect } from "react";
import Questions, { questions } from "./questions";
import CurrentQuestion from "./CurrentQuestion";

const Answers = (props) => {
  {
    const csvExport = [
      props.appState.userName,
      props.appState.userCity,
      props.appState.execName,
      props.appState.execRelation,
      props.appState.execCity,
      props.appState.execProvince,
      props.appState.altExecName,
      props.appState.altExecRelation,
      props.appState.altExecCity,
      props.appState.altExecProvince,
      props.appState.numOfBeneficiaries,
      props.appState.beneficiaryOneName,
      props.appState.beneficiaryOneRelation,
      props.appState.beneficiaryOneCity,
      props.appState.beneficiaryOneProvince,
      props.appState.beneficiaryTwoName,
      props.appState.beneficiaryTwoRelation,
      props.appState.beneficiaryTwoCity,
      props.appState.beneficiaryTwoProvince,
      props.appState.beneficiaryThreeName,
      props.appState.beneficiaryThreeRelation,
      props.appState.beneficiaryThreeCity,
      props.appState.beneficiaryThreeProvince,
      props.appState.predeceasedPlans,
      props.appState.termsForMinors,
      props.appState.minorTrustee,
      props.appState.minorAge,
      props.appState.remains,
      props.appState.witnessOneName,
      props.appState.witnessOneOccupation,
      props.appState.witnessOneAddress,
      props.appState.witnessTwoName,
      props.appState.witnessTwoOccupation,
      props.appState.witnessTwoAddress,
    ];
  }

  return (
    <div>
      <header className="table">
        {/*}
          {questions.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
* Pass down props from App to ListofAnswers as well as callback functions
* Need to move things and decouple App component...
userName

           */}

        <table>
          <tr>
            <td>Your Name:</td>
            <td>{props.appState.userName}</td>
          </tr>
          <tr>
            <td>Your Residence:</td>
            <td>{props.appState.userCity}</td>
          </tr>
          <tr>
            <td>Executor:</td>
            <td>{props.appState.execName}</td>
          </tr>
          <tr>
            <td>Alternate Executor:</td>
            <td>{props.appState.altExecName}</td>
          </tr>
          <tr>
            <td>Beneficiary 1:</td>
            <td>{props.appState.beneficiaryOneName}</td>
          </tr>
          <tr>
            <td>Beneficiary 2:</td>
            <td>{props.appState.beneficiaryTwoName}</td>
          </tr>
          <tr>
            <td>Beneficiary 3:</td>
            <td>{props.appState.beneficiaryThreeName}</td>
          </tr>
          <tr>
            <td>Contingency Plan:</td>
            <td>{props.appState.predeceasedPlans}</td>
          </tr>
          <tr>
            <td>Age Limits on Inheriting:</td>
            <td>{props.appState.predeceasedPlans}</td>
          </tr>
          <tr>
            <td>Witness 1:</td>
            <td>{props.appState.predeceasedPlans}</td>
          </tr>
          <tr>
            <td>Witness 2:</td>
            <td>{props.appState.predeceasedPlans}</td>
          </tr>
        </table>
      </header>
    </div>
  );
};

export default Answers;
