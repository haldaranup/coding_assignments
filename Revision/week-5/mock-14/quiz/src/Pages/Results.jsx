import React from "react";
import { useSelector } from "react-redux";

const Results = () => {
  const score = useSelector((state) => state.score);
  console.log('score:', score)

  return (
    <div>
      <h5>Correct Answer : {score.rightCount}</h5>
      <h5>Wrong Answer : {score.wrongCount}</h5>
      <h5>Total Score : {(score.rightCount/(score.length))*100}%</h5>
    </div>
  );
};

export default Results;
