import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { CgScreen } from "react-icons/cg";
import { FaBitcoin } from "react-icons/fa";
import { BiEditAlt } from "react-icons/bi";
import HamburgerMenu from "./HamburgerMenu";

export const Navbar = () => {
  // return (
  //   <HamburgerMenu/>
  // )
  return (
    <div className="navbar" id="navbar">

      <hr />
      <div className="nav-centrall">
        <ul>
          <li>News</li>
          <li>LIVE TV</li>
          <img class="NaMo"
            src="https://www.clipartkey.com/mpngs/m/88-883232_nation-with-namo-nation-with-namo-logo.png"
            alt=""
          />
          <li>APP</li>
          <li>MAGAZINE</li>
        </ul>
      </div>
      <div className="nav-bottom" id="nav-bottom">
        <ul>
       <li>
       <HamburgerMenu/>
       </li>
          <li>
            <Link
              to="/"
              className="hov"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/myfeed"
              style={{ textDecoration: "none", color: "white" }}
            >
              {/* <BiEditAlt></BiEditAlt> */}
              MY FEED
            </Link>
          </li>
          <li>
            <Link
              to="/india"
              style={{ textDecoration: "none", color: "white" }}
            >
              INDIA
            </Link>
          </li>
          <li>
            <Link
              to="/business"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              BUSINESS
            </Link>
          </li>
          <li>
            <Link
              to="/world"
              style={{ textDecoration: "none", color: "white" }}
            >
              WORLD
            </Link>
          </li>
          <li>
            <Link to="/tech" style={{ textDecoration: "none", color: "white" }}>
              TECH
            </Link>
          </li>
          <li>
            <Link
              to="/movies"
              style={{ textDecoration: "none", color: "white" }}
            >
              MOVIES
            </Link>
          </li>
          <li>
            <Link to="/ipl" style={{ textDecoration: "none", color: "white" }}>
            FIFA 2022
            </Link>
          </li>
          <li>
            <Link
              to="/science"
              style={{ textDecoration: "none", color: "white" }}
            >
              SCIENCE
            </Link>
          </li>
          <li>
            <Link
              to="/"
              style={{ textDecoration: "none", color: "white" }}
            >
              HAPPINESS QUEST
            </Link>
          </li>
          <li>
            <FaBitcoin style={{ height: "20px" }}></FaBitcoin>
          </li>
          <li>
            <CgScreen style={{ height: "20px" }}></CgScreen>
          </li>
          <li>
            <FaShareAlt style={{ height: "20px" }}></FaShareAlt>
          </li>
          <li>
            <FaSearch style={{ height: "20px" }}></FaSearch>
          </li>
          <li>
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "white" }}
            >
              <FaUser style={{ height: "20px" }}></FaUser>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
