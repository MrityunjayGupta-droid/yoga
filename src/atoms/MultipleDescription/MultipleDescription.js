import React from "react";

export const MultipleDescription = ({
  oneText,
  twoText,
  oneColor,
  towColor,
}) => {
  return (
    <>
      <p
        style={{
          fontSize: "28px",
          fontFamily: "Mriya Grotesk",
          textAlign: "left",
          marginTop: "0px",
          marginBottom: "30px",
          //   color: "#12100E"
        }}
      >
        <span style={{ color: oneColor }}>{oneText}</span>{" "}
        <span style={{ color: towColor }}>{twoText}</span>
      </p>
    </>
  );
};

export default MultipleDescription;
