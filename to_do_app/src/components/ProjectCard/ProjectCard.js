import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledProjectCard = styled.button`
  background-color: lightgrey;
  border: 1px solid black;
  margin: 1rem; 
  width: 100%;
  min-height: 2rem;
  padding: 1rem;

  display: flex;
  flex-direction: row; 
  align-items: center;

  &:hover {
    text-decoration: none;
    background-color: white;
    color: darkred; 
  }

  &:focus {
    text-decoration: none;
    outline: 0;
  }
`

const StyledProjectName = styled.div`
  min-width: 30%;
  font-size: 1.3rem;
  display: flex;
  justify-content: flex-start;
`

const StyledProjectDescription = styled.div`
  font-size: 1rem;
`

const ProjectCard = (props) => {
  return (
    <Link 
      style={{ textDecoration: 'none' }}
      to={{ pathname: `/project/${props.projectId}`, state: { projectId: props.projectId} }}
    >
      <StyledProjectCard>
        <StyledProjectName>{props.projectName}</StyledProjectName>
        <StyledProjectName>ID: {props.projectId}</StyledProjectName>
        <StyledProjectDescription>{props.description}</StyledProjectDescription>
      </StyledProjectCard>
    </Link>
  )
}

export default ProjectCard
