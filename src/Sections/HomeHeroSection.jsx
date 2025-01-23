import React from 'react'
import Home1 from '../assets/Home1.jpg'
const HomeHeroSection = () => {
  return (
    <div style={{
        backgroundImage: `url(${Home1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "100vh",
        color:"#000",
        textAlign:"center",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        display:"flex"
        
      }}>
      
    </div>
  )
}

export default HomeHeroSection
