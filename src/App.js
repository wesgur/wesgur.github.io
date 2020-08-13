import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import { default as Home } from './Views/Home';
import { default as Resume } from './Views/Resume';

import { default as Container } from './Components/Container';

import "./Static/css/app.scss";
import "./Static/css/index.scss";
import "./Static/css/components.scss";
import 'react-pdf/dist/Page/AnnotationLayer.css';

import { Navigation } from "./Components";

function App() {
  return (
    <Router>
      <Navigation />
      <div className="content">
        <Container>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/resume" component={ Resume } />
            <Redirect to="/" />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
