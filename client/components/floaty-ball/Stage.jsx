import React, { useState } from 'react'
import balloonCreateFile from '../../../server/public/sfx/balloon-beep.wav'
import balloonPopFile from '../../../server/public/sfx/balloon-pop.wav'
import { getRandomColor, getRandomNumber } from '../utils'
import Ball from './Ball'
import Bubble from './Bubble'

const FloatyStage = () => {
  const [bubbles, setBubbles] = useState([])
  const [balls, setBalls] = useState([])
  const [nextId, setNextId] = useState(0)
  const bubblePop = new Audio(balloonPopFile)
  const bubbleCreate = new Audio(balloonCreateFile)

  const createNewBubble = (evt) => {
    evt.preventDefault()
    bubbleCreate.play()
    setBubbles([
      ...bubbles,
      {
        id: nextId,
        x: evt.nativeEvent.offsetX,
        y: evt.nativeEvent.offsetY,
        color: getRandomColor({}),
      },
    ])
    setNextId((id) => id + 1)
  }

  const popBubble = (evt, id) => {
    bubblePop.play()
    killBubble(id)
    const numberOfBalls = getRandomNumber(1, 50)
    const newBalls = Array.from({ length: numberOfBalls }).map(() => ({
      x: evt.nativeEvent.offsetX,
      y: evt.nativeEvent.offsetY,
      color: getRandomColor({ opacity: 100 }),
      radius: getRandomNumber(2, 15),
    }))
    console.log(newBalls)
    setBalls((balls) => [...balls, ...newBalls])
  }

  const killBubble = (id) => {
    setBubbles((bubbles) => bubbles.filter((bubble) => bubble.id !== id))
  }

  return (
    <div
      onContextMenu={createNewBubble}
      style={{
        backgroundColor: 'black',
        color: 'white',
        width: '100%',
        height: '100%',
      }}
    >
      <div style={{ margin: 'auto', width: '100%' }}>
        Right click to create a new ball
      </div>
      <svg width="100%" height="100%">
        {balls.map((ball, index) => (
          <Ball
            key={index}
            initX={ball.x}
            initY={ball.y}
            color={ball.color}
            radius={ball.radius}
          />
        ))}
        {bubbles.map((bubble) => (
          <Bubble
            key={bubble.id}
            initX={bubble.x}
            initY={bubble.y}
            color={bubble.color}
            popBubble={(evt) => popBubble(evt, bubble.id)}
          />
        ))}
      </svg>
    </div>
  )
}

export default FloatyStage
