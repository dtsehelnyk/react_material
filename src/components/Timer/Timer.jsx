import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles(theme => ({
  time: {
    color: 'red',
  },
}))

export const Timer = () => {
  const classes = useStyle();
  const [ time, setTime ] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const showTime = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      console.log(time);
    }, 1000);

    return () => {
      clearInterval(showTime);
    }
  });

  return (
    <div>
      {time}
    </div>
  )
}
