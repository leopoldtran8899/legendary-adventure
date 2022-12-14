import styled from "styled-components";

export const StyledProjectListContainer = styled.div`
  max-height: 80vh;
  min-height: 40vh;
  /* overflow-y: auto; */
  ::-webkit-scrollbar {
    display: none;
  }
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
`;
export const StyledProjectListTitle = styled.div`
  position: sticky;
  top: 0;
  font-family: 'Silkscreen', cursive;
  font-size: 1.6rem;
  color: #9FC131;
  padding-bottom: 1rem;
  border-bottom: 0.4rem solid #9FC131;
  margin-bottom: 1rem;
  @media (min-width: 500px) and (min-height: 700px) {
    font-size: 2rem;
  }
`
export const StyledProjectList = styled.div`
  display:flex ;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem 0rem;
`