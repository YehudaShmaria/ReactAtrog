import {Container} from 'react-bootstrap'
import NavbarCom from './Layot/Navbar';
import FooterCom from './Layot/Footer';
import {Switch, Route} from 'react-router-dom'
import AboutCom from './About/About';
import ContactCom from './Contact/Contact';
import HomeCom from './Home/Home';
import SetsCom from './Sets/sets';
import SukaCom from './Suka/Suka';
import ProductsCom from './Product/Product';
import HostCom from './Payment/Host';
import AllProductsCom from './AllProduct/Suka';

function TheWebCom() {
  return (
    <div className="App">
       <Container fluid>
         <NavbarCom/>
         <Container fluid>
            <div className="myDiv">
                  <Switch>
                      <Route exact path="/" component={HomeCom}/>
                      <Route path="/about" component={AboutCom}/>
                      <Route path="/contact" component={ContactCom}/>
                      <Route path="/sets" component={SetsCom}/>
                      <Route path="/suka" component={SukaCom}/>
                      <Route path="/products" component={ProductsCom}/>
                      <Route path="/host" component={HostCom}/>
                      <Route path="/allproducts" component={AllProductsCom}/>
                  </Switch>
                </div>
            </Container>
            <FooterCom/>
        
       </Container>
    </div>
  );
}

export default TheWebCom;
