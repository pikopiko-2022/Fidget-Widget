import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Background from './background/Background'
import Stage from './bouncy-ball/Stage'
import Dragbox from './drag-box/Dragbox'
import FloatyStage from './floaty-ball/Stage'

const App = () => {
  return (
    <>
      <Background>
        <Routes>
          <Route path="/bouncy-ball/" element={<Stage />} />
          <Route path="/drag-box" element={<Dragbox />} />
          <Route path="/floaty-ball" element={<FloatyStage />} />
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
