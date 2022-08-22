import React from "react";

export const HeadingIntro = ({
  color,
  IntroHeading,
  maxWidth,
  borderTop,
  paddingTop,
}) => {
  return (
    <>
      <h2
        style={{
          marginTop: "150px",
          borderTop: borderTop,
          paddingTop: paddingTop,
          marginBottom: "147px",
          textAlign: "left",
          color: color,
          fontSize: "72px",
          maxWidth: maxWidth,
          fontFamily: "Supravitally",
          fontWeight: "normal",
        }}
      >
        {IntroHeading}
      </h2>
    </>
  );
};

export default HeadingIntro;

HeadingIntro.defaultProps = {
  color: "#12100E",
  maxWidth: "520px",
};
