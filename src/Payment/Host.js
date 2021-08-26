import { useState } from "react"
import { Switch,Route, Link } from "react-router-dom"
import ConfirmationCom from "./Confirmation"
import DetailesCom from "./Detailes"
import PaymentCom from "./Payment"

const HostCom = () =>
{
    const [person, setPerson] = useState({FullName:"", Email:"", Phone:"",Addres:{Country:"",Street:"",ZipCode:0}})

    return(<div style={{marginTop:'20px'}}>

        <Link className="btn" role="button" to="/host/detailes">Detailes</Link>
        <Link className="btn" role="button" to="/host/payment">Payment</Link>
        <Link className="btn" role="button" to="/host/confirmation">Confirmation</Link>
        <Switch>
            <Route path='/host/detailes'>
                 <DetailesCom setPer = {per => setPerson(per)}  detailes = {person}/>
            </Route>
            <Route path='/host/payment'>
                 <PaymentCom/>
            </Route>
            <Route path='/host/confirmation'>
                 <ConfirmationCom/>
            </Route>
        </Switch>

    </div>)
}
export default HostCom;