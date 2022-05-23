import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import CandidateCard from "./components/CandidateCard";
import "./styles.css";
import axios from "axios";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1)
  
  useEffect(() => {
    fetchData(page)
  },[page]);

  const fetchData = async (page)=>{
    setLoading(true)
    axios({ method: "get", url: "https://json-server-mocker-masai.herokuapp.com/candidates", params :{
      _page: page,
      _limit:20

    } })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <div className="App">
      <div>
        <div id="loading-container">{loading && "...Loading"}</div>
        <Button id="SORT_BUTTON" title={`Sort by Ascending Salary`} />
        <Button disabled={page===1} onClick={()=> setPage(page-1)} title="PREV" id="PREV" />
        <Button onClick={()=> setPage(page+1)} id="NEXT" title="NEXT" />
      </div>
      {data.map((item) => {
        return (
          <CandidateCard
            key={item.id}
            img={item.avatar}
            name={item.name}
            title={item.title}
            salary={item.salary}
            company={item.company_name}
          />
        );
      })}
    </div>
  );
}
