import ProductView from "./ProductView"
import Atrog from '../rekaAtrog.jpg'
import Atrog2 from './Images/etrog2.jpeg'
import Sukkah from './Images/Sukkah.jpg'
import vidoe from './vidoe/Test.mp4'
import { Button,Carousel,Col,Row} from "react-bootstrap"
import SetCss from './Css/AllSet.css'


const AllSetsViewCom = ()=>
{
    return(
        <div className="AllSet">
               <Row>   
                <Col> 
                    <div className="Show">
                    <h1 style={{backgroundColor:'rgb(37, 94, 37)',color:'white'}}><cite><b>All Set in One Price</b></cite></h1>
                        <Button>Go to The Product</Button>
                    </div> 
                </Col>

                <Col md={6} xs={12}>
                        <Carousel className='h' style={{margin:'20px'}}>
                            <Carousel.Item interval={1500}>
                                    <img 
                                    className="d-block w-100"
                                    src="https://drive.google.com/thumbnail?id=13veO82-cRU7BiePc-6tNKlfhEO8EBHbI"
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
                                    src="https://drive.google.com/thumbnail?id=13veO82-cRU7BiePc-6tNKlfhEO8EBHbI"
                                    alt="Second slide"
                                    />
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                    </Carousel>
                </Col>

                
            </Row>
        </div>
    )
}
export default AllSetsViewCom