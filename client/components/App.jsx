import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Background from './background/Background'
import Stage from './bouncy-ball/Stage'
import Dragbox from './drag-box/Dragbox'
import RandomClock from './random-clock/RandomClock'

const App = () => {
  return (
    <>
      <Background>
        <Routes>
          <Route path="/bouncy-ball/" element={<Stage />} />
          <Route path="/drag-box" element={<Dragbox />} />
          <Route path="/random-clock" element={<RandomClock />} />
        </Routes>
      </Background>
    </>
  )
}

export default App
