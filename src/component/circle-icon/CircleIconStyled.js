import styled from "styled-components";

export const StyledCircleIcon = styled.div`
  width: ${props => props.size || '100%'};
  height: ${props => props.size || '100%'};
  margin: 0 auto;
  border: ${props => `${props.border} solid ${props.color}`};
  background-color: ${props => props.background};
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  & :first-child{
  }
`