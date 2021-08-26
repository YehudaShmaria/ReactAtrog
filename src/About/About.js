import { Jumbotron,Button,Card,Row,Col,Tab,Tabs,Container } from "react-bootstrap"
import './about.css'


const AboutCom = ()=>
{
    return(
        <div className="Test">

            <Container fluid>
            <h1 style={{backgroundColor:'rgb(37, 94, 37)',color:'white'}}><b>About Us</b></h1>
                <Row style={{marginTop:'20px'}}>
                    <Col className="w3-animate-left" md={7}>
                        <div style={{margin:'2rem auto', width:'80%'}}>
                            <h1 className="bg-warning rounded"><b><cite>A little story...</cite></b></h1>
                            <p style={{fontSize:'16px'}}>
                               Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration. Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.
                            </p>
                        </div>
                       
                    </Col>
                    <Col className="bg-success w3-animate-right"  style={{opacity:'0.9'}} md={5}>
                        <Tabs className="text-white" defaultActiveKey="home" id="uncontrolled-tab-example">
                            <Tab variant="primary" eventKey="home" title="Home">
                                <div className="bg-white rounded">
                                  <h1>Test to home</h1>
                                </div>
                            </Tab>
                            <Tab eventKey="profile" title="Profile">
                            <div className="bg-white rounded">
                                  <h1>Test to Profile</h1>
                                </div>
                            </Tab>
                            <Tab eventKey="contact" title="Contact">
                            <div className="bg-white rounded">
                                  <h1>Test to Contact</h1>
                                </div>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>

                <hr/>
        <Row style={{marginBottom:'40px'}}>
             <Col className="w3-animate-right" sm={12} md={3}>
             <Card style={{ width: '17.3rem'}}>
                 <div className="img__wrap">
                     <Card.Img variant="top" src="https://drive.google.com/thumbnail?id=18Mb36PGENUPLDndIKS8NBa8KkDUNFVbE" />
                     <div className="img__description_layer">
                         <p className="img__description">This image looks super neat.</p>
                     </div>
                 </div>
                 
                 <Card.Body>
                     <Card.Title>Chaim</Card.Title>
                     <Card.Title>Chaim</Card.Title>
                     <Button variant="link" variant="dark" href="tel:+972584681758">Call Me</Button>
                 </Card.Body>
                 </Card>
             </Col>

             <Col className="w3-animate-zoom" md={6}>
                 <div style={{backgroundColor:'greenyellow'}} className="rounded text-info">
                     <h1 style={{margin:'20px'}}><cite>We have wonderful staff at your service, so do not hesitate in any question just contact us !!!</cite></h1>
                 </div>
               
             </Col>

             <Col className="w3-animate-left" sm={12} md={3}>
                 <Card style={{ width: '17.3rem'}}>
                 <div className="img__wrap">
                     <Card.Img variant="top" src="https://drive.google.com/thumbnail?id=18JT_u3Dm73Pnyuo2tV2HEqDLxVhNpzA3"/>
                     <div className="img__description_layer">
                         <p className="img__description">This image looks super neat.</p>
                     </div>
                 </div>
                 <Card.Body>
                     <Card.Title>Yehuda</Card.Title>
                     <Card.Title>Yehuda</Card.Title>
                     <Button variant="link" variant="dark" href="tel:+972584681758">Only WhatsApp</Button>
                 </Card.Body>
                 </Card>
             </Col>

         </Row>
    </Container>

            {/* <Container fluid>

            <Jumbotron fluid className="w3-animate-top" style={{backgroundColor:'rgb(37, 94, 37)',opacity:'0.9'}}>
                <div style={{padding:"30px",textAlign:'center',color:'white'}}>
                    <h1>About Us</h1>
                    <h3>Welcome To our About Page</h3>
                </div>
            </Jumbotron>

            <Row>
             

                <Col className="w3-animate-zoom" sm={12} md={6}>
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                    <Tab variant="primary" eventKey="home" title="Home">
                       <h1>Test to home</h1>
                    </Tab>
                    <Tab eventKey="profile" title="Profile">
                    <h1>Test to Profile</h1>
                    </Tab>
                    <Tab eventKey="contact" title="Contact">
                    <h1>Test to Contact</h1>
                    </Tab>
                </Tabs>
                </Col>
                
                <Col className="w3-animate-left" sm={4} md={3}>
                <Card style={{ width: '17.3rem'}}>
                    <div className="img__wrap">
                        <Card.Img variant="top" src="https://drive.google.com/thumbnail?id=18JT_u3Dm73Pnyuo2tV2HEqDLxVhNpzA3" />
                        <div className="img__description_layer">
                            <p className="img__description">This image looks super neat.</p>
                        </div>
                    </div>
                    
                    <Card.Body>
                        <Card.Title>Chaim</Card.Title>
                        <Card.Title>Chaim</Card.Title>
                        <Button variant="link" variant="dark" href="tel:+972584681758">Call Me</Button>
                    </Card.Body>
                    </Card>
                </Col>

                <Col className="w3-animate-right" sm={4} md={3}>
                    <Card style={{ width: '17.3rem'}}>
                    <div className="img__wrap">
                        <Card.Img variant="top" src="https://drive.google.com/thumbnail?id=18JT_u3Dm73Pnyuo2tV2HEqDLxVhNpzA3" />
                        <div className="img__description_layer">
                            <p className="img__description">This image looks super neat.</p>
                        </div>
                    </div>
                    <Card.Body>
                        <Card.Title>Yehuda</Card.Title>
                        <Card.Title>Yehuda</Card.Title>
                        <Button variant="link" variant="dark" href="tel:+972584681758">Only WhatsApp</Button>
                    </Card.Body>
                    </Card>
                </Col>

            </Row>
            
            </Container> */}

     
            
        </div>
    )
}
export default AboutCom