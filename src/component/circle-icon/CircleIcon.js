import React from 'react'
import { StyledCircleIcon } from './CircleIconStyled'

const CircleIcon = ({size = '3rem', border = '1px', color = 'black', background = 'white', children }) => {
  return (
    <StyledCircleIcon
      size={size}
      border={border}
      color={color}
      background={background}
    >
      {children}
    </StyledCircleIcon>
  )
}

export default CircleIcon
