import styled from "styled-components";

export const AboutContainer = styled.div`
  height: 100vh;
  overflow-y: scroll;
  width: 100%;
  @media (min-height: 30em) {
    scroll-snap-type: y mandatory;
    /* height: 100vh;
    overflow-y: scroll; */
  }
  background-color: brown;
`;
export const AboutSection = styled.section`
  color: white;
  position: relative;
  scroll-snap-align: center;
  display: flex;
  min-height: 100vh;
  @media (min-height: 30em) {
    height: 100vh;
  }
`;