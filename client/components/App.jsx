import React, { useState, useEffect } from 'react'
import { getGreeting } from '../apiClient'
import Dragbox from './drag-box/Dragbox'
import Header from './Header'
import Widget from './Widget'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <>
      {count}
      <h1>{greeting}</h1>
      {isError && (
        <p style={{ color: 'red' }}>
          There was an error retrieving the greeting.
        </p>
      )}
      <button onClick={() => setCount(count + 1)}>Click</button>
      {<Dragbox />}
      <Link to="/widget/ball">Ball</Link> |<Link to="/widget/box">box</Link> |
      <Link to="/widget/clock">clock</Link>
      <Header />
      <Widget />
    </>
  )
}

export default App
