import React, { useState, useReducer } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from 'styled-components'

import { AppContext, AppReducer, initialAppState } from './Context/AppContext'

import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header'
// import Footer from './components/Footer/Footer'
import Project from './components/Project/Project'

const Container = styled.div`
  width: 75%;
  margin: auto;
`

function App() {
  const [appState, appDispatch] = useReducer(AppReducer, initialAppState)
  const value = { appState, appDispatch }

  return (
    <React.Fragment>
      <AppContext.Provider value={value}>
      <BrowserRouter>
        <Header />
        <Container>
            <Switch>
              <Route 
                exact 
                path='/'
                component={Dashboard}
              />
              <Route 
                exact 
                path='/project/:id'
                component={Project}  
              />
            </Switch>
        </Container>
      </BrowserRouter>
      </AppContext.Provider>
    </React.Fragment>  
  );
}

export default App;
