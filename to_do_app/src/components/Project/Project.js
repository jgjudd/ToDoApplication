import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../Context/AppContext'
import styled from 'styled-components'
import Task from '../Task/Task'

const DummyTaskList1 = [
  { taskName: 'TaskList A', taskItems: [ 'Task A1', 'Task A2', 'Task A3', 'Task A4', 'Task A5' ]},
  { taskName: 'TaskList B', taskItems: [ 'Task B1', 'Task B2', 'Task B3', 'Task B4', 'Task B5' ]},
  { taskName: 'TaskList C', taskItems: [ 'Task C1', 'Task C2', 'Task C3', 'Task C4', 'Task C5' ]},
]

const DummyTaskList2 = [
  { taskName: 'TaskList A', taskItems: [ 'Task A1', 'Task A2', 'Task A3', 'Task A4', 'Task A5' ]},
  { taskName: 'TaskList B', taskItems: [ 'Task B1', 'Task B2', 'Task B3', 'Task B4', 'Task B5' ]},
]

const DummyTaskList3 = [
  { taskName: 'TaskList A', taskItems: [ 'Task A1', 'Task A2', 'Task A3', 'Task A4', 'Task A5' ]},
  { taskName: 'TaskList B', taskItems: [ 'Task B1', 'Task B2', 'Task B3', 'Task B4', 'Task B5' ]},
  { taskName: 'TaskList C', taskItems: [ 'Task C1', 'Task C2', 'Task C3', 'Task C4', 'Task C5' ]},
  { taskName: 'TaskList D', taskItems: [ 'Task D1', 'Task D2', 'Task D3', 'Task D4', 'Task D5' ]},
  { taskName: 'TaskList E', taskItems: [ 'Task E1', 'Task E2', 'Task E3', 'Task E4', 'Task E5' ]}
]

const DummyTaskList4 = [
  { taskName: 'TaskList A', taskItems: [ 'Task A1', 'Task A2', 'Task A3', 'Task A4', 'Task A5' ]},
  { taskName: 'TaskList B', taskItems: [ 'Task B1', 'Task B2', 'Task B3', 'Task B4', 'Task B5' ]},
  { taskName: 'TaskList C', taskItems: [ 'Task C1', 'Task C2', 'Task C3', 'Task C4', 'Task C5' ]},
  { taskName: 'TaskList D', taskItems: [ 'Task D1', 'Task D2', 'Task D3', 'Task D4', 'Task D5' ]},
  { taskName: 'TaskList E', taskItems: [ 'Task E1', 'Task E2', 'Task E3', 'Task E4', 'Task E5' ]},
  { taskName: 'TaskList A', taskItems: [ 'Task A1', 'Task A2', 'Task A3', 'Task A4', 'Task A5' ]},
  { taskName: 'TaskList B', taskItems: [ 'Task B1', 'Task B2', 'Task B3', 'Task B4', 'Task B5' ]},
  { taskName: 'TaskList C', taskItems: [ 'Task C1', 'Task C2', 'Task C3', 'Task C4', 'Task C5' ]},
  { taskName: 'TaskList D', taskItems: [ 'Task D1', 'Task D2', 'Task D3', 'Task D4', 'Task D5' ]},
  { taskName: 'TaskList E', taskItems: [ 'Task E1', 'Task E2', 'Task E3', 'Task E4', 'Task E5' ]}
]

function getProjectId(projectId) {
  switch (projectId) {
    case 1:
      return DummyTaskList1
    case 2:
      return DummyTaskList2
    case 3:
      return DummyTaskList3
    case 4:
      return DummyTaskList4
    case 5:
      return DummyTaskList1
    case 6:
      return DummyTaskList2
    case 7:
      return DummyTaskList3
    case 8:
      return DummyTaskList4
    case 9:
      return DummyTaskList1
    case 10:
      return DummyTaskList2
    default: 
      return DummyTaskList1
  }
}

const ProjectDisplay = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Project = (props) => {
  // console.log(props.location.state.projectId)
  let projectId = props.location.state.projectId
  const ListOfTasks = getProjectId(projectId)
  const { appState } = useContext(AppContext)
  console.log(appState)
  return (
    <React.Fragment>
      {
        appState.isLoggedIn ? 
          <ProjectDisplay>
            {
              ListOfTasks.map((taskInfo) => (
                <Task taskInfo={taskInfo} />
              ))
            }
          </ProjectDisplay>
        : <Link to='/'>Please Log In To View Projects</Link>
    }
    </React.Fragment>
  )
}

export default Project
