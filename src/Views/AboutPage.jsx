import React from 'react';

import { default as Container } from '../Components/Container';
import { default as HelloWorld } from '../Components/HelloWorld';
import Maintenace from '../Components/Maintenance';
import { default as Page } from '../Components/Page';

const AboutPage = () => (
    <Page>
        <Container>
            <HelloWorld>
                <h1> About Johnny </h1>    
                <Maintenace/>
            </HelloWorld>
        </Container>        
    </Page>
);

export default AboutPage;
