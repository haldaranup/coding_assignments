import React, { useState } from 'react'
import { store } from '../State/store'
import CounterValue from './CounterValue'

const Counter = () => {
    const {dispatch} = store;
    const [local, setLocal] = useState(0)
    store.subscribe(()=>{
        setLocal(pre => pre+1)
    })


    const handleIncrement = () =>{
        dispatch({type: "INCREMENT", payload: 1})
        console.log(store.getState())
    }
    const handleDecrement = () =>{
        dispatch({type: "DECREMENT", payload: 1})
    }
  return (
    <div>
        <CounterValue />
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
    </div>
  )
}

export default Counter