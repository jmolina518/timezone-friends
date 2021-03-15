import React, { useState, useEffect } from 'react'

export const DateTime = ({ timezone }) => {
  var [date, setDate] = useState(new Date())

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {
      clearInterval(timer)
    }
  })

  return (
    <div>
      <p> Date : {date.toLocaleDateString('en-US')}</p>
      <p> Time : {date.toLocaleTimeString('es-ES', { timeZone: timezone })}</p>
    </div>
  )
}

export default DateTime
