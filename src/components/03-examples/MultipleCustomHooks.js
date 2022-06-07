import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import {useCounter} from '../../hooks/useCounter';

import './customHooks.css';

export const MultipleCustomHooks = () => {

    const {counter,increment} = useCounter(1);

    const {loading,data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {author,quote} = !!data && data[0];
  return (
    <>
        <h1>BreakingBad Quotes</h1> 
        <hr/>
        {
            loading
            ?
                (
                <div className='alert alert-info text-center'>
                Loading...
                </div>
                )
            :
            (
                <div className='blockquote text-right'>
                <p className="mb-0">{quote}</p>
                <footer className='blockquote-footer mt-1'>{author}</footer>
                </div>
            )
        }
        <button
            className='btn btn-primary'
            onClick={increment}
        >
            Next Quote
        </button>
    </>
  )
}
