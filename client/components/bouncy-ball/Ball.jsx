import React, { useState } from 'react'
import { getRandomRadians, getRandomSpeed } from '../utils'

const Ball = ({ initX, initY, color }) => {
  const radius = 10
  const [x, setX] = useState(initX - radius / 2)
  const [y, setY] = useState(initY - radius / 2)
  const [direction, setDirection] = useState(getRandomRadians())
  const [speed, setSpeed] = useState(getRandomSpeed())

  const moveBall = () => {
    // console.log(speed)
    // console.log(direction)
    if (x > 0 && x < window.innerWidth && y > 0 && y < window.innerHeight)
      setDirection((direction) => direction + Math.PI / 2)
    setX((x) => x + speed * Math.cos(direction))
    setY((y) => y + speed * Math.sin(direction))
    // } else clearInterval(moving)
  }
  const moving = setInterval(moveBall, 200)
  return <circle cx={x} cy={y} r={radius} fill={color} />
}

export default Ball
