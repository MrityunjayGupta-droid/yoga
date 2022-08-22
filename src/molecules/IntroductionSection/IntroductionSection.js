import React from "react";
import IntroductionCard from "../IntroductionCard/IntroductionCard";
import IntroductionImage001 from "../../images/introduction-image-001.png";
import IntroductionImage002 from "../../images/introduction-image-002.png";
import IntroductionImage003 from "../../images/introduction-image-003.png";
import IntroductionImage004 from "../../images/introduction-image-004.png";
import IntroductionImage005 from "../../images/introduction-image-005.png";
import IntroductionImage006 from "../../images/introduction-image-006.png";

const IntroCardData = [
  {
    IntroHeading: "Batch of maximum 25 Students (Limited Seats)",
    textOne:
      "If you choose us, we promise to choose you back! Yes, we will only accept 25 students per batch. We value your time, zeal, & expectations of travelling to the land of Yoga & at any cost we do not want that compromised.",
    textTow:
      "Hence, this decision assures proper attention by our Gurus to each student with detailed demonstration, analysis & feedback, doubt-clearing, posture correction, & community building.",
  },

  {
    IntroHeading: "Become A Certified Yoga Teacher In Just 21 Days",
    maxWidth: "550px",
    borderTop: "1px solid #707070",
    paddingTop: "110px",
    textOne:
      "If you choose us, we promise to choose you back! Yes, we will only accept 25 students per batch. We value your time, zeal, & expectations of travelling to the land of Yoga & at any cost we do not want that compromised.",
    textTow:
      "Hence, this decision assures proper attention by our Gurus to each student with detailed demonstration, analysis & feedback, doubt-clearing, posture correction, & community building.",
  },
  {
    IntroHeading: "Learning Begins The Moment You Enroll",
    maxWidth: "600px",
    borderTop: "1px solid #707070",
    paddingTop: "110px",
    textOne:
      "Join us Kashishians, for an adventure that is immensely powerful! This journey requires you to enter with the right state of mind & body. We take it as our duty to make your path as smooth as possible and to help you prepare, you are provided with Asanas & academic lessons the moment you enrol with us.",
    textTow:
      "This will help you utilise each day to its very best, ease the journey, & prevent the arrival swamp!",
  },

  {
    IntroHeading: "Extraordinary Multi-Style Exposure in 1 course",
    maxWidth: "600px",
    borderTop: "1px solid #707070",
    paddingTop: "110px",
    textOne:
      "In this 1 journey you get to experience 6 forms of Yoga practices! 200 hours is the foundation & it is crucial to gain correct exposure. So why settle with just Hatha & Ashtanga? With us, you explore Vinyasa, Yin, Aerial, and Acro too!",
    textTow:
      "Kashish is the only school to offer such diverse styles, we believe something as soul- enriching as Yoga should not feel forced but what body naturally calls for! So dive into each & find your natural calling.",
  },
];

export const IntroductionSection = () => {
  return (
    <>
      <section
        className="intro-section"
        style={{ padding: "70px 33px 50px 102px" }}
      >
        <div>
          {IntroCardData.map((item, index) => {
            return (
              <IntroductionCard
                key={index}
                IntroHeading={item?.IntroHeading}
                maxWidth={item?.maxWidth}
                borderTop={item?.borderTop}
                paddingTop={item?.paddingTop}
                // borderTop: "1px solid #707070",
                // paddingTop: "110px",
                textOne={item?.textOne}
                textTow={item?.textTow}
              />
            );
          })}
        </div>
        <div className="sticky-align">
          <div>
            <img
              src={IntroductionImage001}
              width={603}
              height={233}
              alt="Introduction Image"
            />
          </div>
          <div
            style={{
              display: "flex",
              gridGap: "20px",
              alignItems: "baseline",
              marginTop: "-80px",
              marginLeft: "-40px",
            }}
          >
            <div>
              <img
                src={IntroductionImage002}
                width={255}
                height={331}
                alt="Introduction Image"
              />
            </div>
            <div>
              <img
                src={IntroductionImage003}
                width={297}
                height={224}
                alt="Introduction Image"
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gridGap: "20px",
              alignItems: "stretch",
              marginTop: "30px",
              marginLeft: "-40px",
            }}
          >
            <div>
              <img
                src={IntroductionImage004}
                width={297}
                height={224}
                alt="Introduction Image"
              />
            </div>
            <div>
              <img
                src={IntroductionImage005}
                width={255}
                height={306}
                alt="Introduction Image"
              />
            </div>
          </div>

          <div>
            <img
              src={IntroductionImage006}
              width={573}
              height={209}
              alt="Introduction Image"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroductionSection;
