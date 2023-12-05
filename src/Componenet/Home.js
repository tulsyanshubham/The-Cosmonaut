import React from 'react'
import instagram from '../Image/instagram.png'
import x from '../Image/x.png'
import youtube from '../Image/youtube.png'
import facebook from '../Image/facebook.png'
import linkedin from '../Image/linkedin.png'
import ContactUs from "./ContactUs"

export default function Home() {
    return (
        <div>
            <div className="box1" id='uparrowLink'>
                <div className="home-box">
                    <div className="home-content">
                        <div className="heading">EXPLORE THE DEPT OF SPACE</div>
                        <div className="content">Embark on a cosmic journey with us as we delve into the wonders of space exploration, unlocking the mysteries of the universe.</div>
                    </div>
                    <div className="btn-box">
                        <button className="home-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">CONTACT US</button>
                    </div>
                </div>
                <div className="home-grand"><span>THE COSMOS</span></div>
            </div>
            <div className="box2">
                <div className="box2box">
                    <div className="heading">Track satellites and ISS in Realtime</div>
                    <div className="content">Experience live satellite tracking on our space exploration website for real-time updates on celestial journeys. We use N2YO’S database for latest information.</div>
                </div>
            </div>
            <div className="box3">
                <div className="box3img"></div>
                <div className="box3box">
                    <div className="heading">Be Informed about latest missions and discoveries</div>
                    <div className="content">Discover a wealth of information about the latest space missions and groundbreaking discoveries by exploring our space exploration website. From cutting-edge research to exciting exploration updates, dive into the fascinating world of outer space exploration with us.</div>
                </div>
            </div>
            <div className="box4">
                <div className="box4box ml">
                    <div className="box4title">CONTACTS</div>
                    <div className="content">PHONE: &#160; <a href='tel:+915478256938'><i className="fa-solid fa-phone" style={{ color: "#ffffff" }}></i> +91 5478256938</a></div>
                    <div className="content">E-MAIL: &#160; <a href='mailto:abcdefgh@gmail.com'><i className="fa-solid fa-envelope" style={{ color: "#ffffff" }}></i> abcdefgh@gmail.com</a></div>
                </div>
                <div className="verline"></div>
                <div className="box4box mr">
                    <div className="box4title">FOLLOW US</div>
                    <div>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img src={instagram} alt="instagram" className="logoimage" /></a>
                        <a href="https://twitter.com/?lang=en" target="_blank" rel="noreferrer"><img src={x} alt="x" className="logoimage" /></a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><img src={youtube} alt="youtube" className="logoimage" /></a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><img src={facebook} alt="facebook" className="logoimage" /></a>
                        <a href="https://in.linkedin.com/" target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin" className="logoimage" /></a>
                    </div>
                </div>
            </div>
            <div className="linebox"><div className="horiline"></div></div>
            <div className="box5 content"><span style={{fontSize: "1vw"}}>
                Copyright &copy; [2024] [THE CAOSMONAUT]. All rights reserved. The content, design, graphics, and other materials on this website are protected by copyright law and may not be reproduced, distributed, modified, or used without the express written consent of the copyright owner. Unauthorized use of the materials on this website may violate copyright, trademark, and other laws.
            </span></div>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content" style={{backgroundColor: "rgba(0, 0, 0, 0.8)", border:"1px solid white", borderRadius: "15px",marginTop: "3vw"}}>
                        <div className="modal-header">
                            <h1 className="modal-title h1 ms-3" id="exampleModalLabel">CONTACT US</h1>
                            <i className="fa-solid fa-xmark fa-2xl me-2" data-bs-dismiss="modal" aria-label="Close" style={{color: "#ffffffy",marginLeft:"1vw",cursor: "pointer"}}></i>
                        </div>
                        <div className="modal-body">
                            <ContactUs />
                        </div>
                    </div>
                </div>
            </div>

            <a href='#uparrowLink'><i className="fa-solid fa-circle-up" style={{color: "#ffffff",position:"fixed",bottom:"2.5vw",right:"2.5vw",fontSize:"3vw",borderRadius:"50%"}}></i></a>
        </div>
    )
}
