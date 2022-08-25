import React from 'react'
import bgVidOne from '../../../server/public/video/backgroundImageOne.mp4'
import bgVidTwo from '../../../server/public/video/backgroundImageTwo.mp4'
import bgVidThree from '../../../server/public/video/backgroundImageThree.mp4'
import bgVidFour from '../../../server/public/video/backgroundImageFour.mp4'
import bgVidFive from '../../../server/public/video/backgroundImageFive.mp4'

let mood = ''
let video = ''

switch (mood) {
  case 'Happy':
    video = bgVidOne
    break
  case 'Annoyed':
    video = bgVidTwo
    break
  case 'Pensive':
    video = bgVidThree
    break
  case 'Peaceful':
    video = bgVidFour
    break
  default:
    video = bgVidFive
}

function Background({ children }) {
  return (
    <div>
      <div className="video-container">
        <h1>Fidget Widget</h1>
        <video src={video} autoPlay loop muted></video>
        <div className="fidget-container">{children}</div>
      </div>
    </div>
  )
}

export default Background
