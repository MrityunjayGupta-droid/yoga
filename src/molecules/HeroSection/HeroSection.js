import React from "react";
import ReactPlayer from "react-player";
import RysCard from "../RysCard/RysCard";
import YogaIcon1 from "../../images/yoga-icon-001.svg";
import SimpleSentiayogaIcon from "../../images/simple-sentiayoga-icon.svg";
import MetroEarthIcon from "../../images/metro-earth-icon.svg";
import Yoga1 from "../../images/yoga-001.png";
import "../../WebFonts/stylesheet.css";
export const HeroSection = () => {
  return (
    <>
      <section style={{ padding: "0px 102px" }}>
        <h1
          style={{
            color: "#12100E",
            fontFamily: "Supravitally",
            fontSize: "100px",
            textAlign: "center",
            marginTop: "10px",
            marginBottom: "95px",
            fontWeight: "normal",
          }}
        >
          200 Hour Multi-Style Yoga Teacher Training Course
        </h1>

        <div className="video-section">
          <div>
            <RysCard
              background="#FACB27"
              padding="28px 35px 21px 32px"
              marginBottom="24px"
              paddingRight="20px"
              marginTop="28px"
              text="Kashish Yoga is a Registered Yoga School (RYS) with Yoga Alliance International"
              src={YogaIcon1}
              width={58}
              height={64}
            />
            <ReactPlayer
              playerVars
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
              width="100%"
              height="232px"
            />
          </div>

          <div>
            <ReactPlayer
              playerVars
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
              width="100%"
              height="300px"
            />
            <RysCard
              background="#FD8105"
              padding="11px 24px 10px 20px"
              marginTopBox="24px"
              paddingRight="5px"
              marginTop="16px"
              text="We provide a  multi-style yoga experience and knowledge"
              src={SimpleSentiayogaIcon}
              width={60}
              height={60}
            />
          </div>

          <div>
            <RysCard
              background="#3B5343"
              padding="23px 35px 10px 29px"
              marginBottom="24px"
              paddingRight="50px"
              marginTop="18px"
              color="#F5F5F5"
              text="A student accredited from our school can teach yoga worldwide"
              src={MetroEarthIcon}
              width={60}
              height={60}
            />

            <div>
              <img
                src={Yoga1}
                width="100%"
                height="288px"
                alt="Yoga"
                layout="fill"
                quality={100}
                // objectFit="contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
