import React from "react";
import HeaderTop from "./molecules/HeaderTop/HeaderTop";
import Home from "./pages";
import "./App.css";

export const App = () => {
  return (
    <>
      <div className="main-page">
        <div
          style={{
            borderRight: "1px solid #12100E",
          }}
        >
          <div
            style={{
              color: "#12100E",
              transform: "matrix(0, -1, 1, 0, 0, 0)",
              fontSize: "28px",
              position: "fixed",
              top: "158px",
              left: "10px",
              fontFamily: "Mriya Grotesk",
            }}
          >
            MENU
          </div>
          <div
            style={{
              color: "#12100E",
              transform: "matrix(0, -1, 1, 0, 0, 0)",
              fontSize: "28px",
              position: "fixed",
              top: "550px",
              left: "-30px",
              fontFamily: "Mriya Grotesk",
            }}
          >
            CONTACT US
          </div>
        </div>
        <div>
          <HeaderTop />
          <Home />
        </div>
      </div>
    </>
  );
};

export default App;
