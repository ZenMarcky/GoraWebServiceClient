import React, { useState } from 'react'
import featureLogo from '../images/neural.png';
import bussinesImg from '../images/type of websitee/bussines.PNG';
import blogImg from '../images/type of websitee/Blog.PNG';
import educationImg from '../images/type of websitee/Education.PNG';
import fashImg from '../images/type of websitee/Fashion.PNG';
import carsImg from '../images/type of websitee/carst and Transportation.PNG';
import estateImg from '../images/type of websitee/realEstate.PNG';
import artsImg from '../images/type of websitee/7 arts.PNG';
import techImg from '../images/type of websitee/8 technology.PNG';
import foodImg from '../images/type of websitee/9 Food.PNG';
import archImg from '../images/type of websitee/10 architecture.PNG';
import sportsImg from '../images/type of websitee/11 sports.PNG';
import musicImg from '../images/type of websitee/12 music.PNG';
import portfolioImg from '../images/type of websitee/portfolio.PNG';
import portfolio1Img from '../images/type of websitee/portfolio1.PNG';
import portfolio2Img from '../images/type of websitee/portfolio2.PNG';
import coffeeImg from '../images/type of websitee/coffee.PNG';
import gamersImg from '../images/type of websitee/gamers.PNG';
import serviceImg from '../images/type of websitee/service.PNG';
import cancelButton from '../images/cancelButton.png';
import { Link } from 'react-router-dom';

function Features() {

  let [openModal,setopenModal] = useState(false);
  let [bussModal,setBussModal] = useState(false);
  let [blogModal,setBlogModal] = useState(false);
  let [eddModal,setEddModal] = useState(false);
  let [fashModal,setFashModal] = useState(false);
  let [vehcModal,setVehcModal] = useState(false);
  let [stateModal,setStateModal] = useState(false);
  let [artModal,setArtModal] = useState(false);
  let [techModal,setTechModal] = useState(false);
  let [foodModal,setFoodModal] = useState(false);
  let [archModal,setArchModal] = useState(false);
  let [sportsModal,setSportsModal] = useState(false);
  let [musicModal,setMusicModal] = useState(false);
  let [portfolioModal,setPortfolioModal] = useState(false);
  let [portfolio1Modal,setPortfolio1Modal] = useState(false);
  let [portfolio2Modal,setPortfolio2Modal] = useState(false);
  let [coffeeModal,setCoffeeModal] = useState(false);
  let [gamersModal,setGamersModal] = useState(false);
  let [serviceModal,setServiceModal] = useState(false);


function popModal(pop){
if(pop === "bussModal"){
  setBussModal(true)
}
else if(pop === "blogModal"){
  setBlogModal(true)
}
else if(pop === "eddModal"){
  setEddModal(true)
}
else if(pop === "fashModal"){
  setFashModal(true)
}
else if(pop === "vehcModal"){
  setVehcModal(true)
}
else if(pop === "stateModal"){
  setStateModal(true)
}
else if(pop === "artModal"){
  setArtModal(true)
}
else if(pop === "techModal"){
  setTechModal(true)
}
else if(pop === "foodModal"){
  setFoodModal(true)
}
else if(pop === "archModal"){
  setArchModal(true)
}
else if(pop === "sportsModal"){
  setSportsModal(true)
}
else if(pop === "musicModal"){
  setMusicModal(true)
}
else if(pop === "portfolioModal"){
  setPortfolioModal(true)
}
else if(pop === "portfolio1Modal"){
  setPortfolio1Modal(true)
}
else if(pop === "portfolio2Modal"){
  setPortfolio2Modal(true)
}
else if(pop === "coffeeModal"){
  setCoffeeModal(true)
}
else if(pop === "gamersModal"){
  setGamersModal(true)
}
else if(pop === "serviceModal"){
  setServiceModal(true)
}
else{
  setBussModal(false)
  setBlogModal(false)
  setEddModal(false)
  setFashModal(false)
  setVehcModal(false)
  setStateModal(false)
  setArtModal(false)
  setTechModal(false)
  setFoodModal(false)
  setArchModal(false)
  setSportsModal(false)
  setMusicModal(false)
  setPortfolioModal(false)
  setPortfolio1Modal(false)
  setPortfolio2Modal(false)
  setCoffeeModal(false)
  setGamersModal(false)
  setServiceModal(false)
  
}
}

  return (
    <React.Fragment>
{/*------------------------------------- Feature Section ---------------------------- */}
<section className='thirdHomeFeatureSection'>
  <h1>Features</h1>
  <img src={featureLogo} alt='logo'/>
</section>


{/*------------------------------------- Gallery Section ---------------------------- */}

<div className='topGallery'>
<div onClick={()=>{popModal("portfolioModal")}} className='galleryImgContainer'  >
<img  src={portfolioImg} className='hover-shadow cursor ' />
<p>Portfolio</p>
</div>
<div className={portfolioModal ? 'FloatingImg' : "imgFloatClose"}>
 <div className='FloatingImgContent'>
 <img className='imgFloatImages'  src={portfolioImg} />
 <img onClick={()=>{popModal(false)}} className='imgFloatCloseBtn' src={cancelButton} />
 </div>
</div>

<div onClick={()=>{popModal("portfolio1Modal")}} className='galleryImgContainer'>
<img  src={portfolio1Img} className='hover-shadow cursor ' />
<p>Portfolio 1</p>
</div>
<div className={portfolio1Modal ? 'FloatingImg' : "imgFloatClose"}>
 <div className='FloatingImgContent'>
 <img className='imgFloatImages'  src={portfolio1Img} />
 <img onClick={()=>{popModal(false)}} className='imgFloatCloseBtn' src={cancelButton} />
 </div>
</div>

<div onClick={()=>{popModal("portfolio2Modal")}} className='galleryImgContainer'>
<img  src={portfolio2Img} className='hover-shadow cursor '  />
<p>Portfolio 2</p>
</div>
<div className={portfolio2Modal ? 'FloatingImg' : "imgFloatClose"}>
 <div className='FloatingImgContent'>
 <img className='imgFloatImages'  src={portfolio2Img} />
 <img onClick={()=>{popModal(false)}} className='imgFloatCloseBtn' src={cancelButton} />
 </div>
</div>


</div>
<div className='botGallery'>

<div onClick={()=>{popModal("coffeeModal")}} className='galleryImgContainer'>
<img  src={coffeeImg} className='hover-shadow cursor '/>
<p>Coffee</p>
</div>
<div className={coffeeModal ? 'FloatingImg' : "imgFloatClose"}>
 <div className='FloatingImgContent'>
 <img className='imgFloatImages'  src={coffeeImg} />
 <img onClick={()=>{popModal(false)}} className='imgFloatCloseBtn' src={cancelButton} />
 </div>
</div>

<div onClick={()=>{popModal("gamersModal")}} className='galleryImgContainer'>
<img  src={gamersImg} className='hover-shadow cursor ' />
<p>Gamers</p>
</div>
<div className={gamersModal ? 'FloatingImg' : "imgFloatClose"}>
 <div className='FloatingImgContent'>
 <img className='imgFloatImages'  src={gamersImg} />
 <img onClick={()=>{popModal(false)}} className='imgFloatCloseBtn' src={cancelButton} />
 </div>
</div>

<div onClick={()=>{popModal("serviceModal")}} className='galleryImgContainer'>
<img  src={serviceImg} className='hover-shadow cursor ' />
<p>Service</p>
</div>
<div className={serviceModal ? 'FloatingImg' : "imgFloatClose"}>
 <div className='FloatingImgContent'>
 <img className='imgFloatImages'  src={serviceImg} />
 <img onClick={()=>{popModal(false)}} className='imgFloatCloseBtn' src={cancelButton} />
 </div>
</div>
</div>

{/*------------------------------------- Gallery Section ---------------------------- */}

<div className='topGallery'>
<div onClick={()=>{popModal("artModal")}} className='galleryImgContainer'>
<img  src={artsImg} className='hover-shadow cursor ' />
<p>Art</p>
</div>
<div className={artModal ? 'FloatingImg' : "imgFloatClose"}>
 <div className='FloatingImgContent'>
 <img className='imgFloatImages'  src={artsImg} />
 <img onClick={()=>{popModal(false)}} className='imgFloatCloseBtn' src={cancelButton} />
 </div>
</div>

<div onClick={()=>{popModal("techModal")}} className='galleryImgContainer'>
<img  src={techImg} className='hover-shadow cursor ' />
<p>Technology</p>
</div>
<div className={techModal ? 'FloatingImg' : "imgFloatClose"}>
 <div className='FloatingImgContent'>
 <img className='imgFloatImages'  src={techImg} />
 <img onClick={()=>{popModal(false)}} className='imgFloatCloseBtn' src={cancelButton} />
 </div>
</div>

<div onClick={()=>{popModal("foodModal")}} className='galleryImgContainer'>
<img  src={foodImg} className='hover-shadow cursor ' />
<p>Food</p>
</div>
<div className={foodModal ? 'FloatingImg' : "imgFloatClose"}>
 <div className='FloatingImgContent'>
 <img className='imgFloatImages'  src={foodImg} />
 <img onClick={()=>{popModal(false)}} className='imgFloatCloseBtn' src={cancelButton} />
 </div>
</div>


</div>
<div className='botGallery'>

<div onClick={()=>{popModal("archModal")}} className='galleryImgContainer'>
<img  src={archImg} className='hover-shadow cursor ' />
<p>Architecture</p>
</div>
<div className={archModal ? 'FloatingImg' : "imgFloatClose"}>
 <div className='FloatingImgContent'>
 <img className='imgFloatImages'  src={archImg} />
 <img onClick={()=>{popModal(false)}} className='imgFloatCloseBtn' src={cancelButton} />
 </div>
</div>

<div onClick={()=>{popModal("sportsModal")}} className='galleryImgContainer'>
<img  src={sportsImg} className='hover-shadow cursor ' />
<p>Sports</p>
</div>
<div className={sportsModal ? 'FloatingImg' : "imgFloatClose"}>
 <div className='FloatingImgContent'>
 <img className='imgFloatImages'  src={sportsImg} />
 <img onClick={()=>{popModal(false)}} className='imgFloatCloseBtn' src={cancelButton} />
 </div>
</div>

<div onClick={()=>{popModal("musicModal")}} className='galleryImgContainer'>
<img  src={musicImg} className='hover-shadow cursor ' />
<p>Music</p>
</div>
<div className={musicModal ? 'FloatingImg' : "imgFloatClose"}>
 <div className='FloatingImgContent'>
 <img className='imgFloatImages'  src={musicImg} />
 <img onClick={()=>{popModal(false)}} className='imgFloatCloseBtn' src={cancelButton} />
 </div>
</div>
</div>

{/*------------------------------------- Gallery Section ---------------------------- */}

<section className='fourthHomeGallerySection'>
<div className='topGallery'>

<div onClick={()=>{popModal("bussModal")}} className='galleryImgContainer'>
<img  src={bussinesImg} className='hover-shadow cursor ' />
<p>Business</p>
</div>
<div className={bussModal ? 'FloatingImg' : "imgFloatClose"}>
 <div className='FloatingImgContent'>
 <img className='imgFloatImages'  src={bussinesImg} />
 <img onClick={()=>{popModal(false)}} className='imgFloatCloseBtn' src={cancelButton} />
 </div>
</div>

<div onClick={()=>{popModal("vehcModal")}} className='galleryImgContainer'>
<img  src={carsImg} className='hover-shadow cursor ' />
<p>Vehicle</p>
</div>
<div className={vehcModal ? 'FloatingImg' : "imgFloatClose"}>
 <div className='FloatingImgContent'>
 <img className='imgFloatImages'  src={carsImg} />
 <img onClick={()=>{popModal(false)}} className='imgFloatCloseBtn' src={cancelButton} />
 </div>
</div>

<div onClick={()=>{popModal("eddModal")}} className='galleryImgContainer'>
<img  src={educationImg} className='hover-shadow cursor ' />
<p>Education</p>
</div>
</div>
<div className={eddModal ? 'FloatingImg' : "imgFloatClose"}>
 <div className='FloatingImgContent'>
 <img className='imgFloatImages'  src={educationImg} />
 <img onClick={()=>{popModal(false)}} className='imgFloatCloseBtn' src={cancelButton} />
 </div>
</div>

<div className='botGallery'>

<div onClick={()=>{popModal("blogModal")}} className='galleryImgContainer'>
<img  src={blogImg} className='hover-shadow cursor '/>
<p>Blog</p>
</div>
<div className={blogModal ? 'FloatingImg' : "imgFloatClose"}>
 <div className='FloatingImgContent'>
 <img className='imgFloatImages'  src={blogImg} />
 <img onClick={()=>{popModal(false)}} className='imgFloatCloseBtn' src={cancelButton} />
 </div>
</div>

<div onClick={()=>{popModal("fashModal")}} className='galleryImgContainer'>
<img  src={fashImg} className='hover-shadow cursor ' />
<p>Fashion</p>
</div>
<div className={fashModal ? 'FloatingImg' : "imgFloatClose"}>
 <div className='FloatingImgContent'>
 <img className='imgFloatImages'  src={fashImg} />
 <img onClick={()=>{popModal(false)}} className='imgFloatCloseBtn' src={cancelButton} />
 </div>
</div>



<div onClick={()=>{popModal("stateModal")}} className='galleryImgContainer'>
<img  src={estateImg} className='hover-shadow cursor ' />
<p>Real Estate</p>
</div>
</div>
<div className={stateModal ? 'FloatingImg' : "imgFloatClose"}>
 <div className='FloatingImgContent'>
 <img className='imgFloatImages'  src={estateImg} />
 <img onClick={()=>{popModal(false)}} className='imgFloatCloseBtn' src={cancelButton} />
 </div>
</div>



</section>
       {/*------------------------------------- Footer Section ---------------------------- */}

<section className='footerSection'>
<div className='footerTop'>
<div className='footerContent'>
<p className='footerContentTitle'>Contact</p>
<p>gorawebservice@yahoo.com</p>
<p>Tel:095-890-56787</p>
<p>Philippines</p>
<p>Region IV NCR</p>
</div>
<div className='footerContent'>
<p className='footerContentTitle'>Menu</p>
<Link to={'/'}>Home</Link>
<Link to={'/service'}>Service</Link>
<Link to={'/contact'}>Contact</Link>
</div>
<div className='footerContent'>
<p className='footerContentTitle'>Social</p>
<p>Discord</p>
<p>Twitch</p>
<p>Facebook</p>
<p>Youtube</p>
<p>Twitter</p>
<p>LinkedIn</p>
</div>
</div>
<div className='footerBot'>
<h1>@2023 by GORA Web Service. Proudly developed by WD23 - Team 2</h1>
</div>
</section>
    </React.Fragment>
  )
}

export default Features
