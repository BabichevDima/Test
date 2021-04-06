import React, { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";

import { Circle } from "./Circle";
import Polygon from "../../images/Polygon1.png";

export const Page = ({ page, nextSlide }) => {
  const ref = useRef();
  // Скролл колесиком мыши
  useEffect(() => {
    const el = ref.current;
    if (el) {
      const onWheel = (e) => {
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY * 4,
          behavior: "smooth",
        });
      };
      el.addEventListener("wheel", onWheel);

      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  // Скролл колесиком мыши

  const [value, setValue] = useState(2048);

  const nextPage = (value) => {
    window.scrollBy(value, 0);
    changeValue(value);
  };

  const changeValue = (value) => {
    setValue(value);
    console.log(`value = ${value}`);
  };

  return (
    <>
      {page.slider ? (
        <HeaderWrapper ref={ref}>
          {page.slider
            .map((page, index) => {
              return (
                <Container page={page}>
                  <Title>{page.title}</Title>
                </Container>
              );
            })
            .reverse()}

          <Container page={page}>
            <Title>{page.title}</Title>
          </Container>

          <Wrapper>
            <Slid
              type="range"
              min="0"
              max="2048"
              value={value}
              className="slider"
              id="myRange"
              onChange={(e) => {
                nextPage(e.target.value);
              }}
            ></Slid>
            <Season>
              <div>1988</div>
              <div>2009</div>
              <div>2016</div>
            </Season>
            <div>{value}</div>
          </Wrapper>
        </HeaderWrapper>
      ) : (
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

          <Text onClick={nextSlide}>Листайте вниз</Text>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  background-image: url(${({ page }) => page.image});
  margin: auto;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 768px;
  min-width: 1024px;
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

const Wrapper = styled.div`
  text-align: center;
  width: 500px;
  position: fixed;
  z-index: 1;
  left: 30%;
  bottom: 100px;
  display: flex;
  flex-direction: column;
  color: #fff;
`;

const Season = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Slid = styled.input`
  -webkit-appearance: none;
  height: 20px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
  &:-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border: 0;
    background: url(${Polygon});
    cursor: pointer;
  }
  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border: 0;
    background-image: url(${Polygon});
    cursor: pointer;
  }
`;

const HeaderWrapper = styled.div`
  min-width: 1024px;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
`;
