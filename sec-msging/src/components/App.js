import React from 'react'  ;
import './app.css' ;
import { useTextReducer , TEXT_CH  } from '../reducer' ;

export default function () {
   const [state , dispatch]  = useTextReducer() ;

   function generateSecretText() {
     // code
   }

   return (
    <div className='main'>
        <div className='main-box'>
            <div className={["box",'result' ,state.showResult ? 'show' : ''].join(' ')}>
                <h1>
                    result is
                </h1>
            </div>
            <div className='box'>
                <label>  write youre secret message </label>

                <div>
                    <input
                        onChange={(e) => dispatch({payload:  e.target.value , type:TEXT_CH})}
                        type='text'
                        value={state.text}
                        className='text_input'
                    />
                </div>

                <div>
                    <button
                        type='button'
                        onClick={generateSecretText}
                    >
                        Create
                    </button>
                </div>
            </div>
        </div>
    </div>)

}
