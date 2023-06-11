import React from 'react'
import style from './Booknow.module.css'
const Booknow = ({tag}) => {
  console.log(tag)
  return (
    <>
    <div className={style.container}>
      {tag && <div className={style.tag}>Rare Find</div>}
      
        <div className={style.upperbox}>
        <svg width="54" height="59" viewBox="0 0 54 59" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.0189 6.56303C19.7547 9.38375 14.5925 21.9731 12.0566 49.7647M38.3208 3C34.5472 8.04762 26.7283 25.7143 25.6415 56M3 36.8487C8.13208 30.3165 24.917 17.6084 51 19.0336" stroke="#85C371" stroke-width="5" stroke-linecap="round"/>
</svg>
<p className={style.holi}>Holiday Inn</p>

        </div>
<div className={style.bottombox}>
        <div className={style.para}>
        <p className={style.color}>1.5 miles away from joblocation.</p>
        </div>

        <div className={style.btninfo}>
          <p className={style.color}>Singles: $120 <br/>Doubles: $145</p>
          <button className={style.btn}>Book now</button>
        </div>

</div>
       

       

    </div>
    
    </>
  )
}

export default Booknow