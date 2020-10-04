import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../Context/AppContext'
import styled from 'styled-components'

const StyledHeader = styled.div`
  display: flex; 
  flex-direction: row;
  align-items: center; 
  justify-content: space-between;

  padding-left: 1rem;
  padding-right: 1rem;
  background-color: red;
  opacity: .9;
  color: white; 
  font-size: 2rem;
  min-height: 5rem;
`

const LoginButton = styled.button`
  background-color: lightgray;
  padding: .5rem 1rem;
  font-size: 1.2rem;
  &:hover {
    background-color: white;
    color: red;
  } 
`

const Header = () => {
  const { appState, appDispatch } = useContext(AppContext)

  function handleLogin() {
    appDispatch({
      type: 'isLoggedInUpdated',
      payload: !appState.isLoggedIn
    })
    alert(`Login Status Set To: ${!appState.isLoggedIn}` )
  }

  return (
    <StyledHeader>
      <div>
        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>To-Do-App</Link>
      </div>
      <LoginButton onClick={() => handleLogin()}>Login</LoginButton>
    </StyledHeader>
  )
}

export default Header
