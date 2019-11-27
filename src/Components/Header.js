import React, { Component } from 'react';
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
import Grid from '@material-ui/core/Grid';
import RoomIcon from '@material-ui/icons/Room';
import Dashboard from '../Views/Dashboard';
import Link from '@material-ui/core/Link';
import Viewall from '../Views/Viewall';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import { Redirect } from "react-router-dom";


export default class DateLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      toViewAll:false,
      toBuses:"",
      toBookings:false
    }
  }

  TabPanel(props) {
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

  a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }

  render() {
    return (
      <div>
        {this.navigations()}
      </div>
    )
  }

  navigations() {
    TabPanel.propTypes = {
      children: PropTypes.node,
      index: PropTypes.any.isRequired,
      value: PropTypes.any.isRequired,
    };
    const classes = makeStyles(theme => ({
      root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
      },
    }));
    const handleChange = (event, newValue) => {
      this.setState({ value: newValue });
    };

    const handleTabClick = (name) => {
      // if(name === "viewAll"){
      //   this.setState({toViewAll:true});
      // }else if(name === "buses"){
      //   this.setState({toBuses:true});
      // }
    }
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6" component="h6" noWrap>
              LINKOD
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container justify='center'>
          <AppBar position="static" color="default">
            <Tabs
              value={this.state.value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example">
              <Tab label="Dashboard" style={{ marginLeft: '30%' }} icon={<DashboardRoundedIcon />} {...a11yProps(0)} />
              <Tab label="Schedule" icon={<ScheduleIcon />} {...a11yProps(1)} />
              <Tab label="Bookings" icon={<NoteAddIcon />}{...a11yProps(2)} />
              <Tab label="Buses" style={{ marginRight: '30%' }} icon={<DirectionsBusIcon />} {...a11yProps(3)} />
            </Tabs>
          </AppBar>
        </Grid>
      </div>
    );
  }
}

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




// export default function SearchAppBar() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);


//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
//   const handleTabClick = () => {
//     alert('testing')
//     // this.props.history.push("/admin/Viewall")
//     // browserHistory.push('/admin/Viewall')
//     // this.props.history.push(`/${key}`)   // < == router router v4
//     this.BrowserRouter.push(`/${"/admin/Viewall"}`);      // <== react router v3
//   }
//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography className={classes.title} variant="h6" component="h6" noWrap>
//             LINKOD
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Grid container justify='center'>
//         <AppBar position="static" color="default">
//           <Tabs
//             value={value}
//             onChange={handleChange}
//             indicatorColor="primary"
//             textColor="primary"
//             variant="scrollable"
//             scrollButtons="auto"
//             aria-label="scrollable auto tabs example">
//             <Tab label="Dashboard" style={{ marginLeft: '30%' }} component={Link} to="/admin/Dashboard" icon={<DashboardRoundedIcon />} {...a11yProps(0)} />
//             <Tab label="Schedule" icon={<ScheduleIcon />} {...a11yProps(1)} />
//             <Tab label="Bookings" onClick={handleTabClick} icon={<NoteAddIcon />}{...a11yProps(2)} />
//             <Tab label="Buses" style={{ marginRight: '30%' }} icon={<DirectionsBusIcon />} {...a11yProps(3)} />
//           </Tabs>
//         </AppBar>
//       </Grid>
//     </div>
//   );
// }