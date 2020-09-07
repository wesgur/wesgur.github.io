import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import classNames from "classnames";
import MetaTags from 'react-meta-tags';

import { default as AppProvider } from './AppProvider';
import { default as HomePage } from '../../Views/HomePage';
import { default as ResumePage } from '../../Views/ResumePage';
import { default as ProjectPage } from '../../Views/ProjectPage';
import { default as AboutPage } from '../../Views/AboutPage';

import { default as Container } from '../Container';
import { default as Navigation } from '../Navigation';
import { default as ThemeProvider } from '../ThemeProvider';

import styles from './styles.module.scss';
import 'react-pdf/src/Page/AnnotationLayer.css';

const title = "Johnny | Software Developer";
const description = "Johnny's personal website";
const keywords = [ "Personal Website", "Johnny" ];
const author = "Dong Hyuk Jin"

const meta = {
	title: "Johnny's Personal Website",
	description: "Welcome to Johnny's website. Feel free to contact me!",
	image: "https://www.wesgur.com/screenshots/homepage.png",
	url: "https://www.wesgur.com",
};

function App() {
	return (
		<div className={classNames(styles.app)}>
			<Helmet>
				<title> { title } </title>				
			</Helmet>
			<MetaTags>
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords.join(" ")}/>
				<meta name="author" content={author}/>
				
				<meta property="og:type" content="website"/>
				<meta property="og:title" content={meta.title}/>
				<meta property="og:description" content={meta.description}/>
				<meta property="og:image" content={meta.image}/>
				<meta property="og:url" content={meta.url}/>
			</MetaTags>
			<AppProvider>
				<Router>
					<Navigation />
					<div className={classNames(styles.content)}>
						<Navigation.Topbar />
						<Container>
							<Switch>
								<Route exact path="/" component={ HomePage } />
								<Route path="/about" component={ AboutPage } />
								<Route path="/projects" component={ ProjectPage } />
								<Route path="/resume" component={ ResumePage } />
								<Redirect to="/" />
							</Switch>
						</Container>						
						<ThemeProvider.Fab />

						{/* <Fab aria-label={fab.label} className={fab.className} color={fab.color}>
							{fab.icon} Light Mode
						</Fab> */}
						{/* <Fab variant="extended" aria-label={fab.label} className={fab.className} color={fab.color}>
							<Brightness7Icon/>
							Light Mode
						</Fab> */}
					</div>
				</Router>    				
			</AppProvider>
		</div>
	);
}

export default App;
