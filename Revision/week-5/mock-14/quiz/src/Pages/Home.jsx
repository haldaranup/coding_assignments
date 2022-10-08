
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getData, userName } from "../Redux/action";


const Home = () => {
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [number, setNumber] = useState(10);

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleLevel = (e) => {
    setLevel(e.target.value);
  };
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  const handleType = (e) => {
    setType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getData({number, category, level, type}));
    dispatch(userName(name))
    navigate("/quiz");
  };

  return (
    <div className="homeContainer">
      
      <form onSubmit={handleSubmit}>
      <h2>Set up your quiz</h2>
      <input type="text" placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)} />
        <select onChange={handleCategory}>
          <option value="">Category</option>
          <option value="21">Sports</option>
          <option value="9">General Knowledge</option>
          <option value="22">Geography</option>
        </select>
        <select onChange={handleLevel}>
          <option value="">Level</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <select onChange={handleType}>
          <option value="">Type</option>
          <option value="boolean">True/False</option>
          <option value="multiple">Multiple</option>
        </select>
        <input type="number" onChange={(e) => setNumber(e.target.value)} />
        <input type="submit" value="Start Quiz" className="btn green" />
      </form>
    </div>
  );
};

export default Home;
