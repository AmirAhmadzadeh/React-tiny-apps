export const FIRST_INP_CHANGED = 'FIRST_INP_CHANGED' ;
export const SECOND_INP_CHANGED = 'SECOND_INP_CHANGED' ;
export const  FIRST_FETCH_DATA =  'FIRST_FETCH_DATA' ;
export const  SECOND_FETCH_DATA = 'SECOND_FETCH_DATA' ;
export const SELECTED_MOVIE_FIRST='SELECTED_MOVIE_FIRST' ;
export const SELECTED_MOVIE_SECOND='SELECTED_MOVIE_SECOND' ;



export function reducer(state , action)  {
         switch( action.type ) {

           case FIRST_INP_CHANGED :
              return {
                 ...state ,
                 firstInp : {
                   ...state.firstInp  ,
                   value : action.payload ,
                  isTyping : action.isTyping  ,
                   typingTimeout : action.typingTimeout
                 }
              }
           case SECOND_INP_CHANGED :
             return {
                 ...state ,
                secondInp: {
                   ...state.secondInp  ,
                   value :  action.payload ,
                   isTyping : action.isTyping  ,
                   typingTimeout : action.typingTimeout
                  }
            }

          case FIRST_FETCH_DATA :
              return {
                  ...state ,
                  firstInp : {
                    ...state.firstInp ,
                    data : action.data ,
                    isTyping : false
                  } }
         case SECOND_FETCH_DATA :
              return {
                  ...state ,
                  secondInp : {
                    ...state.secondInp ,
                    data : action.data ,
                    isTyping:false
                  }
            }
        case SELECTED_MOVIE_FIRST  :
                 return {
                    ...state ,
                    firstInp : {
                        ...state.firstInp ,
                        value : action.payload.Title ,
                        isTyping :false   ,
                                selectedMovie  : {
                                ...action.payload
                           }
                    }

                 }
         case SELECTED_MOVIE_SECOND  :
                 return {
                    ...state ,
                    secondInp : {
                        ...state.secondInp ,
                        value : action.payload.Title ,
                        isTyping :false   ,
                                selectedMovie  : {
                                ...action.payload
                                }
                    }

                 }
          default :
             return state  ;
         }
}

