import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import classNames from "classnames";

import { default as HomePage } from '../../Views/HomePage';
import { default as ResumePage } from '../../Views/ResumePage';
import { default as ProjectPage } from '../../Views/ProjectPage';
import { default as AboutPage } from '../../Views/AboutPage';

import { default as Navigation } from '../Navigation';
import { default as Container } from '../Container';

import styles from './styles.module.scss';
import 'react-pdf/src/Page/AnnotationLayer.css';

const title = "Johnny | Software Developer";
const description = "Johnny's personal website";
const keywords = [ "Personal Website", "Johnny" ];
const author = "Dong Hyuk Jin"

function App() {
	return (
		<div className={classNames(styles.app)}>
			<Helmet>
				<title> { title } </title>
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords.join(" ")}/>
				<meta name="author" content={author}/>
				
				<meta property="og:title" content="Johnny's Personal Website"/>
				<meta property="og:description" content="Welcome to Johnny's website. Feel free to contact me!"/>
				<meta property="og:image" content="https://www.wesgur.com/screenshots/homepage.png"/>
				<meta property="og:url" content="https://www.wesgur.com"/>
			</Helmet>
			<Router>
				<Navigation />
				<div className={classNames(styles.content)}>
					<Container>
						<Switch>
							<Route exact path="/" component={ HomePage } />
							<Route path="/about" component={ AboutPage } />
							<Route path="/project" component={ ProjectPage } />
							<Route path="/resume" component={ ResumePage } />
							<Redirect to="/" />
						</Switch>
					</Container>
				</div>
			</Router>    
		</div>
	);
}

export default App;
