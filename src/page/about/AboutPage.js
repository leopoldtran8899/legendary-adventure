import PropTypes from 'prop-types'
import React, { Component } from 'react'
import  IntersectionVisible  from '../../component/intersection-observer/IntersectionObserver'
import { StyledAboutContainer, StyledAboutSection, StyledAboutTitle } from './AboutPageStyled'

// const StyledAboutSectionWithObserver = withIntersectionObserver(StyledAboutSection)

export default class AboutPage extends Component {
  onHide = () => {
    console.log('hide')
  }
  onShow = () => {
    console.log('show')
  }
  onIntersect = () => {
    // console.log('intersec')
  }
  render() {
    return (
      <StyledAboutContainer>
        {/* <StyledAboutTitle>Tien Tran (Leopold)</StyledAboutTitle> */}
        <IntersectionVisible id='about-section-1'
          WrappedComponent={StyledAboutSection}
          onShow={this.onShow}
          onHide={this.onHide}
          onIntersect={this.onIntersect}
        >
          Section 1
        </IntersectionVisible>
        <StyledAboutSection id='about-section-2'>
          Section 2
        </StyledAboutSection>
        <StyledAboutSection id='about-section-3'>
          Section 3
        </StyledAboutSection>
      </StyledAboutContainer>
    )
  }
}
