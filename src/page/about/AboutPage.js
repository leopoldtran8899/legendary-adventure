import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { AboutContainer, AboutSection } from './AboutPageStyled'

export default class AboutPage extends Component {

  render() {
    return (
      <AboutContainer>
        <AboutSection id='about-section-1'>
          Section 1
        </AboutSection>
        <AboutSection id='about-section-2'>
          Section 2
        </AboutSection>
        <AboutSection id='about-section-3'>
          Section 3
        </AboutSection>
      </AboutContainer>
    )
  }
}
