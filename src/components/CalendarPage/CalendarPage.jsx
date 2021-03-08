import React, { useState } from 'react'
import Calendar from 'react-calendar'
import './CalendarPage.scss'

export const CalendarPage = () => {
  const [ date, onChange ] = useState(new Date());

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={date}
      />
    </div>
  )
}
