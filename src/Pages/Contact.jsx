import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import placeHolderIcon from '../images/placeholder.png';
import contactIcon from '../images/Phone.png'
import {useForm} from 'react-hook-form';
import Axios from 'axios';

function Contact() {

let navigate = useNavigate();

let [check,setCheck]= useState(false);

  const {register,handleSubmit,formState:{errors}} = useForm();


    async function onSubmit(data){
     if(check){
      let response = Axios.post('https://gora-web-service-server-4vfd.vercel.app/contact/',data);
      if(response){
        alert("Success");
  navigate('/');
      }
     }
     else{
      alert('You Need To Accept Our Terms')
     }
        };
  

  return (
  <React.Fragment>
    <section className='contactPageSection'>
      
<div className='ContactContainer'>
<div className='contactLeftTopContent'>
<h1 className='contactContentHeading'>Get in touch</h1>
<p>Use our contact form for all information requests directly or let us know if you have something for us to help you.</p>
<p>Feel free to get in touch with us via email or phone</p>
<hr/>
</div>
<div className='contactLeftBottomContent'>
<div className='contactInformation'>
<img src={placeHolderIcon} alt='phone'/>
<div className='contactContent'>
<h1>Our Office Location</h1>
<p><i>Gora Web Service</i></p>
<p><i>Region IV Calabarzon, Laguna  , Philippines</i></p>
</div>
</div>
<div className='contactInformation'>
<img src={contactIcon} alt='phone'/>
<div className='contactContent'>
<h1>Phone (Landline)</h1>

<p><i>+639325433057</i></p>
</div>
</div>

</div>
</div>
<form className='ContactFormContainer' onSubmit={handleSubmit(onSubmit)}>
<h1>Get started with a free quotation</h1>
<div className='contactInput'>
<p>Name</p>
<input type="text" {...register("name", { required: true})} />
{errors.name && <span>This field is required</span>}
</div>
<div className='contactInput'>
<p>Email</p>
<input type="email" {...register("email", { required: true})}/>
{errors.email && <span>This field is required</span>}
</div>
<div className='contactInput'>
<p>Message</p>
<textarea cols="46" rows="5" {...register("message", { required: true})}>

</textarea>
<div className='checkBoxContainer'>
<input onChange={(e)=>{setCheck(e.target.checked)}}  className='checkBox' type="checkbox" />
<p>I accept the Term of service</p>
</div>
</div>
<input className='contactFormSubmitButton' value="Submt your request" type="submit" />
</form>
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

export default Contact
