import ProductView from "./ProductView"
import Atrog from '../rekaAtrog.jpg'
import Atrog2 from './Images/etrog2.jpeg'
import Sukkah from './Images/Sukkah.jpg'
import vidoe from './vidoe/Test.mp4'
import { Button,Carousel,Col,Row} from "react-bootstrap"
import AllProduct from './Css/AllProduct.css'
import { Link, useHistory } from "react-router-dom"


const AllProductViewCom = ()=>
{
    const history = useHistory();
    return(
        <div className="AllProduct">  
            <Row>
               <Col  md={4} xs={12}> 
                <Carousel className='h' style={{margin:'20px'}}>
                            <Carousel.Item interval={2000}>
                                    <img 
                                    className="d-block w-100"
                                    src="https://drive.google.com/thumbnail?id=1S8p818ii4GQI28YZ01ftELfPz62L1F2f"
                                     alt="First slide"
                                    />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item interval={2000}>
                                    <img
                                    className="d-block w-100"
                                    src="https://drive.google.com/thumbnail?id=177wYBFNt0TwT1Ad8omNx01MVoP_7V8zX"
                                    alt="Second slide"
                                    />
                                <Carousel.Caption>
                                    
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                    <img
                                    className="d-block w-100"
                                    src="https://drive.google.com/thumbnail?id=1u_s_VN6UrqTUJXNd75MbmCuEPJA6ac4U"
                                    alt="Second slide"
                                    />
                                <Carousel.Caption>
                                    
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                    </Carousel>
                </Col>

                <Col md={1} xs={0}>
                </Col>

                <Col md={6.8} xs={6}>
                <div className="configText rounded">
                        <h1 style={{backgroundColor:'rgb(37, 94, 37)',color:'white'}}><cite><b>4 Minim</b></cite> </h1>
                        <div className="bg-warning">
                            <h3 style={{margin:'10px', fontSize:'16px',fontSize:' 3vw'}} className="text-dark">
                                All four species in a variety of degrees and capacities
                            </h3>
                            <p>And we Have at all at a Good Price!!!</p>
                            <Button style={{margin:'4px'}} onClick={()=>{history.push('/allproducts')}}>Products</Button>
                        </div>
                        
                </div> 
                </Col>

                <Col  md={4} xs={6}> 
                <Carousel className='h' style={{margin:'20px'}}>
                            <Carousel.Item interval={2000}>
                                    <img 
                                    className="d-block w-100"
                                    src="https://drive.google.com/thumbnail?id=1VDU58-uQ3QcmfI0G8qLeMJKkF-CUOf0I"
                                     alt="First slide"
                                    />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item interval={2000}>
                                    <img
                                    className="d-block w-100"
                                    src="https://drive.google.com/thumbnail?id=1VDU58-uQ3QcmfI0G8qLeMJKkF-CUOf0I"
                                    alt="Second slide"
                                    />
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                    </Carousel>
                </Col>

                <Col  md={4} xs={6}> 
                <Carousel className='h' style={{margin:'20px'}}>
                            <Carousel.Item interval={2000}>
                                    <img 
                                    className="d-block w-100"
                                    src="https://drive.google.com/thumbnail?id=1eEZ8VcIduX00L1CS7I_Mwg-XS9DLX1Sk"
                                     alt="First slide"
                                    />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item interval={2000}>
                                    <img
                                    className="d-block w-100"
                                    src="https://drive.google.com/thumbnail?id=1eEZ8VcIduX00L1CS7I_Mwg-XS9DLX1Sk"
                                    alt="Second slide"
                                    />
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                    </Carousel>
                </Col>
                <Col  md={4} xs={6}> 
                <Carousel className='h' style={{margin:'20px'}}>
                            <Carousel.Item interval={2000}>
                                    <img 
                                    className="d-block w-100"
                                    src="https://drive.google.com/thumbnail?id=13iorxGF58GEUxcg1yiO2ckL-IkjYF4Lq"
                                     alt="First slide"
                                    />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item interval={2000}>
                                    <img
                                    className="d-block w-100"
                                    src="https://drive.google.com/thumbnail?id=13iorxGF58GEUxcg1yiO2ckL-IkjYF4Lq"
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
export default AllProductViewCom