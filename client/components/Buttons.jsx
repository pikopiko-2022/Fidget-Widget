import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Buttons = () => {
  let [index, setIndex] = useState(0)

  let navigate = useNavigate()
  // const getRandomNumber = (min, max) => {
  //   index = Math.floor(Math.random() * (max - min + 1)) + min
  //   console.log(index)
  //   return parseInt(index)
  // }

  let fidgetArr = ['bouncy-ball', 'drag-box', 'random-clock', 'floaty-ball']

  function handelBack() {
    if (index === 0) {
      setIndex(fidgetArr.length - 1)
    } else {
      setIndex(index - 1)
    }
    navigate(`../${fidgetArr[index]}/`, { replace: true })
  }

  function handelNext() {
    if (index === fidgetArr.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
    navigate(`../${fidgetArr[index]}/`, { replace: true })
  }

  return (
    <>
      {console.log(fidgetArr[index])}
      <button className="button-next" id="next" onClick={handelNext}>
        Next
      </button>
      <button className="button-back" id="back" onClick={handelBack}>
        Back
      </button>
    </>
  )
}

{
  /* <button id="shuffle" onClick={() => setIndex(getRandomNumber())}>
        Shuffle */
}
// </button>
export default Buttons
