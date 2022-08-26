import React from 'react'

function Mood({ mood, handleChange }) {
  return (
    <>
      <div>
        <label>
          <select className="select" value={mood} onChange={handleChange}>
            <option selected>Mood</option>
            <option value="happy">Happy</option>
            <option value="annoyed">Annoyed</option>
            <option value="pensive">Pensive</option>
            <option value="peaceful">Peaceful</option>
          </select>
        </label>
      </div>
    </>
  )
}

export default Mood
