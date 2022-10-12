import styled from "styled-components";

export const StyledProjectItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem 1rem;
  font-size: 1rem;
  text-align: justify;
  :hover {
    color: #9fc131;
    .project-item-title {
      color: #DBF227;
    }
  }
  .project-item-title {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    font-size: 1.2rem;
    font-weight: 700;
    color: #9fc131;
  }
  .project-item-tech {
    display: flex;
    flex-flow: row wrap;
    gap: 0 1rem;
    justify-content: flex-end;
  }
  .project-item-links {
    justify-content: flex-start;
    :hover {
      cursor: pointer;
    }
  }
  .tech-icon {
    width: 2rem;
  }
`;