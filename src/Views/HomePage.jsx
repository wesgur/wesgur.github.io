import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import { School } from '@material-ui/icons';
import { SiJavascript, SiGo, SiPython, SiAmazonaws, SiGithubactions, SiDocker, SiSwagger } from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';


import PageRow, { PageRowHeader } from '../Components/Page/PageRow';

const useStyles = makeStyles((theme) => ({
    profile_img: {
        display: "block",
        height: "auto",
        width: "200px",
        margin: "2em auto 6em auto"
    },
    intro: {
        fontSize: "1.8em",
        fontFamily: "Roboto",
        textAlign: "center",
        margin: "2em 3em",    
        height: "fit-content",
        [theme.breakpoints.down("sm")] : {
            margin: 0
        }
    },
    flexBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',    
        height: "100%"    
    },
    skillsGridContainer : {
        marginTop: '2em',
    },
    skillsGridItem: {
        display: 'flex',
        justifyContent: 'center'
    },
    technology: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        '& > h4': {
            marginTop: '1em',
            marginBottom: '0',
        },
        '& > p': {
            marginTop: '0',
            textAlign: 'center'
        },
        '& > svg': {
            margin: 'auto',
        }
    }
}));

const HomePage = () => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <PageRow>
                <div className={classes.flexBox}>
                    <p className={classes.intro}> Hello! My name is Dong Hyuk (Johnny) Jin, and I'm a Software Developer based @Toronto, Canada </p>
                </div>                                    
            </PageRow>

            <PageRow>
                <PageRowHeader> About </PageRowHeader>
                
                <p> I recently graduated from University of Toronto with Honours Bachelors of Science in Computer Science on May 2020. </p>

                <p> Outside of work, I enjoy scheming through open source projects seeking for new technologies and contributing to stackoverflow. </p>

                <Grid container spacing={3}>
                    <Grid item md={6}>
                        <h5 style={{ fontWeight: 'bold' }}> Interests </h5>
                        <ul>
                            <li> Software Development </li>
                            <li> Cloud Computing </li>
                            <li> Information Security </li>
                        </ul>
                    </Grid>
                    <Grid item md={6}>
                        <h5 style={{ fontWeight: 'bold' }}> Education </h5>
                        <div style={{ marginBottom: '1em' }}>                            
                            <h6 style={{ margin: 0 }}> <School style={{ color: '#000' }}/> BSc. in Computer Science, May 2020 </h6>
                            <h6 style={{ margin: '0 0 0 1.8em', color: 'rgba(0,0,0,0.6)' }}> @University of Toronto </h6>
                        </div>
                        
                        <div>
                            <h6 style={{ margin: 0 }}> <School style={{ color: '#000' }}/> IB Diploma, May 2013 </h6>
                            <h6 style={{ margin: '0 0 0 1.8em', color: 'rgba(0,0,0,0.6)' }}> @International School of Manila </h6>
                        </div>                        
                    </Grid>
                </Grid>
            </PageRow>

            <PageRow>
                <PageRowHeader> Technical Skills </PageRowHeader>                
                <Grid container spacing={3} className={classes.skillsGridContainer}>
                    <Grid item xs={6} md={4} className={classes.skillsGridItem}>
                        <div className={classes.technology}>
                            <SiJavascript color="#03afff" size="4em"/>
                            <h4> Javascript </h4>
                            <p> Node.js, Express, React </p>
                        </div>
                    </Grid>
                    <Grid item xs={6} md={4} className={classes.skillsGridItem}>
                        <div className={classes.technology}>
                            <SiGo color="#03afff" size="4em"/>
                            <h4> Golang </h4>
                            <p> Gin, Echo, Cobra </p>
                        </div>
                    </Grid>
                    <Grid item xs={6} md={4} className={classes.skillsGridItem}>
                        <div className={classes.technology}>
                            <SiPython color="#03afff" size="4em"/>
                            <h4> Python </h4>
                            <p> Flask, Beautifulsoup </p>
                        </div>
                    </Grid>
                    <Grid item xs={6} md={4} className={classes.skillsGridItem}>
                        <div className={classes.technology}>
                            <FaDatabase color="#03afff"size="4em"/>
                            <h4> Database </h4>
                            <p> Mongo, MySQL, PostgreSQL, Redis </p>
                        </div>
                    </Grid>
                    <Grid item xs={6} md={4} className={classes.skillsGridItem}>
                        <div className={classes.technology}>
                            <SiGithubactions color="#03afff" size="4em"/>
                            <h4> CI/CD </h4>
                            <p> Github Actions, Jenkins, Travis CI </p>
                        </div>
                    </Grid>
                    <Grid item xs={6} md={4} className={classes.skillsGridItem}>
                        <div className={classes.technology}>
                            <SiDocker color="#03afff" size="4em"/>
                            <h4> DevOps </h4>
                            <p> Docker, Kubernetes, Nomad, Consul </p>
                        </div>
                    </Grid>
                    <Grid item xs={6} md={4} className={classes.skillsGridItem}>
                        <div className={classes.technology}>
                            <SiAmazonaws color="#03afff" size="4em"/>
                            <h4> Cloud </h4>
                            <p> AWS EC2, ECS, API Gateway, Cloudformation </p>
                        </div>
                    </Grid>
                    <Grid item xs={6} md={4} className={classes.skillsGridItem}>
                        <div className={classes.technology}>
                            <SiSwagger color="#03afff" size="4em"/>
                            <h4> Docs </h4>
                            <p> OpenAPI Specification, Swagger </p>
                        </div>
                    </Grid>
                </Grid>
            </PageRow>

            {/* <PageRow>
                <PageRowHeader> Cultural Background </PageRowHeader>

                <p> I lived in multiple countries from early years</p>

                
            </PageRow>             */}
        </div>
    );
};



export default HomePage;