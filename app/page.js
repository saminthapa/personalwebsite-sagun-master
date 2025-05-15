import React from 'react'
import ImageSlider from './ImageSlider'
import AboutSection from './AboutSection'
import Certificates from './Certificates'
import Location from './Location'

const page = () => {
  return (
    <div>

      {/* <div className="flex justify-center items-center min-h-screen">
      <ImageSlider />
      </div> */}
      
    <AboutSection/>
    <Certificates/>
    <Location/>
    </div>
  )
}

export default page
