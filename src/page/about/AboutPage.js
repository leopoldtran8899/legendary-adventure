import PropTypes from 'prop-types'
import React, { Component } from 'react'
import  IntersectionVisible  from '../../component/intersection-observer/IntersectionObserver'
import { StyledAboutContainer, StyledAboutSection, StyledAboutTitle } from './AboutPageStyled'

// const StyledAboutSectionWithObserver = withIntersectionObserver(StyledAboutSection)

export default class AboutPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      titleStyle: {
        position: 'normal'
      }
    }
  }
  onHide = () => {
    console.log('hide')
  }
  onShow = () => {
    console.log('show')
  }
  onIntersect = () => {
    console.log('intersec')
  }
  changeTitlePosition = () => {
    this.setState(state => ({
      ...state,
      titleStyle: {
        ...state.titleStyle,
        position: 'move'
      }
    }))
    console.log("click")
  }
  render() {
    return (
      <StyledAboutContainer>
        {/* <StyledAboutTitle>Tien Tran (Leopold)</StyledAboutTitle> */}

          <IntersectionVisible
            id='about-section-1'
            WrappedComponent={StyledAboutTitle}
            onShow={this.onShow}
            onHide={this.onHide}
            onIntersect={this.onIntersect}
            styles={this.state.titleStyle}
          >
            Leopold
          </IntersectionVisible>
        <StyledAboutSection id='about-section-1'>
          Section 1 
          <button onClick={this.changeTitlePosition}>Click</button>
        </StyledAboutSection>
        <StyledAboutSection id='about-section-2'>Section 2</StyledAboutSection>
        <StyledAboutSection id='about-section-3'>Section 3</StyledAboutSection>
      </StyledAboutContainer>
    );
  }
}
