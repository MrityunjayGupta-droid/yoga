import React, { useState } from "react";
import MemoSentiayogaIcon from "../../assets/icons/SentiayogaIcon";

const AccordionData = [
  {
    question: "Techniques, Training & Practice",
    color: "#3B5343",
    answer: "1. Asana",
    answerListA: "a. Styles",
    answerListTilde: "~ Hatha Yoga - Practice & Sequencing",
  },
  {
    question: "Anatomy & Physiology",
    color: "#C7B375",
    answer: "1. Asana",
    answerListA: "a. Styles",
    answerListTilde: "~ Hatha Yoga - Practice & Sequencing",
  },
  {
    question: "Yoga Humanities",
    color: "#FACB27",
    answer: "1. Asana",
    answerListA: "a. Styles",
    answerListTilde: "~ Hatha Yoga - Practice & Sequencing",
  },
  {
    question: "Professional Essentials",
    color: "#FD8105",
    answer: "1. Asana",
    answerListA: "a. Styles",
    answerListTilde: "~ Hatha Yoga - Practice & Sequencing",
  },
];

export const Accordion = () => {
  const [isActive, setActive] = useState(false);

  const toggle = (index) => {
    if (isActive === index) {
      return setActive(null);
    }
    setActive(index);
  };

  return (
    <>
      {AccordionData.map((items, index) => {
        return (
          <div className="accordion-item" key={index}>
            <div
              style={{
                display: "flex",
                borderBottom: "2px dashed #000",
                paddingBottom: "30px",
              }}
              className="accordion-title"
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div style={{ marginTop: "8px", marginRight: "20px" }}>
                    <MemoSentiayogaIcon
                      width="28px"
                      height="28px"
                      color={items?.color}
                    />
                  </div>
                  <div
                    style={{
                      fontSize: "40px",
                      color: "#12100E",
                      fontFamily: "Supravitally",
                      width: "500px",
                      cursor: "pointer",
                    }}
                  >
                    {items?.question}
                  </div>
                  <div
                    style={{
                      fontSize: "50px",
                      fontWeight: "400",
                      fontFamily: "Mriya Grotesk",
                      color: "#12100E",
                      cursor: "pointer",
                    }}
                    onClick={() => toggle(index)}
                  >
                    {isActive === index ? "-" : "+"}
                  </div>
                </div>

                {isActive === index ? (
                  <div>
                    {[0, 1].map(() => {
                      return (
                        <>
                          <div
                            style={{
                              fontSize: "30px",
                              color: "#12100E",
                              marginTop: "20px",
                              marginLeft: "48px",
                              fontFamily: "Mriya Grotesk",
                            }}
                          >
                            {items?.answer}
                          </div>
                          <div
                            style={{
                              fontSize: "24px",
                              color: "#12100E",
                              marginTop: "2px",
                              marginLeft: "78px",
                              fontFamily: "Mriya Grotesk",
                            }}
                          >
                            {items?.answerListA}
                          </div>
                          <div
                            style={{
                              fontSize: "24px",
                              color: "#12100E",
                              marginTop: "2px",
                              marginLeft: "90px",
                              fontFamily: "Mriya Grotesk",
                            }}
                          >
                            {items?.answerListTilde}
                          </div>
                        </>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Accordion;
