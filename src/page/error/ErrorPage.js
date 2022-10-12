import React, { Component } from 'react'
import { StyledErrorPage } from './ErrorPageStyled'
export default class ErrorPage extends Component {

  render() {
    return (
      <StyledErrorPage>
        Page not found.
      </StyledErrorPage>
    )
  }
}
