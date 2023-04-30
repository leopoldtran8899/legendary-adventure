import PropTypes from 'prop-types'
import React, { Component } from 'react'
import CircleIcon from '../../component/circle-icon/CircleIcon'
import  IntersectionVisible  from '../../component/intersection-observer/IntersectionObserver'
import { FrontendData } from '../../data/FrontendData'
import { StyledAboutContainer, StyledAboutSection, StyledAboutTitle, ObserverHook, StyledAboutBar, StyledSkillBox, AboutArrowBox, AboutArrow } from './AboutPageStyled'
import { SiRobotframework, SiJavascript, SiReact, SiCss3, SiHtml5, SiLinkedin, SiGithub, SiVuedotjs } from 'react-icons/si';
import { HiOutlineArrowDown } from 'react-icons/hi'
import ProjectList from '../../component/project-list/ProjectList'
import { ProjectList as ProjectData } from '../../data/FrontendData'
import StyledLink from '../../component/StyledLink'
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
    this.setState(state => ({
      ...state,
      titleStyle: {
        ...state.titleStyle,
        show: false
      }
    }))
  }
  onShow = () => {
    this.setState(state => ({
      ...state,
      titleStyle: {
        ...state.titleStyle,
        show: true
      }
    }))
  }
  onIntersect = () => {
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
              <SiJavascript size={'100%'} color={'#9fc131'} />
            </div>
            <div className='about-title-icon round'>
              <SiReact size={'100%'} color={'#9fc131'} />
            </div>
            <div className='about-title-icon round'>
              <SiVuedotjs size={'100%'} color={'#9fc131'} />
            </div>
            <div className='about-title-icon round'>
              <SiCss3 size={'100%'} color={'#9fc131'} />
            </div>
            <div className='about-title-icon round'>
              <SiHtml5 size={'100%'} color={'#9fc131'} />
            </div>
          </div>
        </StyledAboutTitle>
        <StyledAboutBar show={!this.state.titleStyle.show}>
          <div className='about-bar-link'>
            <StyledLink href={FrontendData.linkedin}>
              <SiLinkedin
                size={'3rem'}
                color={'#042940'}
                className='bar-icon'
              />
            </StyledLink>
            <StyledLink href={FrontendData.github}>
              <SiGithub size={'3rem'} color={'#042940'} className='bar-icon' />
            </StyledLink>
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
              <StyledLink href={FrontendData.linkedin}>
                <SiLinkedin size={'100%'} color={'#9fc131'} />
              </StyledLink>
            </div>
            <div className='about-skill-icon'>
              <StyledLink href={FrontendData.github}>
                <SiGithub size={'100%'} color={'#9fc131'} />
              </StyledLink>
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
          {/* <Inprogress width='100%' height='100%' /> */}
          <ProjectList projects={ProjectData} />
        </StyledAboutSection>
      </StyledAboutContainer>
    );
  }
}
