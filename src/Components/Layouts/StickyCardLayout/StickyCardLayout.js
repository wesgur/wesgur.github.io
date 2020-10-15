import React from 'react';

import classNames from 'classnames';
import { Container, Col, Row } from 'react-bootstrap';

import { StickyCard } from '.';

import styles from './styles.module.scss';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';

import GetAppIcon from '@material-ui/icons/GetApp';

const resumeLink = "https://www.dl.dropboxusercontent.com/s/9d23dsrdtvuyf7b/Resume.pdf";

const StickyCardLayout = (props) => {
    const [expanded, setLayoutExpanded] = React.useState(false);

    return (
        <section className={classNames(styles["main-content"])}>
            <Container>
                <Row>
                    <Col md={7} lg={8}>
                        {props.children}
                    </Col>
                    <Col md={5} lg={4}>
                        <StickyCard setLayoutExpanded={setLayoutExpanded} />
                        <DownloadCard expanded={expanded} resumeLink={resumeLink}/>
                    </Col>                            
                </Row>
            </Container>
        </section>
    );
};

const useStyles = makeStyles((theme) => ({    
    root: {
        [theme.breakpoints.down("md")] : {
            maxWidth: '100%',
        },
        [theme.breakpoints.up("md")] : {
            maxWidth: 345,
        },
    },
    iconButton: {
        fontSize: 0,
        padding: '1rem',
    },
    icon: {
        '&:hover, &:focus' : {
            fill: '#26abff', //color-accent
        },
    },
    content: {
        display: 'flex',
        alignContent: 'center',
        padding: '0px !important',
        
    },
}));

const DownloadCard = (props) => {
    const classes = useStyles();

    let cn;
    if (props.expanded === true) {
        cn = classNames(styles.expandedCard)
    } else{
        cn = classNames(styles.card)
    }

    return ( 
        <div className={cn}>
            <Card className={classes.root}>
                <CardContent className={classes.content}>
                    <IconButton aria-label="Download" className={classes.iconButton}>
                        <a href="https://www.dropbox.com/s/f4kinqwerf9soej/Resume.pdf?dl=1">
                            <GetAppIcon className={classes.icon}/>
                        </a>
                    </IconButton>    
                    <p> Download Resume </p>                
                </CardContent>
            </Card>
        </div>
    );
}

export default StickyCardLayout;