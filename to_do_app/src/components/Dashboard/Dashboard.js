import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'
import styled from 'styled-components'
import ProjectCard from '../ProjectCard/ProjectCard'
import { Link } from 'react-router-dom'

const StyledDashboard = styled.div`
  min-height: inherit;
`

const StyledSectionHeader = styled.div`
  display: flex; 
  justify-content: center;
  margin-top: 1rem;
  font-size: 2rem;
  color: black;
`

const StyledErrorMessage = styled.div`
  font-size: 1.5rem;
  color: darkred;
  margin-top: 5rem;
  display: flex; 
  justify-content: center;
`

const ProjectList = [
  {projectName: 'Project A', projectId: 10, description: 'This is Project A'},
  {projectName: 'Project B', projectId: 9, description: 'This is Project B'},
  {projectName: 'Project C', projectId: 8, description: 'This is Project C'},
  {projectName: 'Project D', projectId: 7, description: 'This is Project D'},
  {projectName: 'Project E', projectId: 6, description: 'This is Project E'},
  {projectName: 'Project F', projectId: 5, description: 'This is Project F'},
  {projectName: 'Project G', projectId: 4, description: 'This is Project G'},
  {projectName: 'Project H', projectId: 3, description: 'This is Project H'},
  {projectName: 'Project I', projectId: 2, description: 'This is Project I'},
  {projectName: 'Project J', projectId: 1, description: 'This is Project J'}
]

const Dashboard = () => {
  const { appState } = useContext(AppContext)
  return (
    <StyledDashboard>
      <StyledSectionHeader>Project List</StyledSectionHeader>
      { appState.isLoggedIn ?  
        ProjectList.map((project, i) => 
          <ProjectCard key={i} projectName={project.projectName} projectId={project.projectId} description={project.description} />
        )
      : 
        <StyledErrorMessage>Please Login To View Project List</StyledErrorMessage>
      }
    </StyledDashboard>
  )
}

export default Dashboard
