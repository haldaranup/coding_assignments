import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Report = () => {
  const [first, setFirst] = useState(0);
  const [sec, setSec] = useState(0);
  const [third, setThird] = useState(0);

  const tesla = useSelector((state) => state.app.tesla);

  const ageNum = () => {
    tesla?.map((i) => {
      if (i.age >= 13 && i.age < 18) setFirst(first + 1);
      else if (i.age >= 18 && i.age < 25) setSec(sec + 1);
      else if (i.age >= 25) setThird(third + 1);
    });
  };
  useEffect(() => {
    ageNum();
  }, []);
  return (
    <div>
      <h4>Age(13-18): {first}</h4>
      <h4>Age(18-25): {sec}</h4>
      <h4>Age(25+): {third}</h4>
    </div>
  );
};

export default Report;
