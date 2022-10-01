import styled from "styled-components";

export const StyledCircuit = styled.svg`
  position: absolute;
  top: 20vh;
  left: 25vw;
  max-width: 50vw;
  text.circuit-group-1:hover {
    fill: #DBF227;
    cursor: pointer;
    & ~ .circuit-group-5 {
      fill: #DBF227;
    }
    & ~ g g path.circuit-group-1.circuit-line {
      fill: #DBF227;
    }
    & ~ g g path.circuit-group-1.circuit-point {
      fill: #9FC131;
    }
  }
    text.circuit-group-2:hover {
    fill: #DBF227;
    cursor: pointer;
    & ~ .circuit-group-5 {
      fill: #DBF227;
    }
    & ~ g g path.circuit-group-2.circuit-line {
      fill: #DBF227;
    }
    & ~ g g path.circuit-group-2.circuit-point {
      fill: #9FC131;
    }
  }
  text.circuit-group-3:hover {
    fill: #DBF227;
    cursor: pointer;
    & ~ g g path.circuit-group-3.circuit-line {
      fill: #DBF227;
    }
    & ~ g g path.circuit-group-3.circuit-point {
      fill: #9FC131;
    }
  }
  /* text.circuit-group-4:hover {
    fill: #DBF227;
    cursor: pointer;
    & ~ .circuit-group-5 {
      fill: #DBF227;
    }
    & ~ g g path.circuit-group-4.circuit-line {
      fill: #DBF227;
    }
    & ~ g g path.circuit-group-4.circuit-point {
      fill: #9FC131;
    }
  } */
`

export const StyledCircuitContainer = styled.div`
  position: relative;
  /* max-width: 800px; */
  min-width: 400px;
  width: 100%;
  margin: 0;
  border: 2px solid black;
  display: block;
`
export const StyledLabel = styled.div`
  position: absolute;
  min-width: 100px;
  &#lb_1 {
    left: 30vw;
    font-size: 2rem;
  }
`

