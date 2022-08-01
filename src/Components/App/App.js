import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import classNames from "classnames";
import { Helmet } from "react-helmet-async";

import { default as Navigation } from '../Navigation';
import { Container } from '../Container';
import { HomePage, ProjectPage, ResumePage } from '../../Views';

import styles from './styles.module.scss';
import { StickyCardLayout } from "../Layouts/StickyCardLayout";

const APP_TITLE = "Johnny Jin | Software Developer"

function App() {
	return (
		<div className={classNames(styles.app)}>			
			<Helmet>
				<title> {APP_TITLE} </title> 
			</Helmet>
			<Router>		
				<Navigation/>
				<Container>					
					<StickyCardLayout>						
						<Switch>
							<Route exact path="/" component={ HomePage } />
							<Route path="/projects" component={ ProjectPage } />
							<Route path="/works" component={ ResumePage } />
						</Switch>
					</StickyCardLayout>				
				</Container>			
			</Router>    				
		</div>
	);
}

export default App;
