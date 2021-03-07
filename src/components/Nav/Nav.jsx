import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useParams
} from 'react-router-dom'

import {
  Typography,
  IconButton,
  Grid
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

import HomeIcon from '@material-ui/icons/Home';
import TimerIcon from '@material-ui/icons/Timer';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import NoteIcon from '@material-ui/icons/Note';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  link: {
    display: 'inline-flex',
    alignItems: 'center',
    margin: '0 20px',
    color: '#fff',
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
  activeLink: {
    color: '#aaa',
  },
  icon: {
    marginRight: '10px',
  },
}));


export const Nav = () => {
  const classes = useStyles();

  return (
    <Grid container justify = "center">
      <ul>
        <NavLink
          to="/main"
          className={classes.link}
          activeClassName={classes.activeLink}
        >
          <HomeIcon className={classes.icon} />
          <Typography variant="button">Home</Typography>
        </NavLink>

        <NavLink
          to="/timer"
          className={classes.link}
          activeClassName={classes.activeLink}
        >
          <TimerIcon className={classes.icon} />
          <Typography variant="button">Timer</Typography>
        </NavLink>

        <NavLink
          to="/calendar"
          className={classes.link}
          activeClassName={classes.activeLink}
        >
          <CalendarTodayIcon className={classes.icon} />
          <Typography variant="button">Calendar</Typography>
        </NavLink>

        <NavLink
          to="/notes"
          className={classes.link}
          activeClassName={classes.activeLink}
        >
          <NoteIcon className={classes.icon} />
          <Typography variant="button">Notes</Typography>
        </NavLink>

        <NavLink
          to="/converter"
          className={classes.link}
          activeClassName={classes.activeLink}
        >
          <LocalAtmIcon className={classes.icon} />
          <Typography variant="button">Converter</Typography>
        </NavLink>
      </ul>
    </Grid>
  )
}
