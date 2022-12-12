import React from "react";
import "../styles/footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div id="footer_cont">
        <div className="box-one">
          <h5 class="Heading">HOME</h5>
          <p>Log In</p>
          <p>Register</p>
          <p>Subscribe</p>

        </div>
        <div className="box-one">
          <h5 class="Heading">ABOUT</h5>
          <p>Biography</p>
          <p>Connect</p>


        </div>
        <div className="box-one">
          <h5 class="Heading">NEWS</h5>
          <p>News Updates</p>
          <p>Media Covrage</p>
          <p>Reflections</p>
          <p>News Letter</p>
          <br />

        </div>
        <div className="box-one">
          <h5 class="Heading">TUNE IN</h5>
          <p>Mann ki Baat</p>
          <p>Watch Live</p>

        </div>
        <div className="box-one">
          <h5 class="Heading">GOVERNANCE</h5>
          <p>Thomas Press</p>
          <p>Global Recognition</p>
          <p>Infographics</p>

        </div>
        <div className="box-one">
          <h5 class="Heading">THOUGHTS</h5>
            <p>India Content</p>
            <p>Headlines Today</p>
         


        </div>
      </div>
    </div>
  );
};
