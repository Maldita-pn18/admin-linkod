import React from 'react';
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
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import ReportIcon from '@material-ui/icons/Report';
import PeopleIcon from '@material-ui/icons/People';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import RoomIcon from '@material-ui/icons/Room';


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
    },
    grow: {
      flexGrow: 1,
    },
    fabButton: {
      position: 'absolute',
      zIndex: 1,
      top: -30,
      left: 0,
      right: 0,
      margin: '0 auto',
    },
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200,
        },
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
          <Tab label="Dashboard"icon={<DashboardRoundedIcon />} {...a11yProps(0)} />
          <Tab label="Schedule"  icon={<ScheduleIcon />} {...a11yProps(1)} />
          <Tab label="Bookings" icon={<NoteAddIcon />}{...a11yProps(2)} />
          <Tab label="Buses" icon={<DirectionsBusIcon />} {...a11yProps(3)} />
          <Tab label="Routes" icon={<RoomIcon />} {...a11yProps(4)} />
          <Tab label="Bus Types" icon={<AirportShuttleIcon/>} {...a11yProps(5)} />
          <Tab label="Reports" icon={<ReportIcon/>} {...a11yProps(6)} />
          <Tab label="Settings" icon={<SettingsIcon/>} {...a11yProps(7)} />
          <Tab label="Users" icon={<PeopleIcon/>} {...a11yProps(8)} />
          <Tab label="Logout" icon={<ExitToAppIcon/>} {...a11yProps(10)} />
        </Tabs>
      </AppBar>
    </div>
       
    </div>
  );
}