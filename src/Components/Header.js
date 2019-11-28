import React  from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import ScheduleIcon from '@material-ui/icons/Schedule';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import Dashboard from '../Views/Dashboard';
import Link from '@material-ui/core/Link';
import Viewall from '../Views/Viewall';
import Schedule from '../Views/Schedule';
import Daily from '../Views/Daily'
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

  const useStyles = makeStyles(theme => ({
    text: {
      padding: theme.spacing(2, 2, 0),
    },
    paper: {
      paddingBottom: 50,
    },
    list: {
      marginBottom: theme.spacing(2),
    },
    subheader: {
      backgroundColor: theme.palette.background.paper,
    },
    appBar: {
      top: 'auto',
      bottom: 0,
      width: "20%",
      left: 0,
    },
    grow: {
      flexGrow: 1,
    },
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    
  }));
  

export default function SearchAppBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            LINKOD
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example">
          <Tab label="Dashboard" style={{ marginLeft: '30%' }} icon={<DashboardRoundedIcon />} {...a11yProps(0)} />
          <Tab label="Schedule"  icon={<ScheduleIcon />} {...a11yProps(1)} />
          <Tab label="Bookings" icon={<NoteAddIcon />}{...a11yProps(2)} />
          <Tab label="Buses" icon={<DirectionsBusIcon />} {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      {/* <TabPanel value={value} index={0}>
          <div>
            <Dashboard/>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div>
            <Schedule/>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div>
          <Viewall/>
          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div>
            <Daily/>
          </div>
        </TabPanel> */}
      </div>
    </div>
  );
}
