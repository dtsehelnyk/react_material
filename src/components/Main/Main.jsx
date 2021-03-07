import React from 'react'
import { Home } from '../Home/Home'
import { Timer } from '../Timer/Timer'
import { Calendar } from '../Calendar/Calendar'
import { Notes } from '../Notes/Notes'
import { Converter } from '../Converter/Converter'

import {
  Typography,
  Box,
  Container
} from '@material-ui/core'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from 'react-router-dom'

export const Main = () => {
  return (
    <Container>
      <Switch>
        <Route path="/timer" component={Timer} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/notes" component={Notes} />
        <Route path="/converter" component={Converter} />
        <Route path="/" component={Home} />
      </Switch>
    </Container>
  )
}
