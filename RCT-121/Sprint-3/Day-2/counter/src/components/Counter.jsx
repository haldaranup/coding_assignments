import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/action';


export const Counter = () => {
    const [count, setCount] = useState()
const dispatch = useDispatch();

const handleIncrement = () => {
    dispatch(increment(1));
  };

  const handleDecrement = () => {
    dispatch(decrement(1));
  };

    return (
        <div>
            <h1>Counter {count} </h1>
            <button onClick={()=>handleIncrement()}>+</button>
            <button onClick={()=>handleDecrement()}>-</button>
        </div>
    );
};