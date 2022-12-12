import React from "react";
import "./register.css";
import { Link } from "react-router-dom";

export const Register = () => {
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

      <div className="deco">
        <h3 className="aa">
          <b>Sign Up By</b>
        </h3>

        <div className="icon">
          <a
            href="https://auth.indiatoday.in/saml_login/twitter/aHR0cHM6Ly93d3cuaW5kaWF0b2RheS5pbi8jc3NvbG9naW49MQ=="
            class="sso-twitter"
          >
            <div className="hu">
              {" "}
              <img
                src="https://th.bing.com/th/id/OIP.WlVEYN86Ndj4KZiGf4zvCAHaHa?w=180&h=180&c=7&r=0&o=5&pid=1.7 "
                alt=""
                className="zz"
              />
              <div className="twitter">Twitter</div>
            </div>
          </a>
          <a
            href="https://auth.indiatoday.in/saml_login/facebook/aHR0cHM6Ly93d3cuaW5kaWF0b2RheS5pbi8jc3NvbG9naW49MQ=="
            class="sso-facebook"
          >
            <div className="hu">
              {" "}
              <img
                src="https://th.bing.com/th/id/OIP.opWSg0C5fPLAUyJzE9e_VwHaHa?w=217&h=216&c=7&r=0&o=5&pid=1.7 "
                alt=""
                className="zz"
              />
              <span className="fb">Facebook</span>
            </div>
          </a>
          <a
            href="https://auth.indiatoday.in/saml_login/google/aHR0cHM6Ly93d3cuaW5kaWF0b2RheS5pbi8jc3NvbG9naW49MQ=="
            class="sso-google"
          >
            <div className="hu">
              {" "}
              <img
                src="https://th.bing.com/th/id/OIP.1Nl9otEDi23qnVEQXPJuKQHaHa?w=162&h=180&c=7&r=0&o=5&pid=1.7 "
                alt=""
                className="zz"
              />
              <span className="ggl">Google</span>
            </div>
          </a>
        </div>
        <h3 className="sa">
          <b>OR</b>
        </h3>
        <h3 className="one"> Sign Up using your Email Id/Mobile No.</h3>
      </div>

      <div className="input1">
        <select className="country">
          <option>India</option>
          <option>USA</option>
          <option>UK</option>
          <option value="">Other country</option>
        </select>

        <input placeholder="Enter Your Full Name" className="name" />
      </div>

      <div className="input2">
        <input placeholder="Enter Your Email" className="email" />
        <input placeholder=" * Password" className="password" />
      </div>

      <div className="box">
        <input className="inpt" type="checkbox" />
        <span className="span">
          {" "}
          I agree to the SSO login privacy terms and I warrant that I am above
          16 years of age. <span className="xx">*</span>
        </span>

        <input className="inpt" type="checkbox" />
        <span className="span">
          {" "}
          I agree to the processing of my personal information for profiling
          such as My Credits, Follow activity , Personalised recommendations and
          Advertisements.{" "}
        </span>
        <br />

        <input className="inpt" type="checkbox" />
        <span className="span">
          I wish to receive custom communications i.e. Emails, newsletters, SMS,
          notifications from India Today based on my interests and my activities
          on the website.{" "}
        </span>
      </div>

      <Link to="/signup">
        <button className="ss" type="submit">
          Sign Up
        </button>
      </Link>

      <div className="tt">
        <p className="pp">
          <span className="xx">*</span>
          <b>Mandotory Fields</b>
        </p>
        <Link to="/signup">
          {" "}
          <p className="pp">
            <b>
              Already Register??<span className="xx">Sign In</span>
            </b>
          </p>
        </Link>
      </div>

      <div className="footer">
        <div className="foot1">
          <p className="network">One Network One Account</p>
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
          <p className="last">
            Copyright © 2022 Living Media India Limited. For reprint rights:
            Syndications Today
          </p>
        </div>
      </div>
    </div>
  );
};
