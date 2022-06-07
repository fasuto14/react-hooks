import React,{useMemo, useState} from 'react'
import { useCounter } from '../../hooks/useCounter';
import {procesosPesado} from '../../../src/components/helpers/procesosPesados';
import './memo.css';

export const MemoHook = () => {
    const {counter,increment} = useCounter(1000);
    const [show, setShow] = useState(true)
    const memoProcesoPesado = useMemo(() => procesosPesado(counter), [counter])

  return (
    <>
        <h1>MemoHook</h1>
        <hr/>
        <h3>Counter:{counter}</h3>
        <h4>{memoProcesoPesado}</h4>
        <button
            className='btn btn-primary'
            onClick={increment}
        >
            +
        </button>
        <button
            className='btn btn-outline-primary m-3'
            onClick={()=>{setShow(!show)}}    
        >
            Show/Hide {JSON.stringify(show)}
        </button>
    </>
  )
}
