import React from "react";
import HeroBgAnimation from "../HeroBgAnimation";
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  SubTitle,
} from "./HeroStyle";
import Event from "../../images/Finastra-Event.jpg";
import { Bio } from "../../data/constants";

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <SubTitle>organized by</SubTitle>
            <Title>{Bio.name}</Title>
            <TextLoop>
              Reimagine Banking:
              <br /> Adapt. Evolve. Thrive.
            </TextLoop>
            <SubTitle>
              Date: {Bio.date}
              <br />
              Time: {Bio.time}
              <br />
              {Bio.location}
            </SubTitle>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <Img src={Event} alt="hero-image" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
