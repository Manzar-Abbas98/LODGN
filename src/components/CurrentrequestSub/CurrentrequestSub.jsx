import React from 'react'
import style from './CurrentrequestSub.module.css'
const CurrentrequestSub = () => {
  return (
    <div className={style.container2}>

        <div className={style.box}>
            <p className={style.boxtxt}>
            RECEIVED
            </p>
        </div>
        <div className={style.box}>

        <p className={style.boxtxt}>
        NEGOTIATING
            </p>
        </div>
        <div className={style.box}>
        <p className={style.boxtxt}>
        COMPLETED
            </p>
        </div>

    </div>
  )
}

export default CurrentrequestSub