import React, {
  // useContext,
  useEffect,
} from 'react'
import './App.css'
//React-Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//Components
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'
import DetectLang from '../Components/DetectLang'
//Paginas
import ContextWrapper from '../Context/ContextWrapper'
import Home from '../Paginas/Home'
// import GlobalContext from '../Context/GlobalContext'

const App: React.FC = () => {
  // const { lang, setLang } = useContext(GlobalContext)

  // useEffect(() => {
  //   if (pageLang === 'es') {
  //     setLang('es')
  //   } else {
  //     setLang('en')
  //   }
  // }, [])

  useEffect(() => {
    const pageLang = DetectLang()
    window.location.search = `?lang=${pageLang}`
  }, [])

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
                <Home />
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
