import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ProjectItem from './ProjectItem'
import { StyledProjectList, StyledProjectListContainer, StyledProjectListTitle } from './ProjectListStyled'

export class ProjectList extends Component {
  

  render() {
    return (
      <StyledProjectListContainer>
        <StyledProjectListTitle>Projects</StyledProjectListTitle>
        <StyledProjectList>
        {
          this.props.projects.length > 0 ?
          this.props.projects.map(project => <ProjectItem key={project.id} project={project}/>)
          : null
        }
        </StyledProjectList>
      </StyledProjectListContainer>
    )
  }
}

export default ProjectList