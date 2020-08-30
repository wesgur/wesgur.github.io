import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import classNames from "classnames";

import { default as Home } from '../../Views/Home';
import { default as Resume } from '../../Views/Resume';
import { default as ProjectPage } from '../../Views/ProjectPage';
import { default as About } from '../../Views/About';
import { default as Navigation } from '../Navigation';
import { default as Container } from '../Container';

import style from './styles.module.scss';
import 'react-pdf/src/Page/AnnotationLayer.css';

const title = "Johnny | Software Developer";

function App() {
  return (
    <div>
      <Helmet>
        <title> { title } </title>
        <meta name="description" content="Johnny's personal website"/>
      </Helmet>
      <Router>
        <Navigation />
        <div className={classNames(style.content)}>
          <Container>
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route path="/about" component={ About } />
              <Route path="/project" component={ ProjectPage } />
              <Route path="/resume" component={ Resume } />
              <Redirect to="/" />
            </Switch>
          </Container>
        </div>
      </Router>    
    </div>
  );
}

export default App;
