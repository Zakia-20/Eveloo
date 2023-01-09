import react from 'react'
import {AiOutlineTwitter,AiFillFacebook,AiOutlineInstagram} from 'react-icons/ai'
import {BsYoutube} from 'react-icons/bs'
import logo from '../assets/logo.png'

function Footer(){
    return(
        <>
        <section className="section7">
            <div className="left-side">
            <div className="left-side1">
                <div className="part1">
                    <li><span className="label">
                        Phone
                    </span></li>
                    <li><span className="info">
                        +1877.989.7272
                    </span></li>
                </div>

                <div className="part2">
                    <li><span className="label">
                            Email
                    </span></li>
                    <li><span className="info">
                            Info@elevo
                    </span></li>
                </div>

                <div className="part3">
                    <li> <span className="label">
                            Follow us
                    </span></li>

                    <div className="join-us">
                        <span className="icon-S"><AiOutlineTwitter></AiOutlineTwitter></span>
                        <span className="icon-S"><BsYoutube></BsYoutube></span>
                        <span className="icon-S"><AiFillFacebook></AiFillFacebook></span>
                        <span className="icon-S"><AiOutlineInstagram></AiOutlineInstagram></span>
                    </div>
                </div>
            </div>
            <div className="left-side2">

                <img src={logo} alt="" />
                <span>© Copiright 2019 Evelo. <br></br>
                  All Rights Reserved
                </span>
            </div>
            </div>

            <div className="right-side">
                <div className="news">
                    <span>JOIN OUR NEWSLETTER</span>
                    <input type="text" size="35" id="name" name="email" placeholder="Your email adress"></input>
                </div>

                <div className="pages">
                    <div className="line1">
                        <div className="grid1">
                            <li id="title-F">About</li>
                            <li><a href="">Our Story</a> </li>
                            <li><a href="">Blog</a> </li>
                            <li><a href=""> Contact us</a></li>
                            <li><a href="">Privacy policy</a> </li>
                        </div>

                        <div className="grid1">
                            <li id="title-F">Community</li>
                            <li><a href="">Our Story</a> </li>
                            <li><a href="">Blog</a> </li>
                            <li><a href="">Contact us</a> </li>
                            <li><a href="">Privacy policy</a> </li>
                        </div>
                    </div>

                    <div className="line2">
                        <div className="grid1">
                            <li id="title-F">Shop </li>
                            <li><a href="">Order an EVELO</a> </li>
                            <li><a href=""> Accesories</a></li>
                            <li><a href="">Special Offers</a> </li>
                            <li><a href="">Free fit consultation</a> </li>
                            <li><a href="">Special Offers</a> </li>
                            <li><a href="">Accesories</a> </li>
                        </div>

                        <div className="grid1">
                            <li id="title-F"> Support</li>
                            <li><a href=""> How Service Works</a> </li>
                            <li><a href=""> Frequently Asked Questions</a></li>
                            <li><a href=""> Shipping</a></li>
                            <li><a href="">Easy Assembly</a> </li>
                            <li><a href="">Shipping</a> </li>
                        </div>
                    </div>
                   
                </div>
            </div>

            
            
        </section>
        </>
    )
}

export default Footer;