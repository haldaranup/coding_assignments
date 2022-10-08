import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { correctAns } from "../Redux/action";

const Quiz = () => {
  const [page, setPage] = useState(0);
  const [rightCount, setRightCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const quiz = useSelector((state) => state.quiz);
  console.log("quiz:", quiz);
  const user = useSelector((state) => state.user);
  const info = useSelector((state) => state.info);
  let length = quiz.length;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleResult = () => {
    dispatch(correctAns({ rightCount, wrongCount, length }));
    navigate("/results");
  };

  return (
    <div className="quizContainer">
      <h2>Welcome, {user}</h2>
      <div className="info">
        <p>Number of questions : {info.number}</p>
        <p>Category : {info.category}</p>
        <p>Level : {info.level}</p>
        <p>Type : {info.type}</p>
      </div>

      {quiz.map((i, index) => {
        if (index == page) {
          return (
            <div className="quiz">
              <h5>Question: {page + 1}</h5>
              <p>{i.question}</p>
              <div
                onClick={() => {
                  setRightCount(rightCount + 1);
                  alert("Right Answer, Go to next question");
                  setPage(page + 1);
                }}
              >
                {i.correct_answer}
              </div>
              {i.incorrect_answers.map((i) => {
                return (
                  <div
                    onClick={() => {
                      setWrongCount(wrongCount + 1);
                      alert("Wrong Answer, Go to next question");
                      setPage(page + 1);
                    }}
                  >
                    {i}
                  </div>
                );
              })}
            </div>
          );
        }
      })}
      {page > 0 ? (
        <button className="btn yellow" onClick={() => setPage(page - 1)}>
          Prev
        </button>
      ) : (
        <button className="btn disabled">No previous</button>
      )}

      {page + 1 < length ? (
        <button className="btn orange" onClick={() => setPage(page + 1)}>
          Next
        </button>
      ) : (
        <button className="btn green" onClick={handleResult}>
          Result
        </button>
      )}
    </div>
  );
};

export default Quiz;
