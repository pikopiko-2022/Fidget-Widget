import React, { useState } from 'react'
import Ball from './Ball'
import { getRandomColor } from './utils'

const Stage = () => {
  const [balls, setBalls] = useState([])
  const createNewBall = (evt) => {
    evt.preventDefault()
    console.log(evt)
    setBalls([
      ...balls,
      { x: evt.pageX, y: evt.pageY, color: getRandomColor() },
    ])
  }
  return (
    <div
      onContextMenu={createNewBall}
      style={{
        backgroundColor: 'black',
        color: 'white',
        width: '100vw',
        height: '100vh',
      }}
    >
      <div style={{ margin: 'auto', width: '100%' }}>
        Right click to create a new ball
      </div>
      <svg width="100%" height="100%">
        {balls.map((ball, i) => (
          <Ball key={i} initX={ball.x} initY={ball.y} color={ball.color} />
        ))}
      </svg>
    </div>
  )
}

export default Stage
