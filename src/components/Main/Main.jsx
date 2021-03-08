import React from 'react'
import { Home } from '../Home/Home'
import { Timer } from '../Timer/Timer'
import { CalendarPage } from '../CalendarPage/CalendarPage'
import { Notes } from '../Notes/Notes'
import { Converter } from '../Converter/Converter'

import { makeStyles } from '@material-ui/core/styles'

import {
  Container,
  Grid,
  Box
} from '@material-ui/core'

import {
  Switch,
  Route,
} from 'react-router-dom'

const useStyle = makeStyles(theme => ({
  wrapper: {
    position: 'relative',
    // zIndex: 1,
    background: 'radial-gradient(#063809, #000701)',

    '&::before': {
      position: 'absolute',
      zIndex: 1,
      content: '""',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      backgroundImage: 'linear-gradient(transparent 0%, rgba(10, 16, 10, 0.5) 50%)',
      backgroundSize: '100% 4px',
    }
  },
  page: {
    minHeight: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export const Main = () => {
  const classes = useStyle('');

  return (
    <Box className={classes.wrapper}>
      <Grid container className={classes.page}>
        <Switch>
          <Route path="/timer" component={Timer} />
          <Route path="/calendar" component={CalendarPage} />
          <Route path="/notes" component={Notes} />
          <Route path="/converter" component={Converter} />
          <Route path="/" component={Home} />
        </Switch>
      </Grid>
    </Box>
  )
}
