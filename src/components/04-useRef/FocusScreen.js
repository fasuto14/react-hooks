import React,{useRef} from 'react'
import './focus.css';

export const FocusScreen = () => {

  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
    console.log(inputRef)
  }
  return (
    <>
        <h1>Focus Screen</h1>
        <hr/>
        <input 
          ref={inputRef}
          className='form-control'
          placeholder='Your name'
        />
        <button
          className='btn btn-outline-primary mt-3'
          onClick={handleClick}
        >
          Focus
        </button>
    </>
  )
}
