import React from 'react'
import bgdVideo from '../../../server/public/video/backgroundImageOne.mp4'

function Background() {
  console.log('Background component called')
  return (
    <video autoPlay loop muted id="video">
      <source src={bgdVideo} type="video/mp4" />
      Your browser does not support this background image.
    </video>
  )
}

export default Background
