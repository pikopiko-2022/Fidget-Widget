import React from 'react'
import Fidget from './Fidget'
import { Routes, Route } from 'react-router-dom'

const Widget = () => {
  return (
    <div>
      <Routes>
        <Route path="/widget/:fidget" element={<Fidget />} />
      </Routes>
    </div>
  )
}
export default Widget
