import styled from "styled-components";
import bg from '../../images/underconstruction.svg'
export const StyledInprogress = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  background: #fff url(${bg}) center center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #042940;
  font-size: 1.2rem;
  @media (min-width: 500px) and (min-height: 700px) {
    font-size: 3rem;
  }
`