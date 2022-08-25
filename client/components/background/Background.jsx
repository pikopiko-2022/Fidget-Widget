import React from 'react'
import bgdVideo from '../../../server/public/video/backgroundImageOne.mp4'

function Background() {
  console.log('Background component called')
  return (
    <div className="video-container">
      <video src={bgdVideo} autoPlay loop muted></video>
      <div className="fidget-container">
        <p>Fidget Widget</p>
      </div>
    </div>
  )
}

export default Background
