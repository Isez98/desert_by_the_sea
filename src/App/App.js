import React from 'react';
import './App.css';

//React-Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Components
import Footer from '../Components/Footer';
import Nav from '../Components/Nav';
import DetectLang from '../Components/DetectLang';

//Paginas
import Paginas from '../Paginas';

const pageLang = DetectLang();
console.log(pageLang);
window.location.hash = `lang=${pageLang}`;

function App() {
    console.log("This is an test for faux v0.2.1");
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <Nav hash={pageLang} />
          <Switch>
            <Route path="/condos">
              <Paginas.Condos hash={pageLang} />
            </Route>
            <Route path="/">
              <Paginas.Home hash={pageLang} />
            </Route>
          </Switch>
        </div>
        <Footer hash={pageLang}></Footer>
      </div>
    </Router>
  );
}

export default App;
