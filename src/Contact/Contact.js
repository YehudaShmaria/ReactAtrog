import { Form,Col,Row,Button } from 'react-bootstrap';
import emailjs from 'emailjs-com'
import { useState} from 'react'

const ContactCom = ()=>
{
    const [user, setUser] = useState({Name:'',Mail:'',Phone:'',Message:''});

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_1fii0uu', 'template_z9pamur', e.target, 'user_lWjSSnDS51D7egsde0a8d')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }

    return(
        <div>
            <h1 style={{backgroundColor:'rgb(37, 94, 37)',color:'white'}}><b>Contact Us</b></h1>
            <Row>
                <Col className="bg-light rounded"  sm={12} md={4}>
                    <div style={{textAlign:'left'}}>
                    <h3 className="bg-warning"><cite><b> Send a Massege:</b></cite></h3>
                    <Form onSubmit={sendEmail}>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" name="Name" placeholder="Name" onChange={(e)=>{setUser({...user,Name:e.target.value})}}  />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="email" name="Mail" placeholder="Email" onChange={(e)=>{setUser({...user,Mail:e.target.value})}} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="tel" name="Phone" placeholder="Phone" onChange={(e)=>{setUser({...user,Phone:e.target.value})}} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control as="textarea" name="Message" rows={3} placeholder="Massege" onChange={(e)=>{setUser({...user,Message:e.target.value})}} />
                            </Form.Group>
                            <div style={{textAlign:'right'}}>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </div>
                           
                     </Form>
                    </div>
                </Col>
                <Col sm={12} md={8}>
                <div style={{width: "100%"}}><iframe width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=350&amp;hl=en&amp;q=%D7%97%D7%96%D7%95%D7%9F%20%D7%90%D7%99%D7%A9%20+(Etrog)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
                </Col>
            </Row>
        </div>
    )
}
export default ContactCom