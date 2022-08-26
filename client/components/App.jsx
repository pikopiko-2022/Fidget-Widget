import React from 'react'
import Home from './Home'
import Dragbox from './drag-box/Dragbox'
import Stage from './bouncy-ball/Stage'
import { Routes, Route } from 'react-router-dom'

import Background from './background/Background'

import RandomClock from './random-clock/RandomClock'

const App = () => {
  return (
    <>
      <Background>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bouncy-ball" element={<Stage />} />
          <Route path="/drag-box" element={<Dragbox />} />
          <Route path="/random-clock" element={<RandomClock />} />
        </Routes>
      </Background>
    </>
  )
}

export default App
