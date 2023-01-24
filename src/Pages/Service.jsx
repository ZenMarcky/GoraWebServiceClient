import React, { useState } from 'react'
import codImg from '../images/coding.png'
import uxImg from '../images/illustration.png'
import bugImg from '../images/mechanic.png'
import updImg from '../images/update.png'
import basicImg from '../images/pbasic.png'
import proImg from '../images/pprofessional.png'
import ultImg from '../images/pultimate.png'
import arrowImg from '../images/arrow-right.png'
import {Link, useNavigate} from 'react-router-dom';
import foxLogo from '../kitsune.png'
import {useForm} from 'react-hook-form';
import Axios from 'axios';

function Service() {

let navigate = useNavigate();

 async function onSubmit(data){
let response = await Axios.post('https://gora-web-service-server-4vfd.vercel.app/booked/',data);
if(response.data.error){
 alert(response.data.error);
}
else{
alert("Booked Successful")
navigate('/profile')
}
  };


const {register,handleSubmit,formState:{errors}} = useForm();

  return (
    <React.Fragment>
      {/*------------- Service Landing Page Section-------------------------------------------------------- */}
      <section className='serviceLandingPages'>
        
<div className='serviceLandingBackgroundImg'>
</div>
<div className='serviceLandingPageContent' >
<h1 className='serviceLandingContentHero'>Our Service </h1>

<p className='serviceLandingContentSubHero'>Our service is always open to help you for what you need through our online service. We our online service is always available for many requests and many problems that help you at any time, so let's us help you to achieve your dream website.</p>
</div>
      </section>

     {/*------------- Service Second Page Section-------------------------------------------------------- */}
     <section className='serviceSecondSection'>
<div className='serviceSecondSectionHero'></div>
<div className='serviceSecondSectionCards'>
<div className='SecondSectionCards'>
<img src={codImg} alt='build'/>
<div className='serviceCardsContent'>
<h1>Website Layout and Build</h1>
<p>Have you ever been searching for a kind of Service that help you have on your dream website? We can help you with our web development team to build your first dream website for your starting business. Just choose your plan that fit for your needs.</p>
</div>
<a href="#bookSection"><img className='arrowButton' src={arrowImg} alt='arrow'/></a>
</div>
<div className='SecondSectionCards'>
<img src={uxImg} alt='build'/>
<div className='serviceCardsContent'>
<h1>UX/UI Design and Responsive</h1>
<p>Our UX/UI Web development team will help you to design a website that fit for your needs and also make your first website to look more become beautiful with the help of our UX/UI designer. </p>
</div>
<a href="#bookSection"><img className='arrowButton' src={arrowImg} alt='arrow'/></a>
</div>
<div className='SecondSectionCards'>
<img src={bugImg} alt='build'/>
<div className='serviceCardsContent'>
<h1>Bugs/Testing/Fixed</h1>
<p>Does your website have many Bugs that make it look bad? Our service will help you to fix it with affordable fee. </p>
</div>
<a href="#bookSection"><img className='arrowButton' src={arrowImg} alt='arrow'/></a>
</div>
<div className='SecondSectionCards'>
<img src={updImg} alt='build'/>
<div className='serviceCardsContent'>
<h1>Upgrade/Update</h1>
<p>Does your Website need some improvement that need to fit for your business? We can help you to upgrade your website with service.</p>
</div>
<a href="#bookSection"><img className='arrowButton' src={arrowImg} alt='arrow'/></a>
</div>
</div>
     </section>
     {/*------------- Service Third Page Section-------------------------------------------------------- */}
     <section className='serviceThirdSection'>
<div className='serviceThirdSectionHero'><h1>PACKAGE PLAN</h1></div>
<div className='serviceThirdSectionCards'>
<div className='ThirdSectionCards'>
  <h1 className='planName'>BASIC</h1>
  <p className='planRate'>In demand</p>
<img src={basicImg} alt='build' />
<div className='thirdCardsContent'>
<h1>Article | Landing Page | BLOG</h1>
<p>UI/UX Designed</p>
<p>100% Responsive</p>
<p>Custom Infrastructure</p>
<p>Design and Features</p>

</div>
<h1 className='planPrice'>$299.95</h1>
<a href="#bookSection" className='planBook'>Avail Now</a>
</div>
<div className='ThirdSectionCards'>
  <h1 className='planName'>PROFESSIONAL</h1>
  <p className='planRate'>Most Popular</p>
<img src={ultImg} alt='build'/>
<div className='thirdCardsContent'>
<h1>Services | Business | Educational Learning</h1>
<p>UI/UX Designed</p>
<p>100% Responsive</p>
<p>Custom Infrastructure</p>
<p>Design and Features</p>
<p>Email Support</p>
</div>
<h1 className='planPrice'>$499.95/month</h1>
<a href="#bookSection" className='planBook'>Avail  Now</a>
</div>
<div className='ThirdSectionCards'>
  <h1 className='planName'>ULTIMATE</h1>
  <p className='planRate'>Best Value</p>
<img src={proImg} alt='build'/>
<div className='thirdCardsContent'>
<h1>e-Commerce</h1>
<p>UI/UX Designed</p>
<p>100% Responsive</p>
<p>Custom Infrastructure</p>
<p>Design and Features</p>
<p>Database-driven website</p>
<p>Email Support</p>
</div>
<h1 className='planPrice'>$999.95/month</h1>
<a href="#bookSection" className='planBook'>Avail  Now</a>
</div>
</div>
     </section>
       {/*------------- Service Fourth Page Section-------------------------------------------------------- */}
       <section id='bookSection' className='serviceBookSection'>
<div className='bookSectionContentContainer'>
<div className='bookHeading'>
  <h1>Fill up this form to avail our Package Plan</h1>
</div>
<form className='bookForm' onSubmit={handleSubmit(onSubmit)}>
<div className='formLeftContainer'>
<div className='formName'>

<div className='formInput'>
<p>First Name</p>
<input type="text"  {...register("firstname", { required: true})} />
{errors.firstname && <span>This field is required</span>}
</div>
<div className='formInput'>
<p>Middle Name</p>
<input type="text" {...register("middlename", { required: true})}/>
{errors.middlename && <span>This field is required</span>}
</div>
<div className='formInput'>
<p>Last Name</p>
<input type="text" {...register("lastname", { required: true})}/>
{errors.lastname && <span>This field is required</span>}
</div>

</div>
<div className='formName'>


<div className='formInput'>
<p>Address</p>
<input type="text" {...register("address", { required: true})} />
{errors.address && <span>This field is required</span>}
</div>
<div className='formInput'>
<p>Phone Number</p>
<input type="number" {...register("phonenumber", { required: true})}/>
{errors.phonenumber && <span>This field is required</span>}
</div>
<div className='formInput'>
<p>Email</p>
<input type="email" {...register("email", { required: true})}/>
{errors.email && <span>This field is required</span>}
</div>


</div>
<div className='formNameService'>
<div className='formInput '>
<p>Service Type</p>
<select {...register("servicetype", { required: true})}>

 
  <option value="Website Build">Website Build</option>
  <option value="UX/UI Design">UX/UI Design</option>
  <option value="Bugs/Fixed">Bugs/Fixed</option>
  <option value="Upgrade/Update">Upgrade/Update</option>
  <option value="Package Only">Package Only</option>
</select>
{errors.servicetype && <span>This field is required</span>}
</div>
<div className='formInput'>
<p>Package Plan</p>
<select placeholder='PackageType' {...register("packageplan", { required: true})}>

  
  <option value="Basic">Basic</option>
  <option value="Professional">Professional</option>
  <option value="Ultimate">Ultimate</option>
  <option value="Service Only">Service Only</option>
</select>
{errors.packageplan && <span>This field is required</span>}
</div>
<div className='formInput'>

</div>
</div>
<div className='formMessage'>
<p>Leave a Message...</p>
<textarea cols="20" rows="6" {...register("message", { required: true})}>
</textarea>

</div>
</div>
<div className='formRightContainer'>
  
<img src={foxLogo} alt='fox' className='foxLogoimg'/>
<input value="Avail Now" type='submit'/>
</div>
</form>


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

export default Service
