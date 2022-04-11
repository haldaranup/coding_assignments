import React, { useState } from "react";



function App() {
  let [score, setScore] = useState(0)
  let [wicket, setWicket] = useState(0)
  let [over, setOver] = useState(0)

  function add1(){
    setScore(score+1)
  }
  function add4(){
    setScore(score+4)
  }
  function add6(){
    setScore(score+6)
  }
  function wick(){
    setWicket(wicket+1)
  }
  function overs(){
    
    setOver(over + 0.1)
  }
  function won(){
    return <h1 className= "status">India Won</h1>
  }



  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {score
              // show "score" here

            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            { wicket
              // show wicket here
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {over
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick = {add1}>Add 1</button>
        <button className="addScore4" onClick = {add4}>Add 4</button>
        <button className="addScore6" onClick = {add6}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={wick}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick= {overs}>Add 1</button>
      </div>

      {score>100 && won()/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
    </div>
  );
}

export default App;
