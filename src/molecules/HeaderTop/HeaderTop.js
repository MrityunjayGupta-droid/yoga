import React from "react";
import KashishYogaLogo from "../../images/kashish-yoga-logo.svg";

export const HeaderTop = () => {
  return (
    <>
      <header style={{ padding: "0px 102px" }}>
        {/* position: "fixed" */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ marginLeft: "-20px" }}>
            <img
              src={KashishYogaLogo}
              width={300}
              height={189}
              alt="Kashish Yoga Logo"
            />
          </div>
          <div style={{ marginRight: "-30px" }}>
            <button
              style={{
                border: "1px solid #000000",
                background: "#FACB27",
                borderRadius: "10px",
                width: "313px",
                height: "67px",
                textAlign: "center",
                fontSize: "28px",
                color: "#12100E",
                cursor: "pointer",
                fontFamily: "Mriya Grotesk",
              }}
            >
              REGISTER NOW
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderTop;
