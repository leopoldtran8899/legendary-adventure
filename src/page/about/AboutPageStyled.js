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
  position: relative;
  scroll-snap-align: center;
  min-height: 100vh;
  @media (min-height: 30em) {
    height: 100vh;
  }
  
`;

export const StyledAboutTitle = styled.h1`
  font-family: 'Silkscreen', cursive;
  position: fixed;
  z-index: 100;
  ${props => (props.show ? RotateInAnimation : RotateOutAnimation)}
  top: 30vh;
  left: 20vw;
  max-width: 30vw;
  font-size: 1rem;
  & .about-title-main {
    color: #042940;
    background-color: #9fc131;
    box-shadow: 12px 12px 0px 0px #005c53;
    width: fit-content;
    padding: 1rem;
  }
  & .about-title-link {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    gap: 1rem;
    margin-top: 1rem;
    & .about-title-icon {
      width: 1.5rem;
      height: 1.5rem;

      &:hover {
        box-shadow: 3px 3px 0px 0px #005c53;
        cursor: pointer;
      }
    }
    & .round {
      border-radius: 100%;
    }
  }
  @media (min-width: 400px) {
    & .about-title-top {
      font-size: 1.2rem;
    }
    & .about-title-main {
      font-size: 2rem;
    }
    & .about-title-link {
      justify-content: flex-end;
      & .about-title-icon {
        width: 2.5rem;
        height: 2.5rem;
      }
    }
  }
`;

export const StyledAboutBar = styled.div`
  font-family: 'Silkscreen', cursive;
  font-weight: 600;
  visibility: hidden;
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 5vw;
  min-width: 4rem;
  z-index: 100;
  background-color: #9fc131;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  box-shadow: 12px 12px 0px 0px #005c53;
  & .about-bar-title {
    transform: translateY(-40px) rotate(-90deg);
    font-size: 1.5rem;
    color: #042940;
  }
  & .about-bar-logo {
    margin: 1rem auto;
    width: 100%;
  }
  & .about-bar-link {
    margin-top: 1rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    flex-grow: 2;
    gap: 1rem;
    & .bar-icon{
      &:last-child {
        border-radius: 100%;
      }
      &:hover {
        cursor: pointer;
        box-shadow: 3px 3px 0px 0px #005c53;
      }
    }
  }
  ${props => (props.show ? ZoomInAnimation : ZoomOutAnimation)};
  @media (min-width: 400px) {
    display: flex;
  }
`;
export const StyledSkillBox = styled.div`
  position: absolute;
  bottom: 5%;
  right: 5%;
  width: 20%;
  display: flex;
  flex-flow: row-reverse wrap;
  justify-content: flex-start;
  gap: 2vw 1vh;
  & .about-skill-icon {
    width: 2rem;
    height: 2rem;
  }
  
  @media (min-width: 376px) {
    right: 20vw;
    
    & .about-skill-icon {
      width: 3rem;
      height: 3rem;
    }
    & .about-skill-text{
      font-size: 3rem;
    }
  }
  @media (min-width: 500px) and (min-height: 700px) {
    bottom: 20vh;
  }
`;
const bounceTop = keyframes`
  0% {
    transform: translateY(-45px);
    animation-timing-function: ease-in;
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  40% {
    transform: translateY(-24px);
    animation-timing-function: ease-in;
  }
  65% {
    transform: translateY(-12px);
    animation-timing-function: ease-in;
  }
  82% {
    transform: translateY(-6px);
    animation-timing-function: ease-in;
  }
  93% {
    transform: translateY(-4px);
    animation-timing-function: ease-in;
  }
  25%,
  55%,
  75%,
  87% {
    transform: translateY(0px);
    animation-timing-function: ease-out;
  }
  100% {
    transform: translateY(0px);
    animation-timing-function: ease-out;
    opacity: 1;
  }
`
export const AboutArrowBox = styled.div`
  position: absolute;
  bottom: 2%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 35vw; /* Need a specific value to work */
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: baseline;
  font-size: 0.8rem;
  @media (min-width: 500px) and (min-height: 700px) {
    gap: 0rem 1rem;
    font-size: 1.2rem;
  }
  animation: ${bounceTop} 1.5s linear 4s infinite both;
`;

export const AboutArrow = styled.div`
`

export const ObserverHook = styled.div`
  position: relative;
  margin: 10px auto;
  visibility: hidden;
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