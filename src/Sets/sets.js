import { useDispatch } from "react-redux";
import {useState, useEffect} from "react";
import { Card, Button,Col,Row, Form,ListGroupItem,ListGroup, Container } from "react-bootstrap";

const SetsCom = () =>
{
    const dispatch = useDispatch();
    const [products,setProducts] = useState([{id:0,Name:'Casher',Price:30,Counter:1,TotalPrice:30,Url:"https://drive.google.com/thumbnail?id=1u_s_VN6UrqTUJXNd75MbmCuEPJA6ac4U"},{id:1,Name:'א',Price:50,Counter:1,TotalPrice:50,Url:"https://drive.google.com/thumbnail?id=177wYBFNt0TwT1Ad8omNx01MVoP_7V8zX"},{id:2,Name:'מהודר',Price:80,Counter:1,TotalPrice:80,Url:"https://drive.google.com/thumbnail?id=1S8p818ii4GQI28YZ01ftELfPz62L1F2f"}]);
    
    const addProduct = (item) =>
    {
        dispatch({type:"ADD",payload:item})
    }
    
    const setCount = (e,item) =>
    {
        if(e.target.value > 0)
        {
            let pro = [...products];
            item.Counter = parseInt(e.target.value);
            item.TotalPrice = item.Price * item.Counter;
            pro[item.id].Counter = parseInt(e.target.value);
            pro[item.id].TotalPrice = pro[item.id].Price * pro[item.id].Counter ;
            setProducts(pro);
        }
      
    }
   
    return(<div>
      <Container fluid>
      <h1 style={{backgroundColor:'rgb(37, 94, 37)',color:'white'}}><b>The All Set</b></h1>
        <Row>
        {/* <Col md={3} sm={12}>
            <h2>בצע סינון</h2>
        <Form>
  {['checkbox'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="סט תימני"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
       <br/>
     
      <Form.Check
        inline
        label="סט ארץ ישראל"
        name="group1"
        type={type}
        id={`inline-${type}-2`}
      />
     
    </div>
  ))}
</Form>
        </Col> */}
        {
            products.map((item,index)=>
            {
                return <Col md={3} sm={12}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Header>Total Price: {item.TotalPrice}</Card.Header>
                            <Card.Img variant="top" src={item.Url} />
                            <Card.Body>
                                <Card.Title style={{backgroundColor:'greenyellow'}}><h3><b>Name: {item.Name}</b></h3></Card.Title>
                                <ListGroup className="list-group-flush">
                                      <ListGroupItem>products: <input style={{width:'55px'}} type="number" value={item.Counter} onChange={(e,i) => setCount(e,item)}/> </ListGroupItem>
                                      <ListGroupItem style={{textAlign:'left'}}>Price: ${item.Price}<Button style={{marginLeft:'29px'}} onClick={i => addProduct(item)} variant="primary">Add To Bag</Button></ListGroupItem>
                                </ListGroup>
                              
                            </Card.Body>
                    </Card>
                </Col>
            })

        }

        </Row>
      </Container>
        
    </div>)
}
export default SetsCom;