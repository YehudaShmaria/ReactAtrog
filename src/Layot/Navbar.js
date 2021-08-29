import {Container,Navbar,Nav,Form,FormControl,Button,NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';

function NavbarCom(props) {
  const data = useSelector(state => state);
  const [total,setTotal] = useState(0)

  useEffect(()=>
  {
    let t = 0;
    data.Products.forEach(element => {
      t += element.TotalPrice;
    });
    setTotal(t);
  },[data])
  return (
    <div style={{marginBottom:'80px'}} className="App">
      <Navbar fixed="top" bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#home">Chaim Atrogs</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="container-fluid">
              <Nav.Link><Link className="btn" role="button" to="/">Home</Link></Nav.Link>
              <Nav.Link><Link className="btn" role="button" to="/sets">Set 4 Minim</Link></Nav.Link>
              <Nav.Link><Link className="btn" role="button" to="/allproducts">All Products</Link></Nav.Link>
              {/* <Nav.Link><Link className="btn" role="button" to="/suka">Sukkot</Link></Nav.Link> */}
              <Nav.Link><Link className="btn" role="button" to="/about">About</Link></Nav.Link>
              <Nav.Link><Link className="btn" role="button" to="/contact">Contact</Link></Nav.Link>
              <Nav.Link style={{textAlign:'right'}} className="ml-auto"><Link className="btn" role="button" to="/products"> <span class="badge badge-success">Total Price: ${total} </span>&nbsp; &nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>&nbsp; &nbsp;<span class="badge badge-danger">{data.Products.length}</span></Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>
</div>
  );
}

export default NavbarCom;
