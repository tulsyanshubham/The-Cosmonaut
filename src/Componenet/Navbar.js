import React, { useEffect } from "react";
import {Link} from "react-router-dom";
import icon from '../Image/icon.png'

export default function Navbar() {
  
  useEffect(() => {
    let navpoint = document.querySelectorAll(".navpoint");
    let line = document.querySelectorAll(".line");
    for (let i = 0; i < 4; i++) {
      navpoint[i].addEventListener("mouseout", () => {
        line[i].style.width = 0;
      });
    }
    navpoint[0].addEventListener("mouseover", () => {
      line[0].style.width = "3.75vw";
    });
    navpoint[1].addEventListener("mouseover", () => {
      line[1].style.width = "7.68vw";
    });
    navpoint[2].addEventListener("mouseover", () => {
      line[2].style.width = "6.65vw";
    });
    navpoint[3].addEventListener("mouseover", () => {
      line[3].style.width = "5.83vw";
    });
  });

  return (
    <div>
      <nav className="navigatation">
        <div className="title">
            <div><a href="/"><img src={icon} alt="Icon Not Loaded" className="h1 my-3"style={{width:"12vw"}}/></a></div>
        </div>
        <div className="navbutton">
            <div className="but">
                <div><span className="navpoint"><Link to="/The-Cosmonaut">HOME</Link></span></div>
                <div className="line"></div>
            </div>
            <div className="but">
                <div><span className="navpoint"><a href="/The-Cosmonaut/astronomy">ASTRONOMY</a></span></div>
                <div className="line"></div>
            </div>
            <div className="but">
                <div><span className="navpoint"><Link to="/The-Cosmonaut/satellites">SATELLITES</Link></span></div>
                <div className="line"></div>
            </div>
            <div className="but">
                <div><span className="navpoint"><Link to="/The-Cosmonaut/missons">MISSIONS</Link></span></div>
                <div className="line"></div>
            </div>
        </div>
    </nav>
    </div>
  )
}
