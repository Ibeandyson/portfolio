import React, {Fragment} from 'react'

import pic from './image/pic.jpg'
import { Button,Row, Col, Container} from 'react-bootstrap';
import ExampleComponent from "react-rounded-image";
import BodyBackgroundColor from "react-body-backgroundcolor"
import Fade from 'react-reveal/Fade'
import Rotate from 'react-reveal/Rotate'
import Bounce from 'react-reveal/Bounce'
import Zoom from 'react-reveal/Zoom'
import { FaFacebook,FaLinkedin,FaGithub,FaTwitter} from 'react-icons/fa'
import {IoLogoWhatsapp} from 'react-icons/io'
import {MdEmail} from 'react-icons/md'
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {Link} from 'react-router-dom'





export default function Landing() {
  return (
    <BodyBackgroundColor backgroundColor='#0018A8'>
    <div className="my-componet">
<Fragment>
  <center >
    <Fade>
      <Container>
        <Row className="justify-content-md-center">
          <Col sm={12}>
            <Rotate>
           <div className="image">
            <ExampleComponent 
             image={pic} 
             roundedColor="#7CB9E8"
             imageWidth="200"
             imageHeight="200"
             roundedSize="20"
            />
        </div>
        </Rotate>
       </Col>
      </Row>
      <Row style={{paddingTop:'5%'}}>
        <Col sm={12}>
          <Bounce>
          <div className="text-white">
          Hello! I'm <b>Ibe Andyson Andrew,</b><br/> a passionate <b>Front-end web and mobile app developer</b> dedicated  to build
          a nice and friendly user interface.<br/>
          I have  experience on <b>UX Design</b> which make's me able to build a friendly
          user interface. Also I have experience on <b>server-side</b> rendering, 
          <br/> <b>Back-end</b> development, <b>Database</b> setup and administration.
          </div>
          </Bounce>
       </Col>
      </Row>
      <Row>
        <Col sm={12} className="pt-5">
          <Bounce>
          <Fragment>
          <Link  as={Link} to="/Works"><Button rounded variant="outline-primary" size="sm" color="light"
           style={{borderRedius:"50px 50px 50px 50px"}}>
             works Done
             </Button>
             </Link>
             <Link  as={Link} to="/Resume"><Button variant="outline-primary" size="sm" color="light" 
          style={{borderRedius:"50px 50px 50px 50px"}}>
            My Resume
            </Button>
            </Link>
          </Fragment>
          </Bounce>
        </Col>
      </Row>
      <Row className=" pt-5">
        <Col sm={12}>
          <Zoom>
         <a href="https://www.facebook.com/profile.php?id=100025657035866"><FaFacebook style={{fontSize:'20px',color:'#7CB9E8'}}/></a>
         <a href="https://wa.me/+2349033275449"><IoLogoWhatsapp style={{fontSize:'20px',color:'#7CB9E8'}}/></a>
         <a href="mailto:ibeandyson123@gmail.com?subject=subject text"><MdEmail style={{fontSize:'20px',color:'#7CB9E8'}}/></a>
         <a href="https://www.linkedin.com/in/ibe-andyson-b290ba176/"><FaLinkedin style={{fontSize:'20px',color:'#7CB9E8'}}/></a>
         <a href="https://github.com/Ibeandyson"><FaGithub style={{fontSize:'20px',color:'#7CB9E8'}}/></a>
         <a href="https://twitter.com/AndysonIbe"><FaTwitter style={{fontSize:'20px',color:'#7CB9E8'}}/></a>
         </Zoom>
         </Col>
         </Row>
    </Container>
    </Fade>
    </center>
      </Fragment>
    </div>
    </BodyBackgroundColor>
  )
}