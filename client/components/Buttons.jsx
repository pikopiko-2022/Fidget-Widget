import React, { useState } from 'react'

const Buttons = () => {
  let [index, setIndex] = useState('')

  const getRandomNumber = (min, max) => {
    index = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(index)
    return parseInt(index)
  }

  let fidgetArr = ['bouncy-ball', 'drag-box']

  return (
    <>
      <button id="next" onClick={() => setIndex(parseInt(index + 1))}>
        Next
      </button>
      <button id="back" onClick={() => setIndex(parseInt(index - 1))}>
        Back
      </button>
      {/* <button
        id="shuffle"
        onClick={() => }{}
      >
        Shuffle
      </button> */}
      {index}
    </>
  )
}

export default Buttons
