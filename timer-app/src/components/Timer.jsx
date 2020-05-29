import React from 'react'  ;
import './timer.css'  ;



export default function({number , changed}) {
    return (
       <div className="timer">
           timer Number : <input value={number} onChange={(evt) => changed(evt.target.value)} />
           </div>
     )
}
