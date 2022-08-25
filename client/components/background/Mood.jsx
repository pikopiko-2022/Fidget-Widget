import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Mood({ mood, handleChange }) {
  return (
    <div className="mood-menu">
      <label>
        What is your mood?
        <select value={mood} onChange={handleChange}>
          <option value="happy">Happy</option>
          <option value="annoyed">Annoyed</option>
          <option value="pensive">Pensive</option>
          <option value="peaceful">Peaceful</option>
        </select>
      </label>
      <p>You mood is {mood}!</p>
      <Link to="/bouncy-ball">Bouncy ball</Link>
      <Link to="/drag-box">Drag Box</Link>
    </div>
  )
}

export default Mood
