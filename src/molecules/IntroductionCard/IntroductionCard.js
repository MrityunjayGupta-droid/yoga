import React from "react";
import Description from "../../atoms/Description/Description";
import HeadingIntro from "../../atoms/HeadingIntro/HeadingIntro";

export const IntroductionCard = ({
  IntroHeading,
  maxWidth,
  borderTop,
  paddingTop,
  textOne,
  textTow,
}) => {
  return (
    <>
      <HeadingIntro
        IntroHeading={IntroHeading}
        maxWidth={maxWidth}
        borderTop={borderTop}
        paddingTop={paddingTop}
      />
      <Description text={textOne} />
      <Description text={textTow} />
    </>
  );
};

export default IntroductionCard;
