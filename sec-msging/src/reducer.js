import { useReducer  } from 'react' ;
export const TEXT_CH = 'TEXT_CH' ;


function reducer (state , action)  {
       switch(action.type) {
         case TEXT_CH :
           return {
              ...state ,
              text : action.payload
           }
         default :
            return state ;
       }
}

const initState = {
     text : '' ,
     result :'' ,
     showResult : false
}


export  function useTextReducer () {
  const [state , dispatch ] = useReducer(reducer) ;
   return [state , dispatch] ;
}
