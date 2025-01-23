import React from 'react'
import Home1 from '../assets/Home1.jpg'
const HomeHeroSection = () => {
  return (
    <div style={{
        backgroundImage: `url(${Home1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#000",
        textAlign: "center",
      }}>
      
    </div>
  )
}

export default HomeHeroSection
