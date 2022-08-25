import React, { useState } from 'react'

function Mood() {
  const [mood, setMood] = useState('')

  const handleChange = (event) => {
    setMood(event.target.value)
  }

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
    </div>
  )
}

export default Mood
