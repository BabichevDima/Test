import React from "react";
import styled from "@emotion/styled";

export const Circle = ({ text, sizeRound, positionBlok, flexDirection }) => {
  return (
    <Container positionBlok={positionBlok} flexDirection={flexDirection}>
      <Round sizeRound={sizeRound}></Round>
      <Description>{text}</Description>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: ${({ positionBlok }) => positionBlok.top}px;
  left: ${({ positionBlok }) => positionBlok.left}px;
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  align-items: center;
`;

const Round = styled.div`
  border: 1px solid red;
  height: ${({ sizeRound }) => sizeRound.height}px;
  width: ${({ sizeRound }) => sizeRound.width}px;
  border-radius: 100%;
  background: radial-gradient(#59afff, #41f2ff);
  animation: pulsing 1s infinite;
  @keyframes pulsing {
    0% {
      transform: scale(0, 0);
    }
    50% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(0, 0);
    }
  }
`;

const Description = styled.div`
  font-size: 37.455px;
  font-family: "Myriad Pro";
  line-height: 1.2;
`;
