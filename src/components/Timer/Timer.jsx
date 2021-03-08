import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import {
  Typography,
} from '@material-ui/core'

const useStyle = makeStyles(theme => ({
  timer: {
    fontWeight: 700,
    fontSize: '48px',
    color: 'green',
    textShadow: '0 0 7px rgba(50, 255, 50, 0.7)',
  },
}))

export const Timer = () => {
  const classes = useStyle();
  const [ time, setTime ] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const showTime = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(showTime);
    }
  });

  return (
    <Typography className={classes.timer} align="center">
      {time}
    </Typography>
  )
}
