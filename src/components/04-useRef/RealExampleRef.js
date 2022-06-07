import React, { useState } from 'react'
import './focus.css';
import {MultipleCustomHooks} from './../03-examples/MultipleCustomHooks';

export const RealExampleRef = () => {
    const [show, setshow] = useState(false);
  return (
   <>
    <h1>Real Example Ref</h1>
    <hr/>

    {show && <MultipleCustomHooks />}
    <br></br>
    <button
        className='btn btn-primary mt-5'
        onClick={()=>setshow(!show)}
    >
        Show/Hide
    </button>
   </> 
  )
}
