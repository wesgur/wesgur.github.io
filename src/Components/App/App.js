import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import classNames from "classnames";

import { default as Home } from '../../Views/Home';
import { default as Resume } from '../../Views/Resume';
import { default as Project } from '../../Views/Project';
import { default as About } from '../../Views/About';
import { default as Navigation } from '../Navigation';
import { default as Container } from '../Container';

import style from './styles.module.scss';
import 'react-pdf/dist/Page/AnnotationLayer.css';

function App() {
  return (
    <Router>
      <Navigation />
      <div className={classNames(style.content)}>
        <Container>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/about" component={ About } />
            <Route path="/project" component={ Project } />
            <Route path="/resume" component={ Resume } />
            <Redirect to="/" />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
