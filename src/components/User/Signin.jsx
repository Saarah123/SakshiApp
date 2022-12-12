import React from "react";
import "./Signin.css";
import { Link } from "react-router-dom";
import { LandingPage } from "../Home/LandingPage";

export const Signin = () => {
  return (
    <div className="SignIn">
      <div className="Signin_header">
        <h1 className="india">Back To India Today</h1>
        <img
          className="img"
          src="https://auth.indiatoday.in/sites/all/themes/itg/images/span_itg_group.png"
          alt="img"
        />
      </div>
      <h3 className="top">Sign In To India Today</h3>
      <Link to="/register">
        {" "}
        <p className="top1">
          <b>Dont have an account ? </b>{" "}
          <span className="top2">
            {" "}
            <Link to="register"></Link> <b> Sign Up Now</b>{" "}
          </span>{" "}
        </p>
      </Link>
      <div className="deco">
        <h3 className="mu">
          <b>Sign In Via</b>
        </h3>

        <div className="icon">
          <a href="https://auth.indiatoday.in/saml_login/twitter/aHR0cHM6Ly93d3cuaW5kaWF0b2RheS5pbi8jc3NvbG9naW49MQ==">
            <div className="hu">
              {" "}
              <img
                src="https://th.bing.com/th/id/OIP.WlVEYN86Ndj4KZiGf4zvCAHaHa?w=180&h=180&c=7&r=0&o=5&pid=1.7"
                alt=""
                className="zz"
              />
              <div className="twitter">Twitter</div>
            </div>
          </a>
          <a href="https://auth.indiatoday.in/saml_login/facebook/aHR0cHM6Ly93d3cuaW5kaWF0b2RheS5pbi8jc3NvbG9naW49MQ==">
            <div className="hu">
              {" "}
              <img
                src="https://th.bing.com/th/id/OIP.opWSg0C5fPLAUyJzE9e_VwHaHa?w=217&h=216&c=7&r=0&o=5&pid=1.7"
                alt=""
                className="zz"
              />
              <span className="fb">Facebook</span>
            </div>
          </a>
          <a href="https://auth.indiatoday.in/saml_login/google/aHR0cHM6Ly93d3cuaW5kaWF0b2RheS5pbi8jc3NvbG9naW49MQ==">
            <div className="hu">
              {" "}
              <img
                src="https://th.bing.com/th/id/OIP.1Nl9otEDi23qnVEQXPJuKQHaHa?w=162&h=180&c=7&r=0&o=5&pid=1.7"
                alt=""
                className="zz"
              />
              <span className="ggl">Google</span>
            </div>
          </a>
        </div>

        <h3 className="one">
          <b>Or Sign In using your Email or Mobile no.</b>
        </h3>
      </div>
      <div className="kk">
        <img
          src="https://th.bing.com/th/id/OIP.ZukVvz62s21LSc4we5WeagHaHa?w=185&h=181&c=7&r=0&o=5&pid=1.7"
          alt=""
          className="pic"
          style={{ marginBottom: "-17px" }}
        />
        <input
          placeholder="Enter Your Email/Mobile"
          type="text"
          className="cc"
        ></input>
      </div>

      <div className="kk1">
        <img
          src="https://th.bing.com/th/id/OIP.fC2yOxAzBsS2Kv5Vo2jgegHaHa?w=162&h=180&c=7&r=0&o=5&pid=1.7 "
          alt=""
          className="pic"
        />
        <input
          placeholder="Enter Your Password"
          type="text"
          className="cc"
        ></input>
      </div>
      <div className="me">
        <input type="checkbox" />
        <span>Remember me</span>
      </div>
      <div className="blue">
        <p3 className="b">
          <b>Forget Password? </b>
        </p3>
        <p3 className="b">
          <b>Login via OTP</b>
        </p3>
      </div>
      <Link to="/">
        {" "}
        <button className="ss" type="submit">
          Log In
        </button>
      </Link>

      <div className="footer">
        <div className="foot1">
          <p1 className="network">One Network One Account</p1>
          <div className="imgy">
            <img
              className="imgx"
              src="https://smedia2.intoday.in/aajtak/aajtakhd/images/aajtakHd_logo.png?bypass=true"
              alt=""
            />
          </div>
          <div className="imgy">
            {" "}
            <img
              className="imgx"
              src="https://akm-img-a-in.tosshub.com/sites/all/themes/itg/logo.png?576"
              alt=""
            />
          </div>
          <div className="imgy">
            <img
              className="imgx"
              src="https://akm-img-a-in.tosshub.com/sites/btmt/businesstoday/resources/css/images/btnav-newlogo.png?size=48:21"
              alt=""
            />
          </div>
        </div>
        <div className="foot2">
          <p1 className="last">
            Copyright © 2022 Living Media India Limited. For reprint rights:
            Syndications Today
          </p1>
        </div>
      </div>
    </div>
  );
};
