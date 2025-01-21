import React from 'react'
import '../Styles/HomeContent.css'
const HomeContent = () => {
  return (
    <div style={{
         display: "grid",
         gridTemplateColumns: "repeat(2, 1fr)",
         gridTemplateRows: "80vh auto 100vh 100vh",
         gap: "10px",
         width: "100%",
      }}>
      {/* Row 1 */}
      <div className="row-hcontent">
        <h1 style={{ color: '#51c24c' }}>Intenernships at SLT</h1>
        <h3 style={{ fontWeight: "normal ", fontSize: "20px", fontStyle: "italic"}}>
        Embark on a transformative journey with an internship at SLT!
        <br />Dive into real-world projects, learn from experienced mentors, and build skills that shape your career. 
        <br />Whether you are exploring cutting-edge technology, mastering industry best practices, or expanding your professional network, SLT offers the perfect platform to grow. 
        <br /><b>Join us to gain invaluable experience and take the first step toward a bright future!</b>
         
        </h3>
        <button  className="primary-hbutton">See Available Intenernships Positions</button>
      </div>
      <div className="text-hcenter">
        <h2 style={{ fontWeight: "normal" }}>
          We empower staff to be agile, collaborative and trustworthy, giving
          you experiences that instill pride and making moments that matter.
          Careers with Team Purple provide you with the opportunity to work
          collaboratively towards making an impact in the real world.
        </h2>
        <h2 style={{ fontWeight: "normal" }}>
          Join us to unlock a world of opportunities.
        </h2>
      </div>
   
      
    </div>
  )
}

export default HomeContent
