import React from 'react'
import style from './Complete.module.css'
import Currentrequest from '../Currentrequest/Currentrequest'
import Booknow from '../booknow/Booknow'
const Complete = () => {
  return (
    <div className={style.container}>

<div className={style.boxsetting}>
        <Currentrequest/>

</div>
<div className={style.complete}>

COMPLETED
</div>
<div className={style.booknowadjust}>
    <Booknow  tag={true}/>
    <Booknow tag={false}/>
    <Booknow tag={false}/>
</div>


    </div>
  )
}

export default Complete