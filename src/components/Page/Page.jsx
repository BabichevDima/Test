import React from "react";
import styled from "@emotion/styled";

import { Circle } from "./Circle";
import { Slider } from "./Slider";

export const Page = ({ page, nextSlide }) => {
  return (
    <Container page={page}>
      <Title>{page.title}</Title>
      {page.circles
        ? page.circles.map(
            ({ text, id, sizeRound, positionBlok, flexDirection }) => {
              return (
                <Circle
                  key={id}
                  text={text}
                  sizeRound={sizeRound}
                  positionBlok={positionBlok}
                  flexDirection={flexDirection}
                />
              );
            }
          )
        : null}

      {/* {page.id === 3 ? <Slider /> : null} */}

      <Slider id={page.id} page={page} />

      {/* {page.id === 3
        ? page.slider.map(({ name }) => {
            return <div>{name}</div>;
          })
        : null} */}

      {!(page.id === 3) ? <Text onClick={nextSlide}>Листайте вниз</Text> : null}
    </Container>
  );
};

const Container = styled.div`
  background-image: url(${({ page }) => page.image});
  margin: auto;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  position: relative;
  scroll-behavior: smooth;
  color: ${({ page }) => page.colorText};
`;

const Title = styled.div`
  font-size: 47.757px;
  font-family: "Myriad Pro";

  line-height: 1.2;
  padding: 125px 100px;
`;

const Text = styled.div`
  font-size: 20px;
  font-family: "Myriad Pro";
  color: #fff;
  text-align: center;
  position: absolute;
  bottom: 50px;
  left: 500px;
  &::before {
    content: "";
    border: solid #fff;
    border-width: 2px 20px 0px 3px;
    display: inline-block;
    transform: rotate(-45deg);
    position: absolute;
    top: 40px;
    left: 60px;
  }
  &::after {
    content: "";
    border: solid #fff;
    border-width: 2px 20px 0px 3px;
    display: inline-block;
    transform: rotate(45deg);
    position: absolute;
    top: 40px;
    left: 44px;
  }
`;
