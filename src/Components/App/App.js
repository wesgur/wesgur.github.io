import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import classNames from "classnames";

import { default as Navigation } from '../Navigation';
import { Container } from '../Container';

import { HomePage, AboutPage, ProjectPage, ResumePage } from '../../Views';

import styles from './styles.module.scss';
import { StickyCardLayout } from "../Layouts/StickyCardLayout";

function App() {
	return (
		<div className={classNames(styles.app)}>			
			<Router>		
				<Navigation/>
				<Container>					
					<StickyCardLayout>						
						<Switch>
							<Route exact path="/" component={ ProjectPage } />
							<Route path="/about" component={ AboutPage } />
							<Route path="/projects" component={ ProjectPage } />
							<Route path="/resume" component={ ResumePage } />
						</Switch>
					</StickyCardLayout>				
				</Container>			
			</Router>    				
		</div>
	);
}

export default App;
