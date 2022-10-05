import styled, { keyframes } from "styled-components";

export const StyledAboutContainer = styled.div`
  height: 100vh;
  scroll-behavior: smooth;
  overflow-y: scroll;
  width: 100%;
  @media (min-height: 30em) {
    scroll-snap-type: y mandatory;
    /* height: 100vh;
    overflow-y: scroll; */
  }
  background-color: brown;
`;
export const StyledAboutSection = styled.section`
  color: white;
  position: relative;
  scroll-snap-align: center;
  display: flex;
  min-height: 100vh;
  background-color: green;
  @media (min-height: 30em) {
    height: 100vh;
  }
  
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
export const StyledAboutTitle = styled.h1`
  position: fixed;
  color: yellow;
  border: 1px solid yellow;
  z-index: 100;
  /* animation: ${rotate} 2s linear infinite; */
  ${props => props.position === 'normal' ? TitleFront: TitleLeft}
  /* animation: ${props => props.position == 'normal'} */

  font-size: 2rem;
  top: 30vh;
  left: 20vw;
`;

const TitleFront = `
  top: 30vh;
  left: 20vw;
  font-size: 2rem;
`;

const TitleLeft = `
  transform: rotate(-90deg);
  left: 1vw;
  bottom: 10px;

`