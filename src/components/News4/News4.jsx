import "./News4.css";

export const News4 = () => {
  const data = [
    {
      title: "LIFESTYLE",
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/malaika_in_white_suit.png?size=370:208",
      desc: "Malaika in Rs 5k ethnic outfit proves whites are a must-have for summers",
      li1: "Kiara in sequinned jumpsuit is truly the queen of glam. Ananya loves it",
      li2: "Grammy Awards set sights on Las Vegas for first time",
    },
    {
      title: "SPORTS",
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/ab8599a8-91c3-44b3-a138-f5995f_1200x768.jpeg?size=370:208",
      desc: "IPL 2022 Updated Points Table, Orange Cap and Purple Cap lists: LSG's Deepak Hooda, Ayush Badoni among top 5 in batting chart",
      li1: "IPL 2022: Kolkata look to bounce back after defeat to RCB, Punjab eye 2nd win",
      li2: "Babar Azam proud after Pak defeats Australia in second ODI",
    },
  ];
  const programme = [
    {
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/video/202204/us-india-russia.jpg?size=88:50",
      desc: "US dy NSA cautions India over Russia trade; Ukraine-Russia to hold peace talks today; more",
    },
    {
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/video/202204/halal-meat-row-rep.jpg?size=88:50",
      desc: "Haunting images of attack in Ukraine's Irpin; Row over halal meat brewing in Karnataka; and more",
    },
    {
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/video/202204/000_323Y8VE_1200x768.jpeg?size=88:50",
      desc: "The reality of Russia's 'scaling down' promise | Ground Report",
    },
    {
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/video/202204/Sensex_reuters_8_1200x768_1200x768.jpeg?size=88:50",
      desc: "Sensex snaps 3-day winning streak; SpiceJet settles commercial dispute with Credit Suisse; more",
    },
    {
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/video/202204/imran_khan_glares_1200x768_1200x768.jpeg?size=88:50",
      desc: "Pak political turmoil: 'Blame US' Imran Khan's last card?",
    },
  ];
  const data2 = [
    {
      title: "BUSINESS",
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/Income_Tax_Return_ITR_1200x768.jpeg?size=370:208",
      desc: "Income tax alert: Important updates for taxpayers",
      li1: "Russia is selling oil at discounted prices to India | All you need to know",
      li2: "Bitcoin price drops, other cryptocurrencies fall | Check latest",
    },
    {
      title: "SCIENCE",
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/Moon_Base.jpg?size=370:208",
      desc: "Europe plans to GROW meat. Not just on Earth, but in space",
      li1: "Blue Origin sends six tourists on joyride trip to space on its fourth flight | PICS",
      li2: "After killer asteroid, mammals got bigger before they got smarter",
    },
    {
      title: "AUTO",
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/2022_Renault_Kiger_Metal_Musta.jpg?size=370:208",
      desc: "2022 Renault Kiger launched with exterior updates, new colour and added features",
      li1: "Volkswagen Virtus production commences",
      li2: "Toyota Hilux price starts from Rs 33.99 lakh",
    },
    {
      title: "TELEVISION",
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/Untitled_design_-_2022-04-01T1_0.png?size=370:208",
      desc: "Divya Agarwal wishes ex-BF Varun Sood on his birthday. Fans say 'Give him one last chance'",
      li1: "May Calamawy hopes Arabs love Moon Knight, is excited to invite them into the MCU",
      li2: "Top 5 TV Newsmakers of the Week",
    },
    {
      title: "EDUCATION TODAY",
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/Untitled-1_(10).jpg?size=370:208",
      desc: "Two coins in two bowls: Read what PM Modi said at Pariksha Pe Charcha",
      li1: "Telangana govt reduces school timings as temperature soars in heatwave",
      li2: "Pariksha Pe Charkha 2022: PM Modi answers students’ questions on exam stress, social media and more",
    },
    {
      title: "CITIES",
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/Fire_0.jpg?size=370:208",
      desc: "Gurugram: Major fire at house in Manohar Nagar, 1 dead",
      li1: "UP: Woman attempts self-immolation outside BJP office in Lucknow",
      li2: "Gurugram: 20-year-old boy arrested for killing priest",
    },
    {
      title: "NEWS ANALYSIS",
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/imran-khan-2_0_1200x768.jpeg?size=370:208",
      desc: "Why Imran Khan’s crisis marks a break from the past in Pakistan",
      li1: "The delta between policy pronouncements and implementation",
      li2: "Wang Yi visit and the Chinese art of deception",
    },
    {
      title: "CORONAVIRUS OUTBREAK",
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/Koreaaa_1200x768.jpeg?size=370:208",
      desc: "As Shanghai expands Covid lockdown, life on hold in city of 26 million",
      li1: "Wearing mask not mandatory in Mumbai from today",
      li2: "Maharashtra to lift all Covid curbs from Saturday, masks no longer compulsory",
    },
    {
      title: "INDIA TODAY INSIGHT",
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/Wine_Shop-PT-09062020__9__1200x768.jpeg?size=370:208",
      desc: "Why it’s ‘acche din’ for tipplers in Madhya Pradesh",
      li1: "When a rape case against a Hindu religious leader tested Shivraj Chouhan’s ‘bulldozer mama’ image",
      li2: "The BJP game plan for 2022 presidential elections",
    },
    {
      title: "LAW",
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202204/wadhawan_1200x768.jpeg?size=370:208",
      desc: "Bombay HC directs Rakesh Wadhawan, accused in PMC bank fraud case, to be shifted back to KEM hospital",
      li1: "Mumbai court acquits father, uncle of minor in rape case after 3 years in jail",
      li2: "Malegaon blast case: Bombay HC rejects Lt Col Purohit’s appeal seeking a stay on the trial",
    },
    {
      title: "CRIME",
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/goat_0_1200x768.jpeg?size=370:208",
      desc: "Man arrested for raping, killing pregnant goat in Kerala's Kasaragod",
      li1: "Kanpur: Police nab 6 including 4 minors for snatching chains",
      li2: "Minor Dalit girl gang raped in UP’s Bulandshahr; 3 booked",
    },
    {
      title: "FACT CHECK",
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/Cover__2__1200x768.jpeg?size=370:208",
      desc: "Fact Check: 2018 and 2020 videos shared as recent wildfire near Chernobyl nuclear plant in Ukraine",
      li1: "Fact Check: 2017 video of doctor collapsing after heart attack in Bengaluru shared as recent Mumbai incident",
      li2: "Fact Check Video: Yogi Adityanath didn't ask people to boycott 'Pathan'",
    },
  ];
  return (
    <div className="main">
      <div className="prog">
        <div className="data">
          {data.map((e) => {
            return (
              <div>
                <h2>{e.title}</h2>
                <img src={e.img} alt="" />
                <h3>{e.desc}</h3>
                <hr />
                <ul className="ultag">
                  <li>{e.li1}</li>
                  <hr />
                  <li>{e.li2}</li>
                </ul>
              </div>
            );
          })}
        </div>
        <div className="programme">
          <h2>PROGRAMME</h2>
          {programme.map((e) => {
            return (
              <div>
                <div className="programmediv">
                  <img src={e.img} alt="" />
                  <h4>{e.desc}</h4>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
      <div className="data2">
        {data2.map((e) => {
          return (
            <div>
              <h2>{e.title}</h2>
              <img src={e.img} alt="" />
              <h3>{e.desc}</h3>
              <hr />
              <ul className="ultag">
                <li>{e.li1}</li>
                <hr />
                <li>{e.li2}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};
