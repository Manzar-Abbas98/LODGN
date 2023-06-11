import React from 'react'
import style from './Currentrequest.module.css'
import CurrentrequestSub from '../CurrentrequestSub/CurrentrequestSub'
const Currentrequest = () => {
  return (
    <>
 
<div  className={style.display}>


         <div>
            <h2 className={style.heading}>St Judes Hospital   </h2>
            <p className={style.subtext}>Sarasota,FL. 33178</p>
          </div>
          <div className={style.date}>
            <div>
              <p className={style.heading}>10</p>
              <p className={style.subtext}>October</p>

            </div>
            <div>
              -
            </div>
            <div>
              <p className={style.heading}>17</p>
              <p className={style.subtext}>December</p>

            </div>
          </div>
          <div>
         
            <h2 className={style.heading}> 20 Rooms</h2>
              <p className={style.subtext}>10 Singles, 10 doubles</p>
          </div>

</div>

     
    </>
  )
}

export default Currentrequest