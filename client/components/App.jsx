import React from 'react'
import Home from './Home'
import Dragbox from './drag-box/Dragbox'
import Stage from './bouncy-ball/Stage'
import { Routes, Route } from 'react-router-dom'
import Background from './background/Background'

const App = () => {
  return (
    <>
      <Background>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bouncy-ball/" element={<Stage />} />
          <Route path="/drag-box" element={<Dragbox />} />
          {/* <Route path="/widget/:fidget" element={<Fidget />} /> */}
        </Routes>
      </Background>

      {/* {<Dragbox />}
      <Link to="/widget/ball">Ball</Link> |<Link to="/widget/box">box</Link> |
      <Link to="/widget/clock">clock</Link>
      <Header />
      <Widget /> */}
    </>
  )
}

export default App
