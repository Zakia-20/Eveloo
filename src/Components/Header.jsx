import react from "react"
import evelo from "../assets/evelo.mp4"
import logo from "../assets/logo.png"
import {FiPlay} from 'react-icons/fi'
import {BsArrowRightShort, BsTruck} from 'react-icons/bs'
import {BiShoppingBag} from 'react-icons/bi'
import {CiCalendarDate} from 'react-icons/ci'
import {AiOutlineSafety} from 'react-icons/ai'
import bike1 from "../assets/bike1.png"

function Header(){
    
    return(
        <>
         <div className="bg">

                <div className="bg1">
                    <video src={evelo} autoPlay loop muted className="myvideo" ></video>
                </div>
                    <div className="navbar" >
                    
                        <div className="logo">
                          <li><img src={logo} alt="" /></li> 
                        </div>
                        <div className="menu">
                            <li><a> BIKES </a></li>
                            <li><a> ACCESSOTIES  </a></li>
                            <li><a> REVIEW </a></li>
                            <li><a> SERVICE </a></li>
                            <li><a> CONTACT </a></li>
                            
                        </div>

                        <li  className="logoShop"><BiShoppingBag></BiShoppingBag></li> 
                        <div className="square"></div>
                        
                    </div>

                    <div className="content" >
                        
                           <div className="playicon" >
                                <span><FiPlay></FiPlay></span>
                            </div>
                            <div className="cercle"></div>
                           <div className="title">
                              <h1>live life to the fullest !</h1>
                              <h3>Our electric bikes are specifically designed for give you
                                  the freedom to enjoy a more active and healthier lifestyle.
                             </h3>
                            </div>
                    </div>

                    <div className="shopCard">
                         <button> Shop Bikes <span><BsArrowRightShort></BsArrowRightShort></span></button>
                    </div>

                    <div className="heroStart"></div>
   
         </div>

         <div className="hero">
             <h1>Bike Feature</h1>
             
             <div className="items">
             <div className="number">
                 <span>01</span>
             </div>
             <div className="bike1">
                 <img src={bike1}></img>
             </div>

             <div className="card">
                  
                         
                <div className="content">
                    <div className="textContent">
                        <h4>
                            MotionDriveᵗᵐ System
                        </h4>
                        <p>
                        EVELO MotionDriveᵗᵐ is an exlusive electric bike drivetrain technology bringing together the efficiency of a mid-drive motor with the convenience of an internal hub transmission.
                        </p>
                        <div className="nextBtn">
                        <div className="num">
                             <span>1</span> &nbsp; &nbsp; / &nbsp; &nbsp; 4
                        </div>
                        
                            <button> Next</button>

                      </div>
                    </div>

                   
                </div>
               
                
             </div>
                 <div className="plus">
                     <span>+</span>
                 </div>

             </div>
                  
                
             <div className="icons">
                <span className="icon"><BsTruck></BsTruck> </span>
                <span className="icon"><CiCalendarDate></CiCalendarDate> </span>
                <span className="icon"><AiOutlineSafety></AiOutlineSafety> </span>
                  
             </div>


             <div className="items2">
                 <div className="item">
                    <h3 className="title1">free shipping</h3>
                    <p className="description">
                        Free FedEx shipping anywhere in the continental U.S.Most in-stock orders arrive in 10 business days or less.
                    </p>
                 </div>

                 <div className="item">
                    <h3 className="title1">10 day at-Home trial</h3>
                    <p className="description">
                        Free FedEx shipping anywhere in the continental U.S.Most in-stock orders arrive in 10 business days or less.
                    </p>
                 </div>

                 <div className="item">
                    <h3 className="title1">4-Year/20K-Mile Warranty</h3>
                    <p className="description">
                        Free FedEx shipping anywhere in the continental U.S.Most in-stock orders arrive in 10 business days or less.
                    </p>
                 </div>

                 
             </div>
             
         </div>

        
        </>
    )

}

export default Header;