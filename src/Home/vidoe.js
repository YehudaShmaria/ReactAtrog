import ProductView from "./ProductView"
import Atrog from '../rekaAtrog.jpg'
import Atrog2 from './Images/etrog2.jpeg'
import Sukkah from './Images/Sukkah.jpg'
import vidoe from './vidoe/Test2.mp4'


const VidoeCom = ()=>
{
    return(
        <div>
            <header>
                <div class="overlay"></div>
                  <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                    <source src={vidoe} type="video/mp4"/>
                  </video>
            </header>
        </div>
    )
}
export default VidoeCom