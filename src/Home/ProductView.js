import { Button,Carousel,Col,Row} from "react-bootstrap"
import reka from './Images/rekaHome.jpg'
import  './home.css'


const ProductView = (props)=>
{
    return(
        <div className={props.name}>
            <Row>
                <Col md={6} xs={12}>
                        <Carousel className='h' style={{margin:'20px'}}>
                            <Carousel.Item interval={1500}>
                                    <img 
                                    className="d-block w-100"
                                    src={props.images[0]}
                                    alt="First slide"
                                    />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item interval={1500}>
                                    <img
                                    className="d-block w-100"
                                    src={props.images[1]}
                                    alt="Second slide"
                                    />
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={props.images[2]}
                                    alt="Third slide"
                                    />
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            
                    </Carousel>
                </Col>

                <Col> 
                    <div className="Show">
                        <h2>This is a Nice {props.name}</h2>
                        <h3>
                            הו הסיפור הכי יפה ששמעתי בחיים שליה 
                        </h3>
                        <Button>Go to The Product</Button>
                        <br/>
                    </div> 
                </Col>
                
            </Row>
        </div>
    )
}
export default ProductView