import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.span`
  background-color: red;
  opacity: .9
  position: fixed; 
  width: 100vw;
  height: 2rem;
  bottom: 0;
`

const Footer = () => {
  return (
    <StyledFooter />
  )
}

export default Footer
