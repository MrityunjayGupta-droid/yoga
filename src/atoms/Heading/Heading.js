import React from "react";
import HeadingLine from "../../images/heading-line.svg";

export const Heading = ({
  heading,
  color,
  textAlign,
  textOne,
  textTwo,
  textThree,
  isText,
}) => {
  return (
    <>
      <h2
        style={{
          marginTop: "40px",
          marginBottom: "3px",
          textAlign: textAlign,
          color: color,
          fontSize: "100px",
          fontFamily: "Supravitally",
          fontWeight: "normal",
        }}
      >
        {heading}
      </h2>

      <div style={{ textAlign: "center", marginBottom: "16px" }}>
        <img src={HeadingLine} width={432} height={24} alt="Heading Line" />
      </div>

      {isText && (
        <>
          <p
            style={{
              textAlign: "center",
              color: "#936822",
              fontSize: "24px",
              fontFamily: "Mriya Grotesk",
              margin: "0px",
            }}
          >
            {textOne}
          </p>
          <p
            style={{
              textAlign: "center",
              color: "#936822",
              fontSize: "18px",
              fontFamily: "Mriya Grotesk",
              margin: "5px 0 0 0",
            }}
          >
            {textTwo}
          </p>
          <p
            style={{
              textAlign: "center",
              color: "#64615FFD",
              fontSize: "21px",
              fontFamily: "Mriya Grotesk",
              margin: "5px 0 0 0",
            }}
          >
            {textThree}
          </p>
        </>
      )}
    </>
  );
};

export default Heading;

Heading.defaultProps = {
  color: "#12100E",
  textAlign: "center",
};
