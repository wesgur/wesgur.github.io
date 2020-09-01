import React from 'react';

import { default as Page } from '../Components/Page';
import { default as Container } from '../Components/Container';
import { default as HelloWorld } from '../Components/HelloWorld';
import { default as Maintenance } from '../Components/Maintenance';

const name = "Dong Hyuk(Johnny) Jin";

const HomePage = () => (
    <Page> 
        <Container>
            <HelloWorld> 
                <h1> Hey! </h1>
                <h1> I'm {name} </h1>
                <h1> Software Developer </h1>     
                <Maintenance/>
            </HelloWorld>
        </Container>        
    </Page>
);

export default HomePage;