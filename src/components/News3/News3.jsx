import "./News3.css";
import Carousel from "react-elastic-carousel";

export const News3 = () => {
  const breakpoints = [{ width: 1, itemsToShow: 1 }];
  const photos = [
    {
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/photogallery/202203/Cherry_blossom__8__1200x768.png?size=647:363",
      desc: "'Tis the season for Sakura: Cherry blossoms paint the world pink | IN PICS",
    },
    {
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/photogallery/202203/China_lockdown__4__1200x768.png?size=647:363",
      desc: "Empty roads, mass testing: Scenes from Shanghai lockdown amid spike in Covid cases | PICS",
    },
    {
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/photogallery/202203/2022-03-29T163641Z_116639485_R_1200x768.png?size=647:363",
      desc: "Awakening Bangkok: Several districts light up to revive tourism | PICS",
    },
    {
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/photogallery/202203/Tulip_garden__3__1200x768.jpeg?size=647:363",
      desc: "Inside Asia's largest tulip garden: 1.5 million flowers bloom in Srinagar to offer a visual treat | IN PICS",
    },
    {
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/photogallery/202203/Ukraine_war__3__1200x768.png?size=647:363",
      desc: "Faces of war: Older people left alone in Ukraine as Russian missiles destroy homes | IN PICS",
    },
  ];
  const anchors = [
    {
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/reporter/202011/rajdeep-1200x768.jpg?8_dbiZ9RwhfL6zJwgTqtxRW3ByaTjE7F&size=190:190",
      desc: "Rajdeep Sardesai",
    },
    {
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/reporter/202011/Rahul-Kanwal-1200x768.jpg?umwyxUJ4HR7z1jjwQrhMaeLf0HxT5_h8&size=190:190",
      desc: "Rahul Kanwal",
    },
    {
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/reporter/202011/shiv_aroor-1200x768.jpg?MTststqbE4DuaqiT2LMHb6x3huOyDDS3&size=190:190",
      desc: "Shiv Aroor",
    },
  ];
  const watch = [
    {
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/video/202203/PUTIN_1200x768_2-88x50.jpeg?J9.E.m_LB_zGGOBa_vf4BsA8xdj_Acmz",
      desc: "Nuclear weapons: Putin's last resort to win?",
    },
    {
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/video/202203/GettyImages-453217932_0-88x50.jpeg?pzw_yfjQRJEC6dxGsiNkP0vqIzwnGJ1_",
      desc: "Endgame for Imran Khan | Pakistan to get 'Naya' Prime Minister?",
    },
    {
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/video/202203/K4MTMLEHTRKGFK3GSKAT4GR3NE_0-88x50.jpeg?b7ChpT6rkCME_XIIZNwQWyoFbPBpa9hy",
      desc: "Russia-Ukraine war: Putin demands surrender of Mariupol to end shelling",
    },
  ];
  return (
    <div>
      <div className="conatainer">
        <div className="photos">
          <h2>PHOTOS</h2>
          <div className="photosdiv">
            <Carousel breakPoints={breakpoints}>
              {photos.map((e) => {
                return (
                  <div className="photosdiv-1">
                    <img src={e.img} alt="" />
                    <p>{e.desc}</p>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
        <div className="container1-2">
          <div className="anchors">
            <h2>ANCHORS</h2>
            <div className="anchorsdiv">
              {anchors.map((e) => {
                return (
                  <div>
                    <img src={e.img} alt="" />
                    <h4>{e.desc}</h4>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="watch">
            <h2>WATCH RIGHT NOW</h2>
            <div className="watchdiv">
              {watch.map((e) => {
                return (
                  <div>
                    <div>
                      <h5>{e.desc}</h5>
                      <img src={e.img} alt="" />
                    </div>
                    <hr />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
