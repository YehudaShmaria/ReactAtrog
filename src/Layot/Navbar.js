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
    <div className="App">

<nav className="navbar navbar-expand-md sticky-top bg-light navbar-light mt-2 text-right">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Navbar.Brand href="#home">Chaim Atrogs</Navbar.Brand>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
            <Nav.Link><Link className="btn" role="button" to="/">Home</Link></Nav.Link>
        </li>
        {/* <li className="nav-item">
          <NavDropdown className="btn" role="button" title="Etrogs" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">Yemeni etrogs</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Etrogs of the Land of Israel</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.4">Moroccan etrogs</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.5">All</NavDropdown.Item>
          </NavDropdown>
        </li> */}
        <li className="nav-item">
           <Nav.Link><Link className="btn" role="button" to="/sets">Set 4 Minim</Link></Nav.Link>
        </li>
        <li className="nav-item">
           <Nav.Link><Link className="btn" role="button" to="/allproducts">All Products</Link></Nav.Link>
        </li>
        <li className="nav-item">
            <Nav.Link><Link className="btn" role="button" to="/suka">Sukkot</Link></Nav.Link>
        </li>
        {/* <li className="nav-item">
            <Nav.Link><Link className="btn" role="button" to="/products">Products</Link></Nav.Link>
        </li> */}
        <li className="nav-item">
            <Nav.Link><Link className="btn" role="button" to="/about">About</Link></Nav.Link>
        </li>
        <li className="nav-item">
            <Nav.Link><Link className="btn" role="button" to="/contact">Contact</Link></Nav.Link>
        </li>
      </ul>
      <Navbar.Brand className="ml-auto"><Nav.Link><Link className="btn" role="button" to="/products"> <span class="badge badge-success">Total Price: ${total} </span>&nbsp; &nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>&nbsp; &nbsp;<span class="badge badge-danger">{data.Products.length}</span></Link></Nav.Link></Navbar.Brand>
    </div> 
  </nav>
    </div>
  );
}

export default NavbarCom;
