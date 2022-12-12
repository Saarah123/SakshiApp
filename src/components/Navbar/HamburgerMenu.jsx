import React from "react";
import { useState } from "react";
import "./HamburgerMenu.css";
import hamburgerIcon from "./hamburgerIcon.svg"

const HamburgerMenu = () => {

    const [showMenu,setShowMenu] = useState(true)

    function toggleMenu() {
        setShowMenu(!showMenu)
    }

    const MenuList = [
        { "title": "Narendra Modi", "link": "https://www.mamp.info/namo/en/" },
        { "title": "Malayalam", "link": "https://malayalam.indiatoday.in/" },
        { "title": "Business Today", "link": "https://www.businesstoday.in/" },
        { "title": "Dailayo", "link": "https://www.dailyo.in/" },
        { "title": "Aaj Tak", "link": "https://malayalam.indiatoday.in/" },
        { "title": "Lallan Top", "link": "https://www.thelallantop.com/" },
        { "title": "GNTTV", "link": "https://www.gnttv.com/" },
        { "title": "Daily Digest", "link": "https://www.readersdigest.in/" }

    ]
    return (
        <div>

            <ul className={showMenu ? "menu showMenu ": "menu"} >
                {MenuList && MenuList.map((val,key) => {
                    {console.log("menu",val)}
                  return  <li><a className="menuItem" key={key} onClick={()=>""} href={val.link}>{val.title}</a></li>
                })}

            </ul>
            <button className="hamburger" onClick={()=>toggleMenu()}>
                <div className="menuIcon" style={{display:showMenu?"block":"none"}}><img style={{width:"20px",height:"18px"}} src={hamburgerIcon}/></div>
                <div className="closeIcon" style={{display: showMenu?"none":"block"}}>X</div>
            </button>
        </div>
    )

}


export default HamburgerMenu