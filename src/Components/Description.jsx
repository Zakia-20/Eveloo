import react from 'react'
import bike3 from '../assets/bike3.jpg'
import bike4 from '../assets/bike4.jpg'
import user2 from '../assets/user2.png'
import eveloM from '../assets/eveloM.png'
function Description(){
    return (
        <>

           <section className="section5">
             <div className="bloc1">
             <div className="description1">
                        <h1>
                            WHY EVELO?
                        </h1>
                        
                        <h3>NO-RISK DECISION</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                       </p>
              </div>

              <div className="pics">
                <img id="mainPic" src={bike3} alt="" />
              </div>

              <img id="secondPic" src={eveloM} alt="" />

              <div className="numbers2">
                 <ul>
                    <li>01</li>
                    <li id="two2">02</li>
                    <li>03</li>
                    <li>04</li>
                 </ul>
              </div>
             </div>
              
              <div className="two">
                 <span>02</span>
              </div>
             
            <div className="line"></div>

            <div className="bloc2">
                <img src={bike3} id="pic3" />
                <div className="description2">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className="seeMore2">
                        <h3><a href="">View more reviews</a></h3>
                    </div>
                </div>
            </div>

            <div className="bloc3">
             <div className="description3">
                        <h1>
                            TRY EVELO AT HOME
                        </h1>
            
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                       </p>

                       <div className="seeMore2">
                        <h3><a href="">SHOP NOW</a></h3>
                    </div>
              </div>

              <div className="pics2">
                <img id="mainPic2" src={bike4} alt="" />
              </div>

             
             </div>

             <div className="bloc4">
                           <div className="pics3">
                                <img id="mainPic3" src={user2} alt="" />
                            </div>
                    <div className="description4">
                                <h1>
                                    WHAT HAPPENS IF I NEED HELP?
                                </h1>
                                
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua. Ut enim ad minim veniam, 
                                    quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat.
                            </p>

                            <div className="seeMore2">
                                <h3><a href="">CONATCT US</a></h3>
                            </div>
                    </div>
             
             </div>

             {/* plus */}
             <div className="plusPart1"></div>
              <div className="plusPart2"></div>
              <div className="plusPart3"></div>
              <div className="plusPart4"></div>
              
           </section>
            
        </>
    )
    
}

export default Description;