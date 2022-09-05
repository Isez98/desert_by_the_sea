import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import ContextWrapper from '../Context/ContextWrapper'
import Home from '../Paginas/Home'

const App: React.FC = () => {
  return (
    <ContextWrapper>
      <Router>
        <div className="App">
          <div className="App-header">
            <Nav />
            <Switch>
              {
                //  <Route path="/condos">
                //    <Paginas.Condos hash={pageLang} />
                //  </Route>
              }
              <Route path="/">
                {' '}
                <Home />{' '}
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </ContextWrapper>
  )
}

export default App
