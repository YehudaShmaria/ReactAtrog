import ProductView from "./ProductView"
import Atrog from '../rekaAtrog.jpg'
import Atrog2 from './Images/etrog2.jpeg'
import Sukkah from './Images/Sukkah.jpg'
import VidoeCom from "./vidoe"
import AllSetsViewCom from "./allSetsView"
import AllProductViewCom from "./allProductView"


const HomeCom = (props)=>
{
    return(
        <div>
            <VidoeCom/>
            <br/>
            <AllSetsViewCom/>
            <br/>
            <AllProductViewCom onScroll={() => {alert("Test")}}/>
            <br/>
            <ProductView name="Soca" images={[Sukkah,Sukkah,Sukkah]}/>
          
        </div>
    )
}
export default HomeCom