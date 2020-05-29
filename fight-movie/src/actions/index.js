import {
    FIRST_FETCH_DATA  ,SECOND_FETCH_DATA ,
    SELECTED_MOVIE_FIRST , SELECTED_MOVIE_SECOND ,
    FIRST_INP_CHANGED  ,SECOND_INP_CHANGED
} from '../reducer/reducer';


export function fetchSelectedMovie(name,selectedMovie) {
       return {
          type : name==='firstInp' ? SELECTED_MOVIE_FIRST:SELECTED_MOVIE_SECOND   ,
          payload : selectedMovie
       }
}


export function setData(name,data) {
   return {
          type : name  === 'firstInp' ?  FIRST_FETCH_DATA  : SECOND_FETCH_DATA ,
          data : data
   }
}
export function setDataFailed(name) {
   return {
      type : name  === 'firstInp' ?  FIRST_FETCH_DATA  : SECOND_FETCH_DATA ,
      data : [{ Title : 'NOT FOUND Any Movie !!'  }]
   }
}

export function inpChanged (name , value ) {

  return {
     type : name  === 'firstInp' ?  FIRST_INP_CHANGED  : SECOND_INP_CHANGED ,
     payload : value ,
     isTyping : true,
  }
}

