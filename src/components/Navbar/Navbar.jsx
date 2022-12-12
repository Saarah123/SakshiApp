import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { CgScreen } from "react-icons/cg";
import { FaBitcoin } from "react-icons/fa";
import { BiEditAlt } from "react-icons/bi";

export const Navbar = () => {
  return (
    <div className="navbar" id="navbar">
      <ul>
        <li>
          <a
            href="https://www.indiatoday.in/"
            style={{ textDecoration: "none", color: "gray", target: "_blank" }}
          >
          Narendra Modi
          </a>
        </li>
        <li>
          <a
            href="https://malayalam.indiatoday.in/"
            style={{ textDecoration: "none", color: "gray", target: "_blank" }}
          >
            Malayalam
          </a>
        </li>
        <li>
          <a
            href="https://www.businesstoday.in/"
            style={{ textDecoration: "none", color: "gray", target: "_blank" }}
          >
            Business Today
          </a>
        </li>
        <li>
          <a
            href="https://www.dailyo.in/"
            style={{ textDecoration: "none", color: "gray", target: "_blank" }}
          >
            DailyO
          </a>
        </li>
        <li>
          <a
            href="https://www.aajtak.in/"
            style={{ textDecoration: "none", color: "gray", target: "_blank" }}
          >
            AajTak
          </a>
        </li>
        <li>
          <a
            href="https://www.thelallantop.com/"
            style={{ textDecoration: "none", color: "gray", target: "_blank" }}
          >
            Lallantop
          </a>
        </li>
        <li>
          <a
            href="https://www.thelallantop.com/"
            style={{ textDecoration: "none", color: "gray", target: "_blank" }}
          >
            Lallantop
          </a>
        </li>
        <li>
          <a
            href="https://www.gnttv.com/"
            style={{ textDecoration: "none", color: "gray", target: "_blank" }}
          >
            GNTTV
          </a>
        </li>
        <li>
          {" "}
          <a
            href="https://www.readersdigest.in/"
            style={{ textDecoration: "none", color: "gray", target: "_blank" }}
          >
            Reader's Digest
          </a>
        </li>
      </ul>
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
              <BiEditAlt></BiEditAlt>
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
