import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Buttons = () => {
  let [index, setIndex] = useState(0)

  // const getRandomNumber = (min, max) => {
  //   index = Math.floor(Math.random() * (max - min + 1)) + min
  //   console.log(index)
  //   return parseInt(index)
  // }

  let fidgetArr = ['bouncy-ball', 'drag-box', 'random-clock', 'floaty-ball']

  function handelBack() {
    if (index === 0) {
      return setIndex(fidgetArr.length - 1)
    } else {
      return setIndex(index - 1)
    }
  }

  function handelNext() {
    if (index === fidgetArr.length - 1) {
      return setIndex(0)
    } else {
      return setIndex(index + 1)
    }
  }

  return (
    <>
      {console.log(fidgetArr[index])}
      <button id="next" onClick={handelNext}>
        Next
      </button>
      <button id="back" onClick={handelBack}>
        Back
      </button>
      {index}
    </>
  )
}

{
  /* <button id="shuffle" onClick={() => setIndex(getRandomNumber())}>
        Shuffle */
}
// </button>
export default Buttons
