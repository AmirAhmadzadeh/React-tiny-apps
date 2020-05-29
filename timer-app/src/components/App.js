import React from 'react' ;
import './app.css';
import Timer from './Timer' ;
import { useReducer  , useEffect } from 'react' ;

const DECREASE_NUMBER =   'DECREASE_NUMBER' ;
const STOP = "STOP" ;
const START = "START" ;
const RESET = "RESET" ;
const TIMER_CHANGED= 'TIMER_CHANGED' ;


export default function() {

    const [ state , dispatch ] = useReducer( (state,action) => {
       switch(action.type) {
            case DECREASE_NUMBER :
               return {
                 ...state ,
                 number : state.number - 1
               }
            case STOP :
                return {
                    ...state ,
                    run : false
                }
            case START :
                return {
                 ...state ,
                 run : true
                }
            case RESET :
                return {
                 ...state , number : 10 , run:false
                }
            case TIMER_CHANGED :
               return {
                 ...state ,
                 number : action.value
               }
            default :
             return state ;
       }
    }
    , {
        number : 10 ,
        run : true
     } ) ;

    function start() {
        if (state.number > 0) {
            dispatch({ type : START } ) ;
        }
        else {
         reset() ;
         dispatch({type: START }) ;
        }
        return ;
    }
    function reset() {
      dispatch({ type : RESET } )
    }
    useEffect(() => {
       const interval = setInterval(tick , 1000) ;
       if ( !state.run ) clearInterval(interval ) ;
       if (state.number <= 0 ) clearInterval(interval) ;
       return () => {
            clearInterval(interval) ;
        }
    },[state.run,state.number]) ;


    function pause(){
         dispatch({
             type : STOP
         }) ;
    }
    function tick() {
      console.log('TICK' , state.number) ;
      if (state.number > 0 ) {
        dispatch({
         type : DECREASE_NUMBER
        }) ;
      }
      return ;
    }
    function onTimerChanged(val) {
     if(val < 0) return ;
     dispatch({
       type : TIMER_CHANGED ,
       value: val
       }
      )
    }

    return (
        <div className="app">
            <Timer changed={onTimerChanged}  number={state.number}/>
            <div className='btns-area'>
                <button onClick={start}> start </button>
                <button onClick={pause} > pause  </button>
                <button onClick={reset} > reset  </button>
            </div>
        </div>
    )
}
