import { useReducer } from 'react' ;
import { reducer } from '../reducer/reducer' ;


const initState = {
      firstInp :  {
          value : '',
          isTyping  : false  ,
          typingTimeout : 0 ,
          data : [] ,
          selectedMovie : null
      } ,
      secondInp :  {
          value :'' ,
          isTyping : false  ,
          typingTimeout: 0 ,
          data: [] ,
          selectedMovie : null
      }  ,
}
export default function () {
   const [state , dispatch ]  = useReducer(reducer , initState) ;
   return [state , dispatch] ;
}
