import React, { useState } from 'react'
import './counter.css';
import {useCounter} from '../../hooks/useCounter';

export const CounterWithCustomHook = () => {

    const {state,increment,decrement,reset} = useCounter(100);

  return (
    <>
        <h1>Counter With Custom Hook: {state}</h1>
        <hr/>
        <button 
            className='btn btn-success'
            onClick={()=>increment(2)}      
        >+1
        </button>
        <button 
            className='btn btn-warning'
            onClick={()=>decrement(3)}      
        >-1
        </button>
        <button 
            className='btn btn-info'
            onClick={reset}      
        >Reset
        </button>
    </>
  )
}
