
export  function debounce (fn ,delay = 1000 ) {

    console.log('In debounce Fucntion helper ' ) ;
    let timeoutId  ;
    return function(...args)  {
       if (timeoutId)  {
        clearTimeout(timeoutId) ;
       }

      timeoutId =  setTimeout(() => {
         fn.apply(null , args )  ;
       },delay)
    }
}
