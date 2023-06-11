import React from 'react'
import style from './Navleft.module.css'
import Currentrequest from '../Currentrequest/Currentrequest'
import Maincurrent from '../maincurrent/Maincurrent'
const Navleft = () => {
    return (
        <div className={style.maincontainer}>

            <div className={style.container}>

                <div >
                    <div>
                        <h1 className={style.heading}>LODGN</h1>

                    </div>
                    <ul className={style.requestlist} >

                        <li className={style.ulist}><a href="">current requests</a></li>
                        <li><a href="">ongoing stays</a></li>
                        <li><a href="">Previous stays</a></li>
                        <li><a href="">Reports</a></li>

                    </ul>

                </div>
                <div>
                    <button className={style.btn}>Log-Out</button>
                   
                   <div >
                   <p className={style.helpline}>Help-desk:</p>
                    <p className={style.num}>786-874 9988</p>

                    </div>
                    
                </div>



            </div>
<Maincurrent/>

        </div>
    )
}

export default Navleft