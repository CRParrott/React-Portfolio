import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/Resume" component={Resume} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
