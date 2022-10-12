import styled from "styled-components";
import bg from '../../images/pagenotfound.svg'
export const StyledErrorPage = styled.div`
  width: ${props => props.width ? props.width : '100%'};
  height: 100vh;
  background: #fff url(${bg}) center center/contain no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #042940;
  font-size: 1.2rem;
  @media (min-width: 500px) and (min-height: 700px) {
    font-size: 3rem;
  }
`