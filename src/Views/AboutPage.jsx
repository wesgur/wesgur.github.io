import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { PageTitle } from '../Components/Page';

const jsCode = `class Johnny {
  constructor(){
    this.full_name = "Dong Hyuk Jin";
    this.english_name = "Johnny";
    this.age = 25;
    this.education = [ "University of Toronto" ];
    this.location = "Toronto";    
  }
};
`;

const pyCode = `class Johnny:
    def __init__(self):
        self.full_name = "Dong Hyuk Jin"
        self.english_name = "Johnny"
        self.age = 25
        self.education = [ "University of Toronto" ]
        self.location = "Toronto"
`;


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      { value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
      ) }
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
}));

const AboutPage = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return ( 
        <section>
            <PageTitle title="About Myself"/> 

            <p> </p>

            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                    >
                    <Tab label="Javascript" {...a11yProps(0)} />
                    <Tab label="Python" {...a11yProps(1)} />
                    <Tab label="Go" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}>
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <AceEditor
                            mode="javascript"
                            theme="github"
                            value={jsCode}
                            name="UNIQUE_ID_OF_DIV"
                            editorProps={{ $blockScrolling: true }}
                            setOptions={{ }}
                            style={{
                                width: '100%',
                                height: '150px'
                            }}
                        />
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <AceEditor
                            mode="python"
                            theme="github"
                            value={pyCode}
                            name="UNIQUE_ID_OF_DIV"
                            editorProps={{ $blockScrolling: true }}
                            setOptions={{ }}
                            style={{
                                width: '100%',
                                height: '150px'
                            }}
                        />
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                      Item Three
                    </TabPanel>
                </SwipeableViews>
                </div>            
        </section>
    );
};

export default AboutPage;