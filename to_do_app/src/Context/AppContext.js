import { createContext } from 'react'

export const AppContext = createContext()

// reducer 
export const AppReducer = (state, action) => {
  switch (action.type) {
    case 'isLoggedInUpdated':
      return { ...state, isLoggedIn: action.payload }
    case 'userUpdated':
      return { ...state, userId: action.payload }
    default:
      return { state }    
  }
}

// initial state
export const initialAppState = {
  isLoggedIn: true,
  userId: ''
}