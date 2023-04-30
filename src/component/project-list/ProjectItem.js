import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  SiGithub,
  SiReact,
  SiJavascript,
  SiStyledcomponents,
  SiNextdotjs,
  SiTailwindcss,
  SiPhp,
  SiLaravel,
  SiVuedotjs,
  SiQuasar,
} from 'react-icons/si';
import { StyledProjectItem } from './ProjectItemStyled';
import { RiExternalLinkLine } from 'react-icons/ri';
import StyledLink from '../StyledLink';
export class ProjectItem extends Component {
  getTechIcon = tech => {
    switch (tech) {
      case 'react':
        return <SiReact size='100%' />;
      case 'styled-component':
        return <SiStyledcomponents size='100%' />;
      case 'next':
        return <SiNextdotjs size='100%' />;
      case 'tailwind':
        return <SiTailwindcss size='100%' />;
      case 'php':
        return <SiPhp size='100%' />;
      case 'laravel':
        return <SiLaravel size='100%' />;
      case 'vue':
        return <SiVuedotjs size='100%' />;
      case 'quasar':
        return <SiQuasar size='100%' />;
      default:
        return <SiJavascript size='100%' />;
    }
  };

  render() {
    const project = this.props.project;
    return (
      <StyledProjectItem>
        <div className='project-item-title'>
          ⌙ {project.title}
          <div className='project-item-tech'>
            {project.tech.map((e, i) => (
              <div key={i} className='tech-icon'>
                {this.getTechIcon(e)}
              </div>
            ))}
          </div>
        </div>
        <div className='project-item-desc'>{project.desc}</div>
        <div className='project-item-tech project-item-links'>
          <div className='project-item-github tech-icon'>
            <StyledLink href={project.github}>
              <SiGithub size={'100%'} />
            </StyledLink>
          </div>
          {project.demo ? (
            <div className='project-item-demo tech-icon'>
              <StyledLink href={project.demo}>
                <RiExternalLinkLine size={'100%'} />
              </StyledLink>
            </div>
          ) : null}
        </div>
      </StyledProjectItem>
    );
  }
}

ProjectItem.propTypes = {
  project: PropTypes.shape({
    demo: PropTypes.string,
    desc: PropTypes.string,
    tech: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
  }),
};

export default ProjectItem;
