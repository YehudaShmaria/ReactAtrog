import ProductView from "./ProductView"
import Atrog from '../rekaAtrog.jpg'
import Atrog2 from './Images/etrog2.jpeg'
import Sukkah from './Images/Sukkah.jpg'
import vidoe from './vidoe/Test.mp4'


const VidoeCom = ()=>
{
    return(
        <div>
            <header>
                <div class="overlay"></div>
                  <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                    <source src={vidoe} type="video/mp4"/>
                    {/* <source src={"https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"} type="video/mp4"/> */}
                  </video>
                  
                <div class="container h-100">
                  <div class="d-flex h-100 text-center align-items-center">
                    <div class="w-100 text-white">
                      <h1 style={{color:'black'}} class="display-3">The etrogs of Haim</h1>
                      {/* <p class="lead mb-0">With HTML5 Video and Bootstrap 4</p> */}
                    </div>
                  </div>
                </div>
            </header>
        </div>
    )
}
export default VidoeCom