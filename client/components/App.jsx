import React from 'react'
import Header from './Header'
import Widget from './Widget'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Link to="/widget/ball">Ball</Link> |<Link to="/widget/box">box</Link> |
      <Link to="/widget/clock">clock</Link>
      <Header />
      <Widget />
    </>
  )
}

export default App
