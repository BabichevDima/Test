import React, { useState } from "react";
import styled from "@emotion/styled";

// import { NewPage } from "../NewPage";
import Polygon from "../../../src/images/Polygon1.png";

export const Slider = ({ id, page }) => {
  const [value, setValue] = useState(0);

  const changeValue = (value) => {
    // if (value < 25) {
    //   return setValue(0);
    // } else if (value >= 25 && value < 75) {
    //   return setValue(50);
    // } else {
    //   return setValue(100);
    // }
    setValue(value);
  };

  return (
    <>
      {id === 3 ? (
        <>
          {/* <Wrapper>
            <button>left</button>
            {page.slider.map(({ title, image }, index) => {
              return (
                <div>
                  {index === value && <NewPage title={title} image={image} />}
                </div>
              );
            })}
          </Wrapper> */}

          <Container>
            <Slid
              type="range"
              // min="0"
              // max="100"
              min="0"
              max="2"
              value={value}
              className="slider"
              id="myRange"
              onChange={(e) => changeValue(e.target.value)}
            ></Slid>
            <Season>
              <div>1988</div>
              <div>2009</div>
              <div>2016</div>
            </Season>
            <div>{value}</div>
          </Container>
        </>
      ) : null}

      {/* {id === 3
        ? page.slider.map(({ title }) => {
            return <NewPage title={title} />;
          })
        : null} */}
    </>
  );
};

const Container = styled.div`
  text-align: center;
  width: 50%;
  position: absolute;
  left: 30%;
  bottom: 100px;
  display: flex;
  flex-direction: column;
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

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
