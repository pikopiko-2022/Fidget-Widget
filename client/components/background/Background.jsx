import React, { useState } from 'react'
import bgVidOne from '../../../server/public/video/backgroundImageOne.mp4'
import bgVidTwo from '../../../server/public/video/backgroundImageTwo.mp4'
import bgVidThree from '../../../server/public/video/backgroundImageThree.mp4'
import bgVidFour from '../../../server/public/video/backgroundImageFour.mp4'
import bgVidFive from '../../../server/public/video/backgroundImageFive.mp4'
import Mood from './Mood'

function Background({ children }) {
  const [mood, setMood] = useState('')
  const [video, setVideo] = useState(bgVidFive)

  const handleChange = (event) => {
    setMood(event.target.value)
    switch (event.target.value) {
      case 'happy':
        setVideo(bgVidOne)
        break
      case 'annoyed':
        setVideo(bgVidTwo)
        break
      case 'pensive':
        setVideo(bgVidThree)
        break
      case 'peaceful':
        setVideo(bgVidFour)
        break
      default:
        setVideo(bgVidFive)
    }
  }

  return (
    <div>
      <div className="video-container">
        <h1>Fidget Widget</h1>
        <video src={video} autoPlay loop muted></video>
        <div className="fidget-container">{children}</div>
        <Mood mood={mood} handleChange={handleChange} />
      </div>
    </div>
  )
}

export default Background
