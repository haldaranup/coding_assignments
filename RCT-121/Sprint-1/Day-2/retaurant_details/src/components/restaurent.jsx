import { useState } from "react";
import data from "../data.json";

import "./component.css";

export const Restaurent = () => {
  const arr = data.restaurents;

  const [array, setArray] = useState(arr);


  function payment1(x) {
    if (x.cash == true) {
      return "_Cash,";
    }
  }
  function payment2(x) {
    if (x.card == true) {
      return "_Card,";
    }
  }
  function payment3(x) {
    if (x.upi == true) {
      return "_upi ";
    }
  }

  function filter4() {
    var arr2 = arr.filter((e, i) => {
      return e.rating > 4;
    });
    setArray(arr2);
  }

  function filter3() {
    var arr3 = arr.filter((e, i) => {
      return e.rating > 3;
    });
    setArray(arr3);
  }

  function filter2() {
    var arr4 = arr.filter((e, i) => {
      return e.rating > 2;
    });

    setArray(arr4);
  }

  function filter1() {
    var arr5 = arr.filter((e, i) => {
      return e.rating > 1;
    });
    setArray(arr5);
  }

  function cash() {
    var arr2 = arr.filter((e, i) => {
      return (
        e.method.cash == true && e.method.card == false && e.method.upi == false
      );
    });
    console.log(arr2);
    setArray(arr2);
  }

  function card() {
    var arr2 = arr.filter((e, i) => {
      return (
        e.method.cash == false && e.method.card == true && e.method.upi == false
      );
    });
    console.log(arr2);
    setArray(arr2);
  }

  function all() {
    setArray(arr);
  }

  function high() {
    var arr2 = arr.sort(function (a, b) {
      return b.cost - a.cost;
    });
    setArray(arr2);
  }

  function low() {
    var arr2 = arr.sort(function (a, b) {
      return a.cost - b.cost;
    });
    setArray(arr2);
  }

  return (
    <div className="container">
      <div>
        <button onClick={() => filter4()}>4*</button>
        <button onClick={() => filter3()}>3*</button>
        <button onClick={() => filter2()}>2*</button>
        <button onClick={() => filter1()}>1*</button>
      </div>
      <div className="buttons">
        <button onClick={() => cash()}>Cash only</button>
        <button onClick={() => card()}>Card only</button>
        <button onClick={() => all()}>All</button>
      </div>
      <div className="sorting">
        <button onClick={() => high()}>High to Low</button>
        <button onClick={() => low()}>Low to High</button>
      </div>

      {array.map((e, i) => (
        <div key={i} className="boxes">
          <img src={e.url} className="image"></img>
          <div className="content">
            <div className="name">{e.name}</div>
            <div className="category">{e.category}</div>
            <div className="cost">Cost {e.cost} for one</div>
            <div className="payment">
              This Rerstaurent accepts__
              <p>{payment1(e.method)}</p>
              <p>{payment2(e.method)}</p>
              <p>{payment3(e.method)}</p>
            </div>
          </div>
          <div className="lastbox">
            <div className="rating">{e.rating}</div>
            <div className="votes">{e.votes} votes</div>
            <div className="votes">{e.review} reviews</div>
          </div>
        </div>
      ))}
    </div>
  );
};
