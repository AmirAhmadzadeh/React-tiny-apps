import React from 'react' ;
import { fetchSingleData } from './fetchData' ;

const autoListStyles = {
        transition:'all .2s ease-in-out'  ,
        position: 'absolute'  ,
        left: '33px' ,
        bottom: '-27rem' ,
        zIndex : '15' ,
        backgroundColor : 'rgb(120, 120, 120)',
        padding: '1rem' ,
        opacity : '1'
}

const listItemStyles = {
        fontSize : '10px'  ,
        padding:'10px' ,
        cursor:'pointer' ,
        marginBottom:'5px' ,
        listStyle : 'none',
        color: '#fff' ,
        fontWeight:'bolder' ,
        border : '1px solid #eee'
}

const hoverStyles = {
  cursor : 'pointer' ,
}

export default function ({ itemClicked ,  inp , hide , name , show }) {
  if (!inp.data) return 'Loading....' ;
  if (inp.data[0].Title === 'NOT FOUND Any Movie !!') return null ;

 async function clickHandler(record) {
       try {
           const response = await  fetchSingleData(record) ;
           console.log( name, response) ;
           itemClicked( response , name )
       }catch(error) {
       }
 }
 return (
    <>
         <ul  style={{ opacity : '0' ,   ...autoListStyles   }}>
                        { inp.data.map(record => {
                              return (<li
                                style={{ ...listItemStyles ,...hoverStyles  }}
                                onClick={() => clickHandler(record) }
                                key={record.imdbID}>  {record.Title}   </li>)
                        })}
        </ul>
     </>

  )

}

