import React from 'react'
import { store } from '../State/store';

const CounterValue = () => {

    const {counter} = store.getState()
    
  return (
    <div>
        <h1>{counter}</h1>
    </div>
  )
}

export default CounterValue