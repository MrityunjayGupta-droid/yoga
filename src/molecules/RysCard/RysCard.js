import React from "react";

export const RysCard = ({
  background,
  padding,
  marginBottom,
  marginTopBox,
  paddingRight,
  marginTop,
  text,
  color,
  src,
  width,
  height,
}) => {
  return (
    <>
      <div
        style={{
          background: background,
          padding: padding,
          borderRadius: "10px",
          marginBottom: marginBottom,
          marginTop: marginTopBox,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "top",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              color: color,
              fontSize: "24px",
              fontFamily: "Mriya Grotesk",
              paddingRight: paddingRight,
              marginTop: marginTop,
            }}
          >
            {text}
          </div>
          <div>
            <img src={src} width={width} height={height} alt="Yoga Icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default RysCard;

RysCard.defaultProps = {
  color: "#12100E",
};
