import React from 'react'
import UnderConstruction from '../../images/underconstruction.svg'
import { StyledInprogress } from './InProgressStyle'
const Inprogress = ({width = '100px', height = '50px', bg={UnderConstruction}, text='Sorry This page is under construction'}) => {
  return (
    <StyledInprogress
      width={width}
      height={height}
      bg={bg}
    >{text}</StyledInprogress>
  )
}

export default Inprogress