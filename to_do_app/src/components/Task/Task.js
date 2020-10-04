import React from 'react'
import styled from 'styled-components'
import TaskItem from '../TaskItem/TaskItem'

const StyledTask = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin: 1rem;
  min-height: 13rem;
  min-width: 13rem;
`
const StyledList = styled.li`
  list-style-type: none;
`


const Task = ({ taskInfo }) => {
  console.log(taskInfo)
  return (
    <StyledTask>
      <div>{taskInfo.taskName}</div>
      <StyledList>
        {
          taskInfo.taskItems.map((item) => <TaskItem item={item} />)
        }
      </StyledList>
      <button style={{ backgroundColor: 'blue', color: 'white', fontSize: '1rem', marginTop: '1rem', padding: '.5rem' }}>Update</button>
      <button style={{ backgroundColor: 'green', color: 'white', fontSize: '1rem', padding: '.5rem' }}>Mark As Done</button>
      <button style={{ backgroundColor: 'red', color: 'white', fontSize: '1rem', padding: '.5rem' }}>Delete Task</button>
    </StyledTask>
  )
}

export default Task

