import React, { useState, useEffect } from 'react'
import { getGreeting } from '../apiClient'

import Background from './background/Background'
import Mood from './background/Mood'

const App = () => {
  // const [greeting, setGreeting] = useState('')
  // const [count, setCount] = useState(0)
  // const [isError, setIsError] = useState(false)

  // useEffect(() => {
  //   getGreeting()
  //     .then((greeting) => {
  //       console.log(greeting)
  //       setGreeting(greeting)
  //       setIsError(false)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //       setIsError(true)
  //     })
  // }, [count])

  return (
    <>
      <Background />
      <Mood />
    </>
  )
}

export default App
