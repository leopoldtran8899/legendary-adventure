import styled from "styled-components";

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
  & #about-section-1 {
    background-color: yellow;
  }
`;
export const StyledAboutTitle = styled.h1`
  position: fixed;
  ${StyledAboutSection}:hover & {
    color: white;
  }
`