import React from "react";
import poesis from "../../assets/galleryImage/Poesis.png";
import moments from "../../assets/galleryImage/moments.jpeg";
import ipl from "../../assets/galleryImage/ipl.jpeg";
import smartdroid from "../../assets/galleryImage/smartdroid.jpeg";
import fastWeb from "../../assets/galleryImage/fastWeb.jpeg";
import getHired from "../../assets/galleryImage/getHired.jpeg";
import knock from "../../assets/galleryImage/knock.jpeg";
import "./poster.css";
const Poster = () => {
  return (
    <div className="posterContainer">
      <div className="poster">
        <div className="posterImg">
          <img src={poesis} alt="poster" />
        </div>
        <div className="posterAbout">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            provident natus hic! Reiciendis voluptatum aperiam voluptatem quo,
            ab eaque enim deserunt nisi natus est officia numquam repudiandae
            quae commodi delectus.
          </p>
        </div>
      </div>
      <div className="poster">
        <div className="posterImg">
          <img src={moments} alt="poster" />
        </div>
        <div className="posterAbout">
          <p>
            Photographs bear witness to stories that words fail to recite. It is
            the poetry written with the ink of light on the canvas of shadow,
            precious moments preserved in reels for years to cherish. Spectrum
            is back again with its segment MOMENTS, so grab your cameras and
            venture to click some breathtaking stories. Get ready to play with
            light, capture the stories of shadows against the vermillion
            sunsets, the bright noons, the light of your room, and the gleaming
            moonlight, because this year's theme is silhouette photography.
            Deadline of submission: 10/02/2023 Theme: Silhouette photography .
          </p>
        </div>
      </div>
      <div className="poster">
        <div className="posterImg">
          <img src={knock} alt="poster" />
        </div>
        <div className="posterAbout">
          <p>
            Hey you! Do you feel like your brain is in dire need of some
            excitement? Are you looking for some mind boggling questions to
            stimulate your gray cells? There we bring an event where your
            knowledge is going to be tested, your thinking ability is to be
            challenged and your speed is going to be exposed. Spectrum 9.0
            brings to all 'Knock Your Heads', which is a cumulation of logical,
            mathematical and general quiz. Come on, bring on the game and let's
            see, who knocks out whom and gets to the top.
          </p>
        </div>
      </div>
      <div className="poster">
        <div className="posterImg">
          <img src={getHired} alt="poster" />
        </div>
        <div className="posterAbout">
          <p>
            Attention job seekers! Get ready to showcase your skills and land
            your dream job in one of the most challenging events of ECS - "Get
            Hired", the ultimate interview competition. This competition is
            designed to give college students the chance to show off their
            abilities and knowledge in a fun and engaging way. The competition
            will take place in 2 parts. Part 1 will be Prelims which will be on
            4th February, 9 - 9:30 am, and the Final Interview will be on 10th
            February, 5:30 - 6:30 pm. The competition will consist of a series
            of challenging and exciting tasks that will test your skills in
            areas such as problem solving, communication, and teamwork. There
            will also be a panel of expert judges who will evaluate your
            performance and select the winner based on their overall impression.
            Don't miss this opportunity to stand out from the crowd and get
            noticed by top employers.
          </p>
        </div>
      </div>
      <div className="poster">
        <div className="posterImg">
          <img src={fastWeb} alt="poster" />
        </div>
        <div className="posterAbout">
          <p>
            “We love what we do and we do what our clients love & work with
            great clients all over the world to create thoughtful and purposeful
            websites.” Ever wondered how websites are made? Ever wanted to
            create your own website and flaunt your web development skills to
            the world? Then this is the right event for you. "Fast Web," one of
            the most anticipated events of Spectrum 9.0, is brought to you by
            ECS. ECS brings to you all "Fast Web," a web development hackathon
            wherein you have to build a prototype of your planned website just
            using your frontend skills. In this hackathon, you will be working
            either individually or in teams to create a website based on themes
            provided. So buckle up, people, and prepare to awaken the "Mark
            Zukerburg" within you and astound us with your websites.
          </p>
        </div>
      </div>
      <div className="poster">
        <div className="posterImg">
          <img src={smartdroid} alt="poster" />
        </div>
        <div className="posterAbout">
          <p>
            The feeling of creating something that is useful to a tonne of
            people and makes their lives easier is indeed a really great
            feeling. A developer surely gets this feeling as one creates an app
            and watches many users use it. An app with the most suitable
            features to please the user with utility, productivity as well as
            creativity, is one of the most cherishable tokens provided to us.
            ECS brings to you Smartdroid 3.0, a hackathon focusing on Android
            development, where you will be working either individually or in
            teams on the problem statement provided. So wake up that developer
            within you and show us your originality and creativity in this
            hackathon
          </p>
        </div>
      </div>
      <div className="poster">
        <div className="posterImg">
          <img src={ipl} alt="poster" />
        </div>
        <div className="posterAbout">
          <p>
            What’s an event without a bit of sports in it! And what better than
            cricket itself. With the IPL 2023 bringing in new teams, everyone is
            fighting tooth and nail and rooting for their favourites. Spectrum
            9.0 brings to you a new and refined form of IPL Auction. This event
            will be conducted in 2 rounds. In the first round, you will be
            scrutinised based on your knowledge about IPL through the IPL quiz.
            The qualifiers will then proceed to the second round, where the IPL
            Auction will be conducted in all its glory. What’s keeping you from
            the battle? Hurry up and register yourselves using the link given
            below:
          </p>
        </div>
      </div>
      <div className="poster">
        <div className="posterImg">
          <img src={moments} alt="poster" />
        </div>
        <div className="posterAbout">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            provident natus hic! Reiciendis voluptatum aperiam voluptatem quo,
            ab eaque enim deserunt nisi natus est officia numquam repudiandae
            quae commodi delectus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Poster;
