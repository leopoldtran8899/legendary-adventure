import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { StyledLayout } from './LayoutStyled'
export default class Layout extends Component {

  render() {
    return (
      <StyledLayout>
        {this.props.children}
      </StyledLayout>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.any
}
