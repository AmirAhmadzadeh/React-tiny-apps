import React,{ useState }  from 'react' ;
import Inp from './MovieItem' ;

export default function() {
   const [value, setVal]  = useState(true) ;
   const bg = value===0  ? '#fff' :  '#181818' ;
   function onChangeToggler (e) {
        console.log(e) ;
        console.log(e.target.value)

        value === 0  ?  setVal(1)  : setVal(0) ;
   }
   return (
             <div style={{
                backgroundColor :bg ,
                height : '100%' ,
                position : 'relative'
          }}>
          <label className="switch"  style={{ position:'absolute' , bottom : '15px' , left:'15px' }}>
                     <input type="checkbox"  value={0}   onChange={(e) => onChangeToggler(e)} />
                     <span className="slider round"></span>
             </label>

             <h1  style={{  textAlign:'center' }}  className="headerBg" >
                     welcome to the app !
             </h1>
             <div style={{
                           display:'flex' ,
                           flexFlow : 'row wrap' ,
                           justifyContent:'space-evenly'

                      }}>
                      <Inp  name='firstInp' />
                      <Inp  name='secondInp'/>
              </div>
      </div>
    )
}
