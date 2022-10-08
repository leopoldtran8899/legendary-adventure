import PropTypes from 'prop-types'
import React, { Component } from 'react'
import  IntersectionVisible  from '../../component/intersection-observer/IntersectionObserver'
import { StyledAboutContainer, StyledAboutSection, StyledAboutTitle, ObserverHook, StyledAboutBar, Avatar } from './AboutPageStyled'

// const StyledAboutSectionWithObserver = withIntersectionObserver(StyledAboutSection)

export default class AboutPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      titleStyle: {
        show: true
      }
    }
  }
  onHide = () => {
    console.log('hide')
    this.setState(state => ({
      ...state,
      titleStyle: {
        ...state.titleStyle,
        show: false
      }
    }))
  }
  onShow = () => {
    console.log('show')
    this.setState(state => ({
      ...state,
      titleStyle: {
        ...state.titleStyle,
        show: true
      }
    }))
  }
  onIntersect = () => {
    console.log('intersec')
  }
  render() {
    return (
      <StyledAboutContainer>
        {/* <StyledAboutTitle>Tien Tran (Leopold)</StyledAboutTitle> */}

        <StyledAboutTitle show={this.state.titleStyle.show}>
          <div>
            Leopold
          </div>
          <br/>
          <div>Cumque accusantium sit cumque. Corrupti sed adipisci non molestias rerum cumque dicta minus. Debitis sed iusto debitis consequuntur nulla accusamus molestiae placeat modi. Est rem perferendis velit sint.</div>
        </StyledAboutTitle>
        <StyledAboutBar  show={!this.state.titleStyle.show}>
          <div>Leopold</div>
          <Avatar/>
        </StyledAboutBar>
        <StyledAboutSection id='about-section-1'>
          <IntersectionVisible
            WrappedComponent={ObserverHook}
            onShow={this.onShow}
            onHide={this.onHide}
            onIntersect={this.onIntersect}
            
          >
            Section 1
          </IntersectionVisible>
        </StyledAboutSection>
        <StyledAboutSection id='about-section-2'>Section 2</StyledAboutSection>
        <StyledAboutSection id='about-section-3'>Section 3</StyledAboutSection>
      </StyledAboutContainer>
    );
  }
}
