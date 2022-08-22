import React from "react";

export const Description = ({ text }) => {
  return (
    <>
      <p
        style={{
          fontSize: "28px",
          fontFamily: "Mriya Grotesk",
          color: "#12100E",
          textAlign: "left",
          marginTop: "0px",
          marginBottom: "30px",
        }}
      >
        {text}
      </p>
    </>
  );
};

export default Description;
