import React from 'react' ;




export default function ({title , type , year ,poster ,color }) {
   return (
       <div style={{ color :`${color}` }} >
            <h4>
                {title}
            </h4>
        <div className='details_image'
               style={{
                    backgroundImage : `url(${poster})` ,
                    backgroundSize  : 'cover' ,
                    backgroundPosition :'center',
                    height: '200px',
                    backgroundRepeat:  'no-repeat'
                 }}
             >
             </div>
             <div>
                 <span>
                     type : {type}
                 </span>
                 <span> year : {year}  </span>
             </div>
     </div>
                 )
}


