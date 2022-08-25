import React, { useState } from 'react'

const initialMood = { mood: '' }

function Mood({ currentMood }) {
  const [data, setData] = useState(initialMood)
  const { mood } = data

  function handleChange(event) {
    setData({
      ...data,
      [event.target.mood]: event.target.value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    currentMood(data)
    setData(initialMood)
  }
  return (
    <div>
      <h3>Mood</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="mood">Mood</label>
          <input
            type="text"
            id="mood"
            name="mood"
            value={mood}
            onChange={handleChange}
          />
        </div>

        <input type="submit" />
        <button
          onClick={(e) => {
            e.preventDefault()
            setData(initialMood)
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  )
}

export default Mood
