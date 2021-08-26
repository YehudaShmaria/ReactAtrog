import { useSelector, useDispatch } from "react-redux";
import {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import { Button,Card, Container, Row, Col, Image  } from "react-bootstrap";

const ProductsCom = () =>
{
   const [totalPeice, setTotalPrice] = useState(0);
   const data = useSelector(state => state);
   const dispatch = useDispatch();
   const history = useHistory();

   useEffect(()=>{
    let t = 0;
    data.Products.forEach(element => {
      t += element.TotalPrice;
    });
    setTotalPrice(t);
   },[data])
   const RemoveProduct = (name) =>
   {
       dispatch({type:"REMOVE",payload:name})
   }

   const updateCount = (e,item) =>
   {
       if(e.target.value > 0)
       {
        item.Counter = e.target.value;
        item.TotalPrice = item.Price * item.Counter;
        dispatch({type:"ADD",payload:item})
       }
   }

   const goToPayment = () =>
   {
       if(data.Products.length > 0)
       {
             history.push('/host/detailes')
       }
       else
        alert("There are no Products on the Shoping Bag!!!")
      
   }

    return(<div>
        <Container fluid>
        <h1 style={{backgroundColor:'rgb(37, 94, 37)',color:'white'}}><b>The shopping bag</b></h1>
            <Row>

            <Col className="w3-animate-zoom" md={9}>
                {
                    data.Products.length !== 0 ?
                    data.Products.map(item =>{
                        return <div style={{borderBlockStyle:'double'}}>
                                <Card className="text-center">
                        <Card.Header className="text-danger">Total Price: {item.TotalPrice}</Card.Header>
                        <Card.Body>
                            <Row>
                            <Col>
                                    <Image src={item.Url} thumbnail />
                                </Col>
                                <Col>
                                    <Card.Title style={{backgroundColor:'greenyellow',fontSize:'25px'}}><b>Name: {item.Name}</b></Card.Title>
                                        <Card.Text>
                                            <h3>Price: {item.Price}</h3>
                                          <h3> Count: <input type="number" style={{width:'150px'}} value={item.Counter} onChange={(e,i) => updateCount(e,item)}/></h3> 
                                        </Card.Text>
                                    <Button variant="primary" onClick={name => RemoveProduct(item.Name)}>Remove</Button>
                                </Col>
                               
                            </Row>
                           
                        </Card.Body>
                        {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
                    </Card>
                    <br/>
                    </div> 
                   
                    }):<div>
                         <h4><cite>You have not added any products to your shopping cart yet. <br/> Please add products ...</cite></h4>
                         <Button onClick={()=>{history.push('/allproducts')}}>All Products</Button>
                    </div>
                }
               
                </Col>
            

            <Col className="w3-animate-top" md={3}>
                    <div style={{borderBlockStyle:'groove'}}>
                    <h2 className="bg-warning rounded" ><b>Total Price: ${totalPeice}</b></h2>
                    
                        {
                            data.Products.map((item,index)=>
                            {
                                return <ul className="bg-success text-white rounded">
                                         <h3 style={{textAlign:'left'}}><b>Name: {item.Name}</b></h3>
                                         <li><h4>Number of products: {item.Counter}</h4></li>
                                         <li><h4>Total Price: {item.TotalPrice}</h4></li>
                                    </ul>
                            })
                        }
                  
                    </div>
                </Col>
               
            </Row>
            <Button style={{marginTop:'30px'}} variant="success" onClick={goToPayment}>Go To Payment Page</Button>
        </Container>
        
    </div>)
}
export default ProductsCom;