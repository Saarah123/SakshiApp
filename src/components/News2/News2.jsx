import "./News2.css";
export const News2 = () => {
  const data = [
    {
      title: "RUSSIA-UKRAIN WAR",
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/Ukraine_10.jpg?size=370:208",
      desc: "What is Ukrainian neutrality that Russia wants and will it end the war?",
      point1:
        "Missile mayhem | what are the different missilws used by the countries at war with each other?",
      point2:
        "Relentless bombarding destroyed mariupol; Russia weapponry captured by Ukrainian troops outside Kharkiv; more",
    },
    {
      title: "MOVIES",
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/somy_ali.jpg?size=370:208",
      desc: "Somy Ali says she will expose Bollywood's Harvey Weinstein in insta post",
      point1:
        "Ravi Kishan's elder brother dies of cancer, was undergoing treatment in AIIMS",
      point2:
        "After Will Smith-Chris Rock Oscars slap, Academy promises to take 'appropriate action",
    },
    {
      title: "IPL 2022",
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/000_1FE7JS_1200x768.jpeg?size=370:208",
      desc: "IPL 2022: Excepting Kohli to score 600-plus runs this season, says deVilliers",
      point1:
        "IPL 2022: Injuried Marsh out to Pakistan series, heades to india to join Delhi Capitals",
      point2:
        "IPL 2022: Moody questions Williamson's controversial dismissal by 3rd umpire",
    },
    {
      title: "TECHNOLOGY",
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/instagram-app-reuters_0.jpg?size=370:208",
      desc: "Instagram is working on 5 unique features: Image replies, and more",
      point1:
        "Apple paying up to Rs 1.5 crore to star engineers as retention bonus",
      point2:
        "Best Chromebook laptops for under Rs 30,000 in India: Asus Chromebook Flip, JP Chromebook MediaTek are top picks",
    },
    {
      title: "TRENDING",
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/BeFunky-collage_-_2022-03-30T1_5.jpg?size=370:208",
      desc: "This sitar cover of jab we met song Aaoge jab tum will cure your mid-week blues",
      point1:
        "Harsh Goeka posts pic of veggies wrapped in banana leaves at supermarket",
      point2:
        "Video of Serbian President waving at non-existent crowd during an inaugration ceremony is viral",
    },
    {
      title: "INDIA",
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/Enforcement-Direct_1_1200x768.jpeg?size=370:208",
      desc: "Assets of former Haryana govt official, middkeman worth crores atached by ED cheating case",
      point1:
        "Tamil Nadu Police reunite 13-year-old foreign national with parents in Mathura",
      point2:
        "Edappadi k Palaniswami accuses DMK workers of threatening people to extrot money",
    },
  ];
  const magazine = [
    {
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/Kashmir-farooq-a.jpg?size=170:96",
      desc: "Farooq Abdullah: Form a truth commission and hang me if I am guilty ",
    },
    {
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/Upfront-Japan.jpg?size=170:96",
      desc: "Guest column on India-Japan ties: A strategic partnership deepens ",
    },
    {
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/Screenshot_2022-03-25_at_11.50_1200x768.png?size=170:96",
      desc: "Why boxer Nikhat Zareen is being looked at as a successor to Mary Kom ",
    },
    {
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/pravin_tambe.jpg?size=170:96",
      desc: "IPL has changed my life: Pravin Tambe ",
    },
  ];

  return (
    <div>
      <div className="news2div">
        {data.map((e) => {
          return (
            <div>
              <h1 className="title">{e.title}</h1>
              <img src={e.img} alt="" className="img" />
              <h1 className="desc">{e.desc}</h1>
              <ul className="ul ultag">
                <li className="li">{e.point1}</li>
                <li className="li">{e.point2}</li>
              </ul>
            </div>
          );
        })}
      </div>
      <div className="magazineouterdiv">
        <h3 className="magazinetitle">FROM THE MAGAZINE</h3>
        <div className="magazinediv">
          {magazine.map((e) => {
            return (
            //   <div className="magazinediv1">
                <div className="magazinediv1-1">
                  <div className="magazineimgdiv">
                    <img src={e.img} alt="" />
                  </div>
                  <div className="magazinedesc">{e.desc}</div>
                </div>
            //   </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
