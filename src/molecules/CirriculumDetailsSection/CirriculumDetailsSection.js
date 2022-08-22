import React from "react";
import MemoSentiayogaIcon from "../../assets/icons/SentiayogaIcon";
import Description from "../../atoms/Description/Description";
import Heading from "../../atoms/Heading/Heading";
import MultipleDescription from "../../atoms/MultipleDescription/MultipleDescription";
import CirriculumImage from "../../images/cirriculum-image.png";
import Accordion from "../Accordion/Accordion";

export const CirriculumDetailsSection = () => {
  return (
    <>
      <section>
        <Heading
          heading="Cirriculum Details"
          isText
          textOne="।।समत्वं योग उच्यते।।"
          textTwo="Samatvaṁ Yoga Uchyate"
          textThree="Evenness of Mind is known as Yoga."
        />

        <div className="cirriculum-section">
          <div>
            <div style={{ marginLeft: "-58px" }}>
              <MemoSentiayogaIcon width="60" height="60" color="#3B5343" />
            </div>
            <div style={{ marginTop: "-10px" }}>
              <img
                src={CirriculumImage}
                width="100%"
                height={270}
                alt="Cirriculum Image"
              />
            </div>

            {/* accordion call */}
            <Accordion />
          </div>
          <div>
            <div style={{ marginLeft: "-62px", marginTop: "80px" }}>
              <MemoSentiayogaIcon width="60" height="60" color="#E31F33" />
            </div>
            <Description text="Upon learning that Yoga Alliance is updating the curriculum of 200 hours YTTC after 20 years, in 2018! Team Kashish was thrilled to study each update & understand its reasoning & purpose in relation to the ancient as well as the modern world. We were absolutely electrified mapping the various surveys & feedback, Yoga leader thoughts, Yoga festivals, & symposiums that went into the making of this new dynamic state of body science and in-depth curriculum for Yoga enthusiasts." />
            <MultipleDescription
              oneText="Our team spent 4 months understanding the guidelines word by word
          & designing the most updated & helpful version of Yoga teacher
          training for our students."
              twoText="We have introduced the new curriculum with
          interesting activities & sessions to make your YTTC journey the most
          unique and enriching. At Kashish, our aim is to constantly upgrade the
          magical spell of Yoga to keep our family a step ahead, always!"
              oneColor="#CE3A3A"
              towColor="#12100E"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CirriculumDetailsSection;
