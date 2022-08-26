import React, { useState } from 'react'
import { getRandomColor } from '../utils'
import Bubble from './Bubble'

const Stage = () => {
  const [bubbles, setBubbles] = useState([])
  const [nextId, setNextId] = useState(0)

  const createNewBubble = (evt) => {
    evt.preventDefault()
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
        Right click to make a bubble // Left click to pop it!
      </div>
      <svg width="100%" height="100%">
        {bubbles.map((bubble) => (
          <Bubble
            key={bubble.id}
            initX={bubble.x}
            initY={bubble.y}
            color={bubble.color}
            killBubble={() => killBubble(bubble.id)}
          />
        ))}
      </svg>
    </div>
  )
}

export default Stage
