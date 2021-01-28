import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import classNames from "classnames";
import { Helmet } from "react-helmet-async";

import { default as AppProvider } from './AppProvider';
import { default as Navigation } from '../Navigation';
import { Container } from '../Container';
import { HomePage, ProjectPage, ResumePage } from '../../Views';

import styles from './styles.module.scss';
import { StickyCardLayout } from "../Layouts/StickyCardLayout";
import { default as ThemeProvider } from '../ThemeProvider';

const APP_TITLE = "Johnny Jin | Software Developer"

function App() {
	return (
		<div className={classNames(styles.app)}>			
			<Helmet>
				<title> {APP_TITLE} </title> 
			</Helmet>
			<AppProvider>
				<Router>		
					<Navigation/>
					<Container>					
						<StickyCardLayout>						
							<Switch>
								<Route exact path="/" component={ HomePage } />
								{/* <Route path="/about" component={ AboutPage } /> */}
								<Route path="/projects" component={ ProjectPage } />
								<Route path="/resume" component={ ResumePage } />
								{/* <Route path="/experiments" component={ ExperimentPage } /> */}
							</Switch>
						</StickyCardLayout>				
					</Container>			
					<ThemeProvider.Fab/>
				</Router>    				
			</AppProvider>
		</div>
	);
}

export default App;
