import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import { default as Resume } from './Views/Resume';

import { default as Container } from './Components/Container';

import "./Static/css/app.css";
import "./Static/css/components.css";
import "./Static/css/index.css";
import 'react-pdf/dist/Page/AnnotationLayer.css';

import { Navigation } from "./Components";

function App() {
  return (
    <Router>
      <Navigation />
      <div className="content">
        <Container>
          <Switch>
            <Route path="/resume" component={ Resume } />
            <Redirect to="/" />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
