import React from "react";
import styled from "@emotion/styled";

export const NewPage = ({ title, image }) => {
  return (
    <Container image={image}>
      <Title>{title}</Title>
    </Container>
  );
};

const Container = styled.div`
  margin: auto;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  position: relative;
  scroll-behavior: smooth;
  color: #fff;
`;

const Title = styled.div`
  font-size: 47.757px;
  font-family: "Myriad Pro";

  line-height: 1.2;
  padding: 125px 100px;
`;

// useEffect(() => {
//   if (value < 25) {
//     return setValue(0);
//   } else if (value >= 25 && value < 75) {
//     return setValue(50);
//   } else {
//     return setValue(100);
//   }
// }, []);
