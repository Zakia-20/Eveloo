import react from 'react'
import {BsBagCheck} from 'react-icons/bs'
import {GrCubes, GrBike} from 'react-icons/gr'
import {MdOutlineDateRange} from 'react-icons/md'

function Uses(){
    return(
    <>
        <section className="section6">
            <div className="content1">
                <div className="number">
                    <span>01</span>
                </div>

                <div className="contentTitle">
                    <h3>WHAT ARE YOU PLANNING TO USE ELECTRIC BIKE FOR?</h3>
                </div>
            </div>

            <div class="wrapper1">
            <div ><span className="iconUse"><GrBike></GrBike></span> </div>
                <div className="bg-icon1"><span className="iconUse" id="iconOrange"><BsBagCheck></BsBagCheck></span> </div>
                <div> <span className="iconUse"><MdOutlineDateRange></MdOutlineDateRange></span></div>
                <div> <span className="iconUse"><GrCubes></GrCubes></span></div>
            </div>
            <div class="wrapper1">
                <div class="one" id="gridText">
                    RECREACTION
                </div>
                <div className="bg-icon2" id="gridText2">COMMUTING</div>
                <div class="three" id="gridText">EXERCISE</div>
                <div class="four" id="gridText">EVERYTHING</div>
            </div>
           <br></br>
           <br /><br /><br />
        </section>
    </>
    )
}

export default Uses