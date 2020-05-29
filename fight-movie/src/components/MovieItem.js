import React,{ useState ,  lazy , Suspense} from 'react' ;
import useMoviesFinder from './../hooks/useMoviesFinder' ;
import SelectedMovieDetails from './SelectedMovieDetails' ;
import { fetchSelectedMovie,setData ,setDataFailed,inpChanged } from '../actions/index' ;
import { fetchData }  from './fetchData'  ;
import './spinner.css' ;

const ResultList = lazy(() => import('./Result') ) ;



const rootStyles = {
   position : 'relative'  ,
   display : 'flex' ,
   flexFlow:'column wrap' ,
   alignItemx : 'stretch'
}

const headerStyles = (interactieColor) => ({
  textAlign:'center' ,
  color:interactieColor ,

})

const inpWrapper = {
  display: 'flex' ,
  flexFlow: 'column wrap',
  alignItems: 'center'
}
const inpStyles = (interactieColor) => ( {
 boxShadow: `0 4px 6px ${interactieColor}`
})

function debounce (fn , timeoutId) {
        if (timeoutId) {
               clearTimeout(timeoutId)  ;
        }
        return  (...args) => {
           fn(args)
        };
}


export default function({name}){
   const [state , dispatch] = useMoviesFinder() ;
   const [show ,setShow ]  = useState(false) ;
   React.useEffect(() => {
   }) ;

   function onInpChange(value,name) {
      debounce(dispatch({
             ...inpChanged(name , value )  ,
             typingTimeout : setTimeout(async () => {
             const result =  await  fetchData(value);
                 result.Response === 'True' ? dispatch(setData(name , result.Search)) : dispatch(setDataFailed(name));
                 setShow(true)
             },1000)
        }) , state[name].typingTimeout) ;
  }

  function itemClicked(selectedMovie , name) {
       dispatch(fetchSelectedMovie(name, selectedMovie)) ;
       setShow(false) ;
  }

  let interactieColor = state[name].isTyping ? 'rgba(218, 2, 218, 0.67)' : '#caca'

  if ( state[name].selectedMovie &&  state[name].selectedMovie.Title === 'NOT FOUND Any Movie !!') {
    interactieColor = '#ccc';
  }

  else if(!state[name.isTyping] && state[name].data.length > 1){
    interactieColor = 'lightgreen'
  }
  const renderResultList = () =>  (show && !state[name].isTyping ? (
         <Suspense fallback={<div className='loader'></div>}>
                 <ResultList
                         inp={state[name]}
                         itemClicked={itemClicked}
                         hide={() => setShow(false)}
                         name={name}
                         show={show}
                 />
         </Suspense>) : null

  ) ;
  const renderSpinner =  () =>  (
         state[name].isTyping ? ( <div className='loader' style={{position:'absolute' , bottom:'-32px'  , margin : '0 auto' , background: 'transparent'}}>
                 Loading...
          </div>) : null
  )
 const renderSelectedResult = ()  => (  state[name].selectedMovie && !state[name].isTyping && !show ? (
                     <SelectedMovieDetails
                             title={state[name].selectedMovie.Title}
                             poster={state[name].selectedMovie.Poster}
                             type={state[name].selectedMovie.Type}
                             year={state[name].selectedMovie.Year}
                             color={interactieColor}
                     />)   : null )


  function focusHandler() {
    console.log('amir is here!!!') ;
    if (state[name].data.length > 0)  {
         setShow(true)  ;
     }
  }

  const  renderInput = () =>  (
            <div style={inpWrapper} >
                    <input
                            style={inpStyles(interactieColor)}
                            name={name}
                            value={state[name].value}
                            onChange={(event) => onInpChange(event.target.value , event.target.name)}
                            onFocus={ focusHandler }
                    />
            </div>
           )
  return (
       <div style={rootStyles} >
               <h1  style={headerStyles(interactieColor)}>
                       Search Movie
               </h1>
               { renderInput() }
               { renderResultList() }
               { renderSpinner() }
               { renderSelectedResult() }
       </div>
   )
}
