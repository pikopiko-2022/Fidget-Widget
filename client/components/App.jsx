import React from 'react'
import Dragbox from './drag-box/Dragbox'
import Header from './Header'
import Widget from './Widget'
import Stage from './bouncy-ball/Stage'
import { Link, Routes, Route } from 'react-router-dom'
import Background from './background/Background'
import Mood from './background/Mood'

const App = () => {
  return (
    <>
      <Background>
        <Routes>
          <Route path="/bouncy-ball/" element={<Stage />} />
          <Route path="/drag-box" element={<Dragbox />} />
          {/* <Route path="/widget/:fidget" element={<Fidget />} /> */}
        </Routes>
      </Background>
      <Mood />

      {/* {<Dragbox />}
      <Link to="/widget/ball">Ball</Link> |<Link to="/widget/box">box</Link> |
      <Link to="/widget/clock">clock</Link>
      <Header />
      <Widget /> */}
    </>
  )
}

export default App
