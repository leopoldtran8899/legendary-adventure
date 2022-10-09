import PropTypes from 'prop-types'
import React, { Component } from 'react'
import CircleIcon from '../../component/circle-icon/CircleIcon'
import  IntersectionVisible  from '../../component/intersection-observer/IntersectionObserver'
import { FrontendData } from '../../data/FrontendData'
import { StyledAboutContainer, StyledAboutSection, StyledAboutTitle, ObserverHook, StyledAboutBar, StyledSkillBox, AboutArrowBox, AboutArrow } from './AboutPageStyled'
import { SiRobotframework, SiJavascript, SiReact, SiCss3, SiHtml5, SiLinkedin, SiGithub } from 'react-icons/si';
import { HiOutlineArrowDown } from 'react-icons/hi'
import Inprogress from '../../component/inprogress/Inprogress'
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
          <div className='about-title-top'>{FrontendData.topLine}</div>
          <br />
          <div className='about-title-main'>{FrontendData.title}</div>
          <br />
          <div className='about-title-sub'>{FrontendData.subTitle}</div>
          <div className='about-title-link'>
            <div className='about-title-icon'>
              <SiLinkedin
                size={'100%'}
                color={'#9fc131'}
                className='title-icon'
              />
            </div>
            <div className='about-title-icon round'>
              <SiGithub size={'100%'} color={'#9fc131'} />
            </div>
          </div>
        </StyledAboutTitle>
        <StyledAboutBar show={!this.state.titleStyle.show}>
          <div className='about-bar-link'>
            <SiLinkedin size={'3rem'} color={'#042940'} className='bar-icon'/>
            <SiGithub size={'3rem'} color={'#042940'} className='bar-icon'/>
          </div>
          <div className='about-bar-title'>{FrontendData.sideTitle}</div>
          <div className='about-bar-logo'>
            <CircleIcon
              size='3rem'
              border='3px'
              color='#042940'
              background='#9FC131'
            >
              <SiRobotframework size={'2rem'} color={'#042940'} />
            </CircleIcon>
          </div>
        </StyledAboutBar>
        <StyledAboutSection id='about-section-1'>
          <StyledSkillBox>
            <div className='about-skill-icon'>
              <SiJavascript size={'100%'} color={'#9fc131'} />
            </div>
            <div className='about-skill-icon'>
              <SiReact size={'100%'} color={'#9fc131'} />
            </div>
            <div className='about-skill-icon'>
              <SiCss3 size={'100%'} color={'#9fc131'} />
            </div>
            <div className='about-skill-icon'>
              <SiHtml5 size={'100%'} color={'#9fc131'} />
            </div>
          </StyledSkillBox>
          <AboutArrowBox>
            <AboutArrow>
              <HiOutlineArrowDown />
            </AboutArrow>
            {FrontendData.scrollDownText}
            <AboutArrow>
              <HiOutlineArrowDown />
            </AboutArrow>
          </AboutArrowBox>
          <IntersectionVisible
            WrappedComponent={ObserverHook}
            onShow={this.onShow}
            onHide={this.onHide}
            onIntersect={this.onIntersect}
          >
            section 1
          </IntersectionVisible>
        </StyledAboutSection>
        <StyledAboutSection id='about-section-2'>
          <Inprogress width='100%' height='100%'/>
        </StyledAboutSection>
      </StyledAboutContainer>
    );
  }
}
