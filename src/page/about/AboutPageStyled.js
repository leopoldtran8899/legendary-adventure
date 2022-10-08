import styled, { keyframes, css } from "styled-components";

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
const rotateOut = keyframes`
  from {
    opacity: 1;
		transform: translateX(0) rotate(0deg);
  }

  to {
    opacity: 0;
		transform: translateX(-400px) rotate(-200deg);
    visibility: hidden;
  }
`;
const rotateIn = keyframes`
from {
    opacity: 0;
		transform: translateX(-400px) rotate(-200deg);
  }

  to {
    opacity: 1;
		transform: translateX(0) rotate(0deg);
    visibility: visible;
  }
`
export const StyledAboutTitle = styled.h1`
  position: fixed;
  color: yellow;
  z-index: 100;
  /* ${props => props.show ? DisplayIn : MoveOut} */
  /* animation: ${props => props.position == 'normal'} */

  font-size: 2rem;
  top: 30vh;
  left: 20vw;
`;

const DisplayIn = css`
  animation: ${rotateIn} 1s linear 1 normal forwards;
`;

const MoveOut = css`
  animation: ${rotateOut} 1s linear 1 normal forwards;
`