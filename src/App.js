import { useState } from "react";
import { Page } from "./components/Page";
import styled from "@emotion/styled";

import { date } from "./components/State/State";

// const nextPage = () => window.scrollBy(0, 768);

export const App = () => {
  const [current, setCurrent] = useState(0);
  const length = date.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 2 : current + 1);
  };

  console.log(current);

  return (
    <Section>
      {/* <Button onClick={nextPage}>прокрутка</Button> */}

      {date.map(({ page }, index) => {
        return (
          <Wrapper key={page.id}>
            {/* <Page page={page}></Page> */}
            {index === current && (
              <Page key={page.id} page={page} nextSlide={nextSlide}></Page>
            )}
          </Wrapper>
        );
      })}

      <SectionButton>
        {date.map(({ page }, index) => {
          return (
            <RoundButton
              key={page.id}
              isActive={index === current}
              onClick={() => {
                setCurrent(index);
              }}
            ></RoundButton>
          );
        })}
      </SectionButton>
    </Section>
  );
};

const Section = styled.div`
  position: relative;
  max-width: 1024px;
  /* overflow-x: scroll; */
  margin: auto;
`;

const SectionButton = styled.div`
  position: fixed;
  top: 200px;
  right: 50px;
  z-index: 1;
`;

const Button = styled.button`
  position: fixed;
  top: 100px;
  left: 100px;
  z-index: 1;
  cursor: pointer;
  user-select: none;
`;

const RoundButton = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${({ isActive }) => (isActive ? "grey" : "#fff")};
  border-radius: 50%;
  margin: 5px 5px;
  &:hover {
    background-color: grey;
    cursor: pointer;
  }
`;

const Wrapper = styled.div`

`;
