import React from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import ContextWrapper from '../Context/ContextWrapper'
import Page from '../Paginas'

const App: React.FC = () => {
  return (
    <ContextWrapper>
      <Router>
        <Page />
      </Router>
    </ContextWrapper>
  )
}

export default App
