import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { CircuitSVG } from './Circuit'
import { StyledCircuitContainer, StyledLabel } from './StyledLandingPage';

export default class LandingPage extends Component {

  handleMouseHover = (e) => {

  }
  render() {
    return (
      <StyledCircuitContainer>
        <CircuitSVG/>
      </StyledCircuitContainer>
    );
  }
}
