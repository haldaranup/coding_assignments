import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Navbar from "../Components/Navbar";

ChartJS.register(ArcElement, Tooltip, Legend);




const Report = () => {
  const [first, setFirst] = useState(0);
  const [sec, setSec] = useState(0);
  const [third, setThird] = useState(0);



  const data = {
    labels: ['13-18', '18-25', '25',],
    datasets: [
      {
        label: 'Age',
        data: [first, sec, third],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const tesla = useSelector((state) => state.app.tesla);

  const ageNum = () => {
    tesla?.map((i) => {
      if (i.age >= 13 && i.age < 18) setFirst(prev => prev+1);
      else if (i.age >= 18 && i.age < 25) setSec(prev => prev+1);
      else if (i.age >= 25) setThird(prev => prev+1);
    });
  };
  useEffect(() => {
    ageNum();
  }, []);
  return (
    <div>
      <Navbar />
      <h4>Age(13-18): {first}</h4>
      <h4>Age(18-25): {sec}</h4>
      <h4>Age(25+): {third}</h4>
    <div className="chart">
      <Doughnut data={data} />
      </div>
    </div>
  );
};

export default Report;
