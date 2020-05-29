import axios from 'axios' ;



export async function fetchData(searchTerm) {
       const response = await axios.get('http://www.omdbapi.com/' , {
         params : {
           apikey:'1045218d' ,
           s :searchTerm
         }
       });
       return response.data ;
}

export async function fetchSingleData(movie) {
       const response = await axios.get('http://www.omdbapi.com/' , {
         params : {
           apikey:'1045218d' ,
           i :movie.imdbID
         }
       });
       return response.data ;
}


