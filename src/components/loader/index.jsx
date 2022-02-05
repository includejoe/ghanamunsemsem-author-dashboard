import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpinContainer = styled.div`
  position: relative;
`;

const Spinner = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 12px solid ${({ theme }) => theme.color.faint};
  border-top-color: ${({ theme }) => theme.color.primary};
  animation: ${spin} 1s infinite;
  padding: auto;
`;

// const Alphabet = styled.div`
//   width: 35px;
//   height: 35px;
//   border-radius: 50%;
//   border: none;
//   color: #fff;
//   font-family: "DM Sans", sans-serif;
//   font-weight: 700;
//   font-size: 23px;
//   background: ${theme.primaryColor};
//   text-align: center;
//   padding: auto;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   transform: rotate(325deg);
//   position: absolute;
//   top: 34%;
//   left: 33%;
//   z-index: 99;
// `;

export default function Loader() {
  return (
    <Container>
      <SpinContainer>
        <Spinner></Spinner>
        {/* <Alphabet className="alpha">J</Alphabet> */}
      </SpinContainer>
    </Container>
  );
}
