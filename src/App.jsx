import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Main from './Pages/Main'
import About from './Pages/About'
import News from './Pages/News'
import ReadMe from './Pages/ReadMe'
import Footer from './Comps/Footer';

import Nav from './Comps/Nav';
import './Styles/App.css';

const App = () => {



  return (
    <Router>
      <Nav/>
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/about" exact component={About} />
        <Route path="/news" exact component={News}/>
        <Route path="/readme" exact component={ReadMe} />
      </Switch>
      <Footer />
    </Router>
  )}

export default App;