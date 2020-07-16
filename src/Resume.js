import React, {Fragment} from 'react'
import {Col, Row, Container, ProgressBar,Card} from 'react-bootstrap'
import {FiArrowLeftCircle} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import BodyBackgroundColor from "react-body-backgroundcolor";
import Zoom from 'react-reveal/Zoom'




export default function Resume() {
    return (
        <div>
          <BodyBackgroundColor backgroundColor='#0018A8'>
            <Fragment>
            <div className="nav">
            <Link  as={Link} to="/">
              <FiArrowLeftCircle
              style={{fontSize:'30px', 
                     paddingTop:'5px', 
                     color:'white',
                }}/>
            </Link>
            </div>
            <Container>
             <div className="name">
             <h2><b>Ibe Andyson Andrew</b></h2>
             <h5 style={{color:'#7CB9E8'}}><b>Software Developer</b></h5>
            </div>
            <Zoom>
            <div className="about-me justify-content-left">
             <p>Software Developer with <b>2 year</b> of experience 
             in <b>Web Development</b>. I'm building myself around <b>JavaScript</b> programming language, becuase i love JavaScript as 
             a <b>Front End Web Developer</b>. I have done projects 
             on <b>MERN</b> stack (MongoDB, Express.js, React.js, Node.js). 
             I have work with teams on lot's of projects at my school and 
             in my local developers community. I also have skill 
             in <b>computer repair / maintemamce</b> and <b>basic Networking</b> which
             I was practicing before I learnt coding. I studied <b>Computer Science</b> at <b>The Federal Polytechnic Nekede Owerri Imo State.</b>
             </p>
            </div>
            </Zoom>
            <div className="cv">
               <Row>
                   <Col sm={4} className="my-2 px-2">
                   <Card className=" card">
                    <Card.Body>
                     <Card.Title>
                     <p>
                       <b style={{color:'#7CB9E8'}}>
                         Presonal Info
                          </b>
                           </p>
                            <hr style={{backgroundColor:'#7CB9E8'}}/>
                            </Card.Title>
                            <Card.Text>
                            <Zoom>
                            <div className="info">
                             <b>Nationality</b>
                             <br/>
                             Nigeria
                             <br/>
                             <b>State Of Origin</b>
                             <br/>
                             Imo state
                             <br/>
                             <b>Address</b>
                             <br/>
                             Port Harcourt, River State, Nigeria.
                             <br/>
                             <b>Phone</b>
                             <br/>
                             +234-9033275449.
                             <br/>
                             <b>E-Mail</b>
                             <br/>
                             ibeandyson123@gmail.com
                           </div>
                           </Zoom>
                           </Card.Text>
                         </Card.Body>
                       </Card>
                   </Col>
                   <Col sm={4} className="my-2 px-2">
                           <Card>
                           <Card.Body>
                           <Card.Title>
                           <p>
                            <b style={{color:'#7CB9E8'}}>
                             Education
                           </b>
                           </p>
                           <hr style={{backgroundColor:'#7CB9E8'}}/>
                           </Card.Title>
                           <Card.Text>
                           <Zoom>
                           <div className="edu">
                             <b>Secondary</b>
                             <br/>
                             WASSCE(West African Senior School Certificate Examination)
                             <br/>
                             <b>Higher Education</b>
                             <br/>
                             ND(National Diploma)
                           </div>
                           </Zoom>
                           </Card.Text>
                           </Card.Body>
                           </Card>
                           </Col>
                   
                           <Col sm={4} className="my-2 px-2">
                           <Card>
                           <Card.Body>
                           <Card.Title>
                           <p>
                            <b style={{color:'#7CB9E8'}}>
                             Experience
                           </b>
                           </p>
                           <hr style={{backgroundColor:'#7CB9E8'}}/>
                           </Card.Title>
                           <Card.Text>
                           <Zoom>
                           <div className="expe">
                             <b >Freelancing</b>
                             <br/>
                             so far so good i have been Freelancing
                             for a year. people contact me for
                             jobs and i always get the job done as expected.
                           </div>
                           </Zoom>
                           </Card.Text>
                           </Card.Body>
                           </Card>
                           </Col>
                           <Col sm={4} className="my-2 px-2">
                           <Card>
                           <Card.Body>
                           <Card.Title>
                           <p>
                            <b style={{color:'#7CB9E8'}}>
                             Technical skills
                           </b>
                           </p>
                           <hr style={{backgroundColor:'#7CB9E8'}}/>
                           </Card.Title>
                           <Card.Text>
                           <div className="skills">
                             <b>HTML</b>
                             <br/>
                             <Zoom>
                             <ProgressBar animated now={95}/>
                             </Zoom>
                             <br/>
                             <b>CSS</b>
                             <br/>
                             <Zoom>
                             <ProgressBar animated now={75}/>
                             </Zoom>
                             <br/>
                             <b>JAVASCRIPT</b>
                             <br/>
                             <Zoom>
                             <ProgressBar animated now={78}/>
                             </Zoom>
                             <br/>
                             <b>BOOTSTRAP</b>
                             <br/>
                             <Zoom>
                             <ProgressBar animated now={90}/>
                             </Zoom>
                             <br/>
                             <b>REACT</b>
                             <br/>
                             <Zoom>
                             <ProgressBar animated now={75}/>
                             </Zoom>
                             <br/>
                             <b>VUE</b>
                             <br/>
                             <Zoom>
                             <ProgressBar animated now={70}/>
                             </Zoom>
                             <br/>
                             <b>REACT NATIVE</b>
                             <br/>
                             <Zoom>
                             <ProgressBar animated now={50}/>
                             </Zoom>
                             <br/>
                             <b>REDUX</b>
                             <br/>
                             <Zoom>
                             <ProgressBar animated now={45}/>
                             </Zoom>
                             <br/>
                             <b>FIRE BASE</b>
                             <br/>
                             <Zoom>
                             <ProgressBar animated now={45}/>
                             </Zoom>
                             <br/>
                             <b>NODE</b>
                             <br/>
                             <Zoom>
                             <ProgressBar animated now={50}/>
                             </Zoom>
                             <br/>
                             <b>EXPRESS</b>
                             <br/>
                             <Zoom>
                             <ProgressBar animated now={40}/>
                             </Zoom>
                             <br/>
                             <b>MONGODB</b>
                             <br/>
                             <Zoom>
                             <ProgressBar animated now={40}/>
                             </Zoom>
                             <br/>
                           </div>
                           </Card.Text>
                           </Card.Body>
                          </Card>
                           </Col>
                           <Col sm={4} className="my-2 px-2">
                           <Card className="rounded">
                           <Card.Body>
                           <Card.Title>
                          <p>
                            <b style={{color:'#7CB9E8'}}>
                             Presonal skills
                             </b>
                             </p>
                             <hr style={{backgroundColor:'#7CB9E8'}}/>
                             </Card.Title>
                             <Card.Text>
                             <div className="skills">
                             <b>TEAM WORK</b>
                             <br/>
                             <Zoom>
                             <ProgressBar animated now={80}/>
                             </Zoom>
                             <br/>
                             <b>OUT SPOKEN</b>
                             <br/>
                             <Zoom>
                             <ProgressBar animated now={70}/>
                             </Zoom>
                             <br/>
                             <b>SELF CONTROL</b>
                             <br/>
                             <Zoom>
                             <ProgressBar animated now={95}/>
                             </Zoom>
                             <br/>
                             <b>COMMUNICATION</b>
                             <br/>
                             <Zoom>
                             <ProgressBar animated now={80}/>
                             </Zoom>
                             <br/>
                             <b>SELF LEARNING</b>
                             <br/>
                             <Zoom>
                             <ProgressBar animated now={95}/>
                             </Zoom>
                             <br/>
                             <b>LEARNING</b>
                             <br/>
                             <Zoom>
                             <ProgressBar animated now={80}/>
                             </Zoom>
                             <br/>
                             <b>TEACHING</b>
                             <br/>
                             <Zoom>
                             <ProgressBar animated now={80}/>
                             </Zoom>
                             <br/>
                           </div>
                           </Card.Text>
                           </Card.Body>
                           </Card>
                           </Col>
                           <Col sm={4} className="my-2 px-2">
                   <Card className="">
                   <Card.Body>
                   <Card.Title>
                     <p>
                       <b style={{color:'#7CB9E8'}}>
                        Language
                         </b>
                          </p>
                           <hr style={{backgroundColor:'#7CB9E8'}}/>
                            </Card.Title>
                            <Card.Text>
                             <div className="language">
                             <b>ENGLISH</b>
                             <br/>
                             <Zoom>
                             <ProgressBar animated now={80}/>
                             </Zoom>
                             <br/>
                             <b>IGBO</b>
                             <br/>
                             <Zoom>
                             <ProgressBar animated now={95}/>
                             </Zoom>
                           </div>
                           </Card.Text>
                           </Card.Body>
                           </Card>
                           </Col>
                           <br/>
                </Row>
            </div>
           </Container>
          </Fragment>
          </BodyBackgroundColor>
        </div>
    )
}
