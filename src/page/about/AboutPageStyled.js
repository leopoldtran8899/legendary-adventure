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
`;
export const StyledAboutSection = styled.section`
  color: white;
  position: relative;
  scroll-snap-align: center;
  display: flex;
  min-height: 100vh;
  @media (min-height: 30em) {
    height: 100vh;
  }
  
`;

export const StyledAboutTitle = styled.h1`
  position: fixed;
  z-index: 100;
  ${props => (props.show ? RotateInAnimation : RotateOutAnimation)}
  top: 30vh;
  left: 20vw;
  max-width: 30vw;
  font-size: 1rem;
  text-align: justify;
  & div:first-child {
    font-size: 2rem;
    color: yellow;
  }
`;

export const StyledAboutBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 5vw;
  min-width: 20px;
  z-index: 100;
  background-color: gold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  & div:first-child {
    transform: translateY(-40px) rotate(-90deg);
    font-size: 1.2rem;
  }
  ${props => props.show ? ZoomInAnimation : ZoomOutAnimation};
`


export const ObserverHook = styled.div`
  position: relative;
  margin: 10px auto;
  visibility: hidden;
`
export const Avatar = styled.div`
  width: 4rem;
  height: 4rem;
  border: 1px solid black;
  border-radius: 100px;
  margin-bottom: 2rem;
`

// Keyframs
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
const zoomIn = keyframes`
  0% {
		opacity: 0;
		transform: translateX(250px);
	}

	100% {
		opacity: 1;
		transform: translateX(0);
    visibility: visible;
	}
`
const zoomOut = keyframes`
  0% {
		opacity: 1;
		transform: translateX(0);
	}

	100% {
		opacity: 0;
		transform: translateX(250px);
    visibility: hidden;
	}
`
// Animation
const RotateInAnimation = css`
  animation: ${rotateIn} 0.8s linear 1 normal forwards;
`;

const RotateOutAnimation = css`
  animation: ${rotateOut} 0.8s linear 1 normal forwards;
`
const ZoomInAnimation = css`
  animation: ${zoomIn} 0.8s linear 1 normal forwards;
`;

const ZoomOutAnimation = css`
  animation: ${zoomOut} 0.8s linear 1 normal forwards;
`