import React from 'react'
import '../Styles/HomeContent.css'
import Footer from '../Components/Footer'
import Trainer from '../assets/Trainer.png'
import Trainer2 from '../assets/Trainer2.png'
import ProjectManager from '../assets/HomecContent/ProjectManager.png'
import Java from '../assets/HomecContent/Java.jpg'
import AI from '../assets/HomecContent/AI.jpg'
import BA from '../assets/HomecContent/BA.jpg'
import DevOps from '../assets/HomecContent/DevOps.jpg'
import Phython from '../assets/HomecContent/Phython.jpg'
import HTML from '../assets/HomecContent/HTML.jpg'
import UIUX from '../assets/HomecContent/UIUX.jpg'
import WordPress from '../assets/HomecContent/WordPress.jpg'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'

const HomeContent = () => {
  return (
    <div>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridTemplateRows: "auto",
      }}>
        <div className="row-hcontent">
          <h1 style={{ color: '#51c24c' }}>Internships at SLT</h1>
          <h3 style={{ fontWeight: "normal", fontSize: "20px", fontStyle: "italic", color: 'black' }} className='start-h3-style'>
            Embark on a transformative journey with an internship at SLT!
            <br />Dive into real-world projects, learn from experienced mentors, and build skills that shape your career.
            <br />Whether you are exploring cutting-edge technology, mastering industry best practices, or expanding your professional network, SLT offers the perfect platform to grow.
            <br /><b>Join us to gain invaluable experience and take the first step toward a bright future!</b>
          </h3>
        </div>
        <div className='himage-container'>
          <img src={Trainer} alt="Trainer" className='Trainer-style' />
        </div>
      </div>
      {/* Row 2 */}
      <div className='trainer2-flex'>
        <img src={Trainer2} alt="Trainer2" className='Trainer2-style' style={{ width: "100%", height: "100%", }} />
      </div>
      {/* Row 3 */}
      <div className='about-trainer'>
        <h1 style={{ color: 'rgba(32, 63, 121, 0.8)' }} className='about-trainer-h1'>About Trainer</h1>
        <h3 style={{ fontWeight: "normal", fontSize: "20px", fontStyle: "italic" }} className='about-trainer-h3'>
          <p>
            Our trainers are a group of dedicated professionals with expertise in various fields, working together to ensure that every individual receives the highest quality training experience.
            They specialize in areas such as technology, leadership, communication, and professional development, tailoring their approach to meet the diverse needs of trainees.
            <br />At SLT-Mobitel, our trainers play a pivotal role in preparing individuals for the fast-evolving telecommunications and IT industry.
            Equipped with in-depth knowledge of the latest advancements, they provide hands-on guidance in areas such as networking, digital transformation, customer service, and technical operations.
            Their commitment to excellence ensures that every trainee is empowered with the skills and confidence needed to excel in their roles.
            <br />Our trainers are not just educators but mentors who inspire and motivate, making learning an enriching and rewarding journey for all. Together, they uphold the values of professionalism, innovation, and growth, which are at the heart of SLT-Mobitel’s mission.
          </p>
        </h3>
      </div>
      {/* Row 4 */}
      <h2 style={{ color: 'rgba(32, 63, 121, 0.8)' }} className='card-flex-h2'>Internship Roles</h2>
      <div className='card-flex'>
        {/* Card 1 */}
        <div className='card 1'>
          <Card sx={{ maxWidth: 368 }}>
            <CardMedia
              component="img"
              height="250"
              image={ProjectManager}
              alt="ProjectManager"
              sx={{objectFit: 'fill'}}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Project Manager
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Project managers (PMs) are professionals responsible for planning, organizing, and overseeing the successful execution of projects within defined timelines, budgets, and scopes. 
              They act as the bridge between the team and stakeholders, ensuring proper communication and resource allocation. 
              A good PM ensures that goals are met efficiently while managing risks and changes.
              </Typography>
            </CardContent>
          </Card> 
        </div>
        {/* Card 2 */}
        <div className='card 2'>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="250"
              image={Java}
              alt="Java"
              sx={{objectFit: 'fill'}} 
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Java Developer
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Java is a versatile, platform-independent programming language widely used for building robust, secure, and high-performance applications. 
              It’s the backbone of enterprise applications, Android development, and server-side technologies. 
              With its "write once, run anywhere" capability, Java remains a popular choice for developers worldwide.
              </Typography>
            </CardContent>
          </Card>
        </div>
        {/* Card 3 */}
        <div className='card 3'>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="250"
              image={AI}
              alt="AI"
              sx={{objectFit: 'fill'}}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                AI 
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Artificial Intelligence (AI) enables machines to mimic human intelligence, performing tasks like learning, problem-solving, and decision-making. 
              It powers applications like chatbots, image recognition, and autonomous vehicles, transforming industries and driving innovation globally. 
              AI continues to revolutionize how we work and interact with technology.
              </Typography>
            </CardContent>
          </Card>
        </div>
        {/* Card 4 */}
        <div className='card 4'>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="250"
              image={BA}
              alt="Business Analyst"
              sx={{objectFit: 'fill'}}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Business Analyst
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Business analysts focus on identifying and solving business problems by gathering and analyzing requirements, then translating them into technical or functional solutions. 
              They act as a liaison between stakeholders and technical teams, ensuring the project aligns with business objectives. 
              BAs are key to improving processes, strategies, and outcomes.
              </Typography>
            </CardContent>
          </Card>
        </div> 
        {/* Card 5  */}
        <div className='card 5'>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="250"
              image={DevOps}
              alt="DevOps"
              sx={{objectFit: 'fill'}}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                DevOps Engineer
              </Typography>
              <Typography variant="body2" color="text.secondary">
              DevOps is a set of practices, tools, and a cultural philosophy that promotes collaboration between development and operations teams. 
              It focuses on automating and integrating processes to ensure faster, more reliable software delivery. 
              Key concepts include CI/CD (Continuous Integration and Continuous Delivery), infrastructure as code, and monitoring systems.
              </Typography>
            </CardContent>
          </Card>
        </div>
        {/* Card 6 */}
        <div className='card 6'>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="250"
              image={Phython}
              alt="Phython"
              sx={{objectFit: 'fill'}}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Phython
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Python is a versatile, beginner-friendly programming language widely used in web development, data science, artificial intelligence, and automation. 
              Its clean syntax and extensive libraries make it a popular choice for both beginners and professionals. 
              Python is known for enhancing productivity and simplifying complex tasks.
              </Typography>
            </CardContent>
          </Card>
        </div>
        {/* Card 7 */}
        <div className='card 7'>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="250"
              image={HTML}
              alt="HTML"
              sx={{objectFit: 'fill'}}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                HTML
              </Typography>
              <Typography variant="body2" color="text.secondary">
              HTML is the standard language for creating and structuring web pages. 
              It uses simple tags to define elements like headings, paragraphs and etc. 
              As the foundation of web development, HTML is essential for building and presenting content online.
              It works seamlessly with CSS and JavaScript to create interactive and visually appealing websites.
              </Typography>
            </CardContent>
          </Card>
        </div>
        {/* Card 8 */}
        <div className='card 8'>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="250"
              image={UIUX}
              alt="UIUX"
              sx={{objectFit: 'fill'}}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                UI/UX Designer
              </Typography>
              <Typography variant="body2" color="text.secondary">
              UI (User Interface) and UX (User Experience) design focus on creating intuitive, visually appealing, and functional interfaces for digital products. 
              UI emphasizes the visual aspects, such as layout, colors, and typography, while UX focuses on the user's overall interaction and experience. 
              Together, they aim to improve usability and satisfaction.
              </Typography>
            </CardContent>
          </Card>
        </div>
        {/* Card 9 */}
        <div className='card 8'>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="250"
              image={WordPress}
              alt="WordPress"
              sx={{objectFit: 'fill'}}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                WordPress Developer
              </Typography>
              <Typography variant="body2" color="text.secondary">
              WordPress is a powerful open-source content management system (CMS) used to create and manage websites. 
              Known for its ease of use and flexibility, it powers millions of websites globally, ranging from blogs to e-commerce platforms. 
              With thousands of plugins and themes, WordPress allows users to build feature-rich websites without extensive coding.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>  
      {/* Footer */}
      <div className='hfooter-container'>
        <Footer />
      </div>
    </div>
  )
}

export default HomeContent
