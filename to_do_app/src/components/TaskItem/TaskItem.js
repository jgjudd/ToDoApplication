import React, { useState } from 'react'
import styled from 'styled-components'

const StyledLI = styled.li`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
`

const StyledButton = styled.button`
  width: 100%;
  
  &.complete { 
    background-color: green;
     color: white;
   }
`

const TaskItem = ({ item }) => {
  // console.log(item)
  const [isComplete, setIsComplete] = useState(item.isChecked)
  return (
    <StyledLI>
      <StyledButton 
        onClick={() => setIsComplete(!isComplete)}
        className={isComplete ? 'complete' : ''}
      >
        <label>{isComplete ? 'Complete' : 'Item'}</label>
        <div>{item}</div>
      </StyledButton>
    </StyledLI>
  )
}

export default TaskItem
