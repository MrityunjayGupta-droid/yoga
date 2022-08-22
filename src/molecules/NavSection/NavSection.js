import React from "react";
import ReactPlayer from "react-player";

const NAVDATA = [
  { text: "Introduction", borderRight: "1px solid #999999" },
  { text: "Curriculum Details", borderRight: "1px solid #999999" },
  { text: "Teachers", borderRight: "1px solid #999999" },
  { text: "Certification", borderRight: "1px solid #999999" },
  { text: "Schedule", borderRight: "1px solid #999999" },
  { text: "Course Dates", borderRight: "1px solid #999999" },
  { text: "Accomodation" },
];

export const NavSection = () => {
  return (
    <>
      <div className="nav-link">
        {NAVDATA.map((item) => {
          return (
            <div
              style={{
                padding: "18px 10px",
                textAlign: "center",
                borderRight: item.borderRight,
                // borderRight: "1px solid #999999",
                fontSize: "20px",
                color: "#12100E",
              }}
            >
              {item.text}
            </div>
          );
        })}
      </div>

      <div
        style={{
          marginTop: "70px",
          //   marginBottom: "70px",
        }}
      >
        <ReactPlayer
          playerVars
          //   light="../../images/thum-image.png"
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          width="100%"
          height="600px"
        />
      </div>
    </>
  );
};

export default NavSection;
