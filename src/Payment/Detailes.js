import { useState,useEffect } from "react";
import {Form,Row,Col,Button} from 'react-bootstrap'
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


const DetailesCom = (props) =>
{
    const [totalPeice, setTotalPrice] = useState(0);
    const data = useSelector(state => state);
    const history = useHistory();
    useEffect(()=>
    {
      let t = 0;
      data.Products.forEach(element => {
        t += element.TotalPrice;
      });
      setTotalPrice(t);
    },[data])
    return(<div>
      <h1>Order Detailes</h1>
      <Row>
                <Col md={6}>
                    <div style={{textAlign:'left'}}>
                        <h3>Person Detailes</h3>
                    <Form>
                            <Form.Group className="mb-3">
                            <Form.Label>Full Name:</Form.Label>
                                <Form.Control type="text" name="Name" value={props.detailes.FullName} onChange={(e) => {props.setPer({...props.detailes,FullName:e.target.value})}} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                            <Form.Label>Email:</Form.Label>
                                <Form.Control type="email" name="Mail"  value={props.detailes.Email} onChange={(e) => {props.setPer({...props.detailes,Email:e.target.value})}}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                            <Form.Label>Phone Number:</Form.Label>
                                <Form.Control type="tel" name="Phone"  value={props.detailes.Phone} onChange={(e) => {props.setPer({...props.detailes,Phone:e.target.value})}} />
                            </Form.Group>
                     </Form>
                    </div>
                </Col>
                <Col md={3}>
                    <div style={{textAlign:'left'}}>
                        <h3>Location Detailes</h3>
                    <Form>
                            <Form.Group className="mb-3">
                            <Form.Label>Country:</Form.Label>
                                <Form.Control type="text"   value={props.detailes.Addres.Country} onChange={(e) => {props.setPer({...props.detailes,Addres:{...props.detailes.Addres, Country:e.target.value}})}} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                            <Form.Label>Street && APT:</Form.Label>
                                <Form.Control type="text"  value={props.detailes.Addres.Street} onChange={(e) => {props.setPer({...props.detailes,Addres:{...props.detailes.Addres, Street:e.target.value}})}}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                            <Form.Label>ZipCode:</Form.Label>
                                <Form.Control type="text"  value={props.detailes.Addres.ZipCode} onChange={(e) => {props.setPer({...props.detailes,Addres:{...props.detailes.Addres, ZipCode:e.target.value}})}}  />
                            </Form.Group>
                           
                     </Form>
                    </div>
                </Col>
                <Col md={3}>
                    <h1>Total Price: ${totalPeice}</h1>
                    <h1></h1>
                    <ul>
                        {
                            data.Products.map((item,index)=>
                            {
                                return <li>{item.Counter} Of {item.Name}, Total Price: {item.TotalPrice}</li>
                            })
                        }
                    </ul>
                   
                </Col>
            </Row>
            <button type="button" class="btn btn-primary btn-lg btn-block" onClick={()=>{history.push('/host/payment')}}> Save && Continued</button>
           
    </div>)
}
export default DetailesCom;