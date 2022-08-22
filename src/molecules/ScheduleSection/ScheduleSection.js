import React, { useState } from "react";
import Heading from "../../atoms/Heading/Heading";
import ScheduleImage1 from "../../images/schedule-image-001.png";
import ScheduleImage2 from "../../images/schedule-image-002.png";

export const ScheduleSection = () => {
  const [hideSchedule, showSchedule] = useState(false);
  const [isSchedule, setIsSchedule] = useState(true);
  return (
    <>
      <section
        className="schedule-section"
        onMouseEnter={() => setIsSchedule(true)}
      >
        <Heading heading="Schedule" />

        <div className="schedule-grid">
          <div
            style={{ cursor: "pointer" }}
            onMouseEnter={() => {
              showSchedule(true);
              setIsSchedule(false);
            }}
            onMouseLeave={() => {
              showSchedule(false);
              setIsSchedule(true);
            }}
          >
            <div
              style={{
                textAlign: "center",
                fontSize: "24px",
                color: "#000000",
                fontFamily: "Mriya Grotesk",
              }}
            >
              06:00 -18:00 HRS
            </div>
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <img
                src={ScheduleImage1}
                width="230px"
                height="230px"
                alt="Schedule Image"
                layout="fill"
                quality={100}
              />
            </div>

            <div
              style={{
                textAlign: "center",
                fontSize: "24px",
                color: "#000000",
                marginTop: "40px",
                fontFamily: "Mriya Grotesk",
              }}
            >
              06:00 -18:00 HRS
            </div>
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <img
                src={ScheduleImage2}
                width="230px"
                height="230px"
                alt="Schedule Image"
                layout="fill"
                quality={100}
              />
            </div>
          </div>

          <div style={{ marginTop: "40px" }}>
            {isSchedule && (
              <div>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(() => {
                  return (
                    <div
                      style={{
                        display: "flex",
                        borderBottom: "1px dashed #000",
                        alignItems: "center",
                        padding: "2px 0",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "22px",
                          color: "gray",
                          width: "200px",
                          fontFamily: "Mriya Grotesk",
                        }}
                      >
                        5:30-6:00 am
                      </div>
                      <div
                        style={{
                          fontSize: "22px",
                          color: "#12100E",
                          fontFamily: "Mriya Grotesk",
                        }}
                      >
                        Good morning and Freshen up
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {hideSchedule && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "50px",
                }}
              >
                <div
                  style={{
                    fontSize: "32px",
                    fontFamily: "Mriya Grotesk",
                    fontWeight: "600",
                    textAlign: "center",
                    textDecoration: "underline",
                  }}
                >
                  10:00 AM - 11:00 AM
                </div>
                <div
                  style={{
                    fontSize: "24px",
                    fontFamily: "Mriya Grotesk",
                    textAlign: "center",
                    marginTop: "10px",
                  }}
                >
                  Yogic History/Yogic
                  Philosophy/Ethics/Anatomy/Physiology/Biomechanics
                </div>

                <div
                  style={{
                    textAlign: "center",
                    marginTop: "20px",
                    width: "450px",
                    height: "250px",
                    background: "#E6E6E3",
                    borderRadius: "15px",
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ScheduleSection;
