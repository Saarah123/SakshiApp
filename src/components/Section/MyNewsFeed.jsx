import { BiPencil } from "react-icons/bi";
import "../styles/MyNewsFeed.css";
import { Link } from "react-router-dom";
export const MyNewsFeed = () => {
  return (
    <div className="myfeed_main">
      <div className="section">
        <h3 className="one">
          My News Feed<div className="line"></div>
        </h3>
        <h3>Recommended For You</h3>
        <h3>
          <span>
            <BiPencil />
          </span>
          Personalise
        </h3>
        <h3>India</h3>
        <h3>Movies</h3>
        <h3>World</h3>
        <h3>Technology</h3>
        <h3>Sports</h3>
        <h3>Auto</h3>
        <h3>Programmes</h3>
      </div>
      <div className="img" id="img">
        <div>
          <div className="flex">
            <img
              src="	https://akm-img-a-in.tosshub.com/indiatoday/images/mediamanager/foryou_india.png"
              alt=""
            />
            <div className="border"></div>
          </div>
          <p>India</p>
          <div className="borderbottom"></div>
        </div>
        <div>
          <div className="flex">
            <img
              src="	https://akm-img-a-in.tosshub.com/indiatoday/images/mediamanager/foryou_movies.png"
              alt=""
            />
            <div className="border"></div>
          </div>
          <p>Movies</p>
          <div className="borderbottom"></div>
        </div>
        <div>
          <div className="flex">
            <img
              src="	https://akm-img-a-in.tosshub.com/indiatoday/images/mediamanager/foryou_world.png"
              alt=""
            />
            <div className="border"></div>
          </div>
          <p>World</p>
          <div className="borderbottom"></div>
        </div>
        <div>
          <div className="flex">
            <img
              src="	https://akm-img-a-in.tosshub.com/indiatoday/images/mediamanager/foryou_technology.png"
              alt=""
            />
            <div className="border"></div>
          </div>
          <p>Technology</p>
          <div className="borderbottom"></div>
        </div>
        <div>
          <div className="flex">
            <img
              src="https://akm-img-a-in.tosshub.com/indiatoday/images/mediamanager/foryou_sports.png"
              alt=""
            />
            <div className="border"></div>
          </div>
          <p>Sports</p>
          <div className="borderbottom"></div>
        </div>
        <div>
          <div className="flex">
            <img
              src="	https://akm-img-a-in.tosshub.com/indiatoday/images/mediamanager/foryou_business.png"
              alt=""
            />
            <div className="border"></div>
          </div>
          <p>Business</p>
          <div className="borderbottom"></div>
        </div>
        <div>
          <div className="flex">
            <img
              src="	https://akm-img-a-in.tosshub.com/indiatoday/images/mediamanager/foryou_videos.png"
              alt=""
            />
            {/* <div className="empty"></div> */}
          </div>
          <p>Videos</p>
          <div className="borderbottom"></div>
        </div>
        <div>
          <div className="flex">
            <img
              src="https://akm-img-a-in.tosshub.com/indiatoday/images/mediamanager/foryou_auto.png"
              alt=""
            />
            <div className="border"></div>
          </div>
          <p>Auto</p>
          <div className="borderbottom"></div>
        </div>
        <div>
          <div className="flex">
            <img
              src="	https://akm-img-a-in.tosshub.com/indiatoday/images/mediamanager/foryou_photos.png"
              alt=""
            />
            <div className="border"></div>
          </div>
          <p>Photos</p>
          <div className="borderbottom"></div>
        </div>
        <div>
          <div className="flex">
            <img
              src="https://akm-img-a-in.tosshub.com/indiatoday/images/mediamanager/foryou_mailtoday.png"
              alt=""
            />
            <div className="border"></div>
          </div>
          <p>Mail Today</p>
          <div className="borderbottom"></div>
        </div>
        <div>
          <div className="flex">
            <img
              src="	https://akm-img-a-in.tosshub.com/indiatoday/images/mediamanager/foryou_factcheck.png"
              alt=""
            />
            <div className="border"></div>
          </div>
          <p>Fact Check</p>
          <div className="borderbottom"></div>
        </div>
        <div>
          <div className="flex">
            <img
              src="	https://akm-img-a-in.tosshub.com/indiatoday/images/mediamanager/foryou_lifestyle.png"
              alt=""
            />
            <div className="border"></div>
          </div>
          <p>LifeStyle</p>
          <div className="borderbottom"></div>
        </div>
        <div>
          <div className="flex">
            <img
              src="	https://akm-img-a-in.tosshub.com/indiatoday/images/mediamanager/foryou_programmes.png"
              alt=""
            />
            <div className="border"></div>
          </div>
          <p>Programmes</p>
          <div className="borderbottom"></div>
        </div>
        <div>
          <div className="flex">
            <img
              src="	https://akm-img-a-in.tosshub.com/indiatoday/images/mediamanager/foryou_technology.png"
              alt=""
            />
            {/* <div className="empty"></div> */}
          </div>
          <p>Television</p>
          <div className="borderbottom"></div>
        </div>
        <div>
          <div className="flex">
            <img
              src="https://akm-img-a-in.tosshub.com/indiatoday/images/mediamanager/foryou_science.png"
              alt=""
            />
            <div className="border"></div>
          </div>
          <p>Science</p>
        </div>
      </div>
      <Link to="/">
        <button
          className="skip"
          onClick={() => {
            // Navigate to Landing Page
          }}
        >
          SKIP
        </button>
      </Link>
    </div>
  );
};
