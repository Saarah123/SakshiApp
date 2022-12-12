import { useEffect, useState } from "react";
import axios from "axios";
import "./LandingPage.css";
import Carousel from "react-elastic-carousel";
import { News2 } from "../News2/News2";
import { News3 } from "../News3/News3";
import { News4 } from "../News4/News4";
import { Scroll } from "../Scroll/Scroll";

export const LandingPage = () => {
  const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 100, itemsToShow: 2 },
    { width: 200, itemsToShow: 3 },
    { width: 300, itemsToShow: 4 },
  ];
  const breakpoints2 = [{ width: 1, itemsToShow: 1 }];
  const api = "852b09e330cd44518bd49a10d6559e9d";
  // const [news, setNews] = useState([]);
  const [topnews, setTopnews] = useState([]);
  const visualnews = {
    visualstories: [
      {
        img: "https://th.bing.com/th/id/OIP.QvFEVZUOsp6cg-eArVt9iwHaEx?w=242&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        title: "Behind Narendra Modi Election Lok Sabha",
      },
      {
        img: "https://th.bing.com/th/id/OIP.KpHx-6kAWPwHhwtA39W4SgHaFj?w=215&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        title: "Places to visit in Nepal",
      },
      {
        img: "https://th.bing.com/th/id/OIP.POe_rz1wYQvLmBxVGtbFEQHaEe?w=303&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        title: "See All the Updates of FIFA 2022",
      },
      {
        img: "https://th.bing.com/th/id/OIP.fbenVEXp44KmRgiJsP1magHaEo?w=288&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        title: "NaMo to be launching soon",
      },
      {
        img: "https://th.bing.com/th/id/OIP.gR1wtUqQh_diUtZZb-ZsowHaGA?w=218&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        title: "8 Most Expensive Indian Films",
      },
      {
        img: "https://th.bing.com/th/id/OIP.ZdXwtQo5a2_AjLz3YDni9AHaEK?w=290&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        title: "Economy crashes down",
      },
      {
        img: "https://th.bing.com/th/id/OIP.QPMl21KhHxeX-R0Sg1A2zQHaHM?w=206&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        title: "Hottie Jennifer Winget",
      },
      {
        img: "https://akm-img-a-in.tosshub.com/sites/visualstory/stories/2022_03/story_6253/assets/15.jpeg?time=1648548292&size=125:168",
        title: "Aadi Gert Engaged to Nikki Galrani",
      },
      {
        img: "https://akm-img-a-in.tosshub.com/sites/visualstory/stories/2022_03/story_6250/assets/20.jpeg?time=1648543948&size=125:168",
        title: "7 Times Schumer stole joikes",
      },
      {
        img: "https://akm-img-a-in.tosshub.com/sites/visualstory/stories/2022_03/story_6248/assets/14.jpeg?time=1648536277&size=125:168",
        title: "Hardik Pandya, KL Rahul in IPL bromance",
      },
    ],
  };

  const special = [
    {
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/sri_lanka_crisis.jpeg?size=647:363",
      desc: "How Sri Lankan economic crisis unfolded | Infographic",
    },
    {
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/WHO_1200x768.jpeg?size=647:363",
      desc: "Covid deaths see 43% spike in last week, WHO concerned about reduced testing",
    },
    {
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/wang_yi_1200x768.png?size=647:363",
      desc: "Wang Yi visit and the Chinese art of deception",
    },
    {
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/WhatsApp_Image_2022-03-30_at_8.jpeg?size=647:363",
      desc: "Arvind Kejriwal and his ‘The Kashmir Files’ firefighting",
    },
    {
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/Sri_Lanka__AP__1200x768.jpeg?size=647:363",
      desc: "Refugees, inflation and power cuts: How Sri Lanka walked itself into a mess",
    },
  ];
  const News = [
    {
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/Jaishankar_Lavrov_1200x768.jpeg?size=483:271",
      desc: "As West tries to coax India to condemn Russia's Ukraine invasion, Jaishankar maintains neutral stance",
    },
    {
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/Cover_Image_-_Genome.png?size=237:133",
      desc: "Now we know what makes us. Researchers decode full human genome",
    },
    {
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/WhatsApp_Image_2022-04-01_at_1_1_1200x768.jpeg?size=237:133",
      desc: "TMC mocks BJP's 'acche din' with Oscars slapgate meme on April Fool's day",
    },
  ];

  useEffect(() => {
    // getDataMain();
    getTopnewsData();
    // getVisualnewsData();
  }, []);
  // const getDataMain = () => {
  //   axios
  //     .get(
  //       `https://newsapi.org/v2/everything?q=Apple&from=2022-03-30&sortBy=popularity&apiKey=${api}`
  //     )
  //     .then((res) => {
  //       setNews(res.data.articles);
  //       // console.log("data:", res);
  //     });
  // };

  const getTopnewsData = () => {
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${api}`)
      .then((res) => {
        setTopnews(res.data.articles);
        // console.log("data:", topnews);
      });
  };
  // const getVisualnewsData = () => {
  //   axios
  //     .get(
  //       `https://localhost:3001`
  //     )
  //     .then((res) => {
  //       // setVisualnews(res.data.sources);
  //       console.log("data:", res);
  //     });
  // };

  return (
    <div className="maindiv">
      <div id="child-div">
        {/* <div className="newsdiv">
          <div>
            <div className="imgdiv">
              <img className="newsimg" src={News[0].img} alt="" />
            </div>
            <h1 className="newstitle">{News[0].desc}</h1>
          </div>
          <div className="newsdiv1-1">
            <div>
              <div className="img0div">
                <img className="img0" src={News[1].img} alt="" />
              </div>
              <h1 className="newstitle0">{News[1].desc}</h1>
            </div>
            <div>
              <div className="img0div">
                <img className="img0" src={News[2].img} alt="" />
              </div>
              <h1 className="newstitle0">{News[2].desc}</h1>
            </div>
          </div>
        </div> */}
        {/* <div className="topnewsdiv">
          <h2 className="topstoriesh2">TOP STORIES</h2>
          {topnews.map((e) => {
            return (
              <div className="topnewsdiv1-1">
                <h3 className="topnewstitle">{e.title}</h3>
              </div>
            );
          })}
        </div> */}
      </div>
      <div className="container2">
        <div className="visual">

          <div className="visualnewsouterdiv">
            <Carousel breakPoints={breakpoints}>
              {visualnews.visualstories.map((e) => {
                return (
                  <div className="visualnewsdiv">
                    <img className="visualnewsimg" src={e.img} alt="" />
                    <h2 className="visualnewstitle">{e.title}</h2>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>

      </div>
      <div className="todaysspecial">
          <h2>TODAY'S SPECIAL</h2>
          <div className="todaysspecialdiv">
            <Carousel breakPoints={breakpoints2}>
              {special.map((e) => {
                return (
                  <div className="todaysspecialdiv-1">
                    <img src={e.img} alt="" />
                    <p>{e.desc}</p>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      <News2 />
      <News3 />
      <News4 />
      <Scroll />
    </div>
  );
};
