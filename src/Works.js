import React, {Fragment} from 'react'
import {Col, Row, Container,Card,P} from 'react-bootstrap'

import {Link} from 'react-router-dom'
import BodyBackgroundColor from "react-body-backgroundcolor";
import {FiArrowLeftCircle} from 'react-icons/fi'
import Zoom from 'react-reveal/Zoom'
import intercom from './image/intercom.jpg'
import houseman from './image/houseman.jpg'
import power from './image/power.jpg'
import farm from './image/farm.jpg'
import leaf from './image/leaf.jpg'




export default function Works() {
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
            <div className="works">
               <Container>
                   <Row>
                   <Col sm={4}  className="my-2 px-2">
                   <Card>
                       <Zoom>
                       <img src={intercom} style={{height:'300px'}}/> 
                       </Zoom> 
                       <Card.Body>
                           <Card.Text>
                            <Zoom>
                              <div className="des">
                               This is an online interview system with face detection. Built with
                                React, Node.js / Express.js and MongoDB
                               </div>
                             </Zoom> 
                           </Card.Text>
                        </Card.Body>         
                   </Card>
                   </Col>
                   <Col sm={4}  className="my-2 px-2">
                   <Card>
                       <Zoom>
                       <img src={houseman} style={{height:'300px'}}/> 
                       </Zoom> 
                       <Card.Body>
                           <Card.Text>
                            <Zoom>
                              <div className="des">
                               This is an online property selling, buying & renting web app for house and land. Built with React and Firebase
                               </div>
                             </Zoom> 
                           </Card.Text>
                        </Card.Body>         
                   </Card>
                   </Col>
                   <Col sm={4}  className="my-2 px-2">
                   <Card>
                       <Zoom>
                       <img src={leaf} style={{height:'300px'}}/> 
                       </Zoom> 
                       <Card.Body>
                           <Card.Text>
                            <Zoom>
                              <div className="des">
                                An NGO website. Built with
                                Bootstrap, Html, Css and Node.js / Express.js and MongoDB
                               </div>
                             </Zoom> 
                           </Card.Text>
                        </Card.Body>         
                   </Card>
                   </Col>
                   </Row>
                   <Row>
                   <Col sm={4}  className="my-2 px-2">
                   <Card>
                       <Zoom>
                       <img src={farm} style={{height:'300px'}}/> 
                       </Zoom> 
                       <Card.Body>
                           <Card.Text>
                            <Zoom>
                              <div className="des">
                                A mushroom farm website. Built with
                                Bootstrap, Html, Css
                               </div>
                             </Zoom> 
                           </Card.Text>
                        </Card.Body>         
                   </Card>
                   </Col>
                   <Col sm={4}  className="my-2 px-2">
                   <Card>
                       <Zoom>
                       <img src={power} style={{height:'300px'}}/> 
                       </Zoom> 
                       <Card.Body>
                           <Card.Text>
                            <Zoom>
                              <div className="des">
                                A graphic / web development company website. Built with
                                w3.css, Html, Css and Javascript
                               </div>
                             </Zoom> 
                           </Card.Text>
                        </Card.Body>         
                   </Card>
                   </Col>
                   </Row>
               </Container>
            </div>
            </Fragment>

            </BodyBackgroundColor>
        </div>
    )
}
