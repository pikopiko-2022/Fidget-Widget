import React, { useState } from 'react'
import { getRandomNumber, getRandomRadians } from '../utils'

const Ball = ({ initX, initY, color, radius }) => {
  const [x, setX] = useState(initX - radius / 2)
  const [y, setY] = useState(initY - radius / 2)
  const [direction, setDirection] = useState(getRandomRadians())
  const [speed, setSpeed] = useState(getRandomNumber(10, 200))
  let moving

  const moveBall = () => {
    // if (!(x > 0 && x < window.innerWidth && y > 0 && y < window.innerHeight))
    //   setDirection((direction) => direction + Math.PI / 2)
    setX((x) => x + speed * Math.cos(direction))
    setY((y) => y + speed * Math.sin(direction))
    clearInterval(moving)
  }
  moving =
    x > 0 && x < window.innerWidth && y > 0 && y < window.innerHeight
      ? setInterval(moveBall, 200)
      : null
  return <circle cx={x} cy={y} r={radius} fill={color} />
}

export default Ball
