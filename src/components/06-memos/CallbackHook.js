import React,{useCallback, useState} from 'react'
import './memo.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setcounter] = useState(14);

    // const increment = () => {
    //     setcounter(counter + 1)
    // }

    const increment = useCallback((num)=>{
        setcounter(c=> c + num)
    },[setcounter])

  return (
    <>
        <h1>useCallback Hook</h1>
        <hr/>

        <h3>Counter:{counter}</h3>
        <ShowIncrement increment={increment}/>
    </>
  )
}
