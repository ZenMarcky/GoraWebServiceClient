import React, { useContext } from 'react';
import instaIcon from '../images/instaIcon.png';
import faceIcon from '../images/facebookIcon.png';
import twitterIcon from '../images/twitterIcon.png';
import youtubeIcon from '../images/youtubeIcon.png';
import loginPhoneIcon from '../images/loginPhone.png';
import loginGlobeIcon from '../images/loginGlobe.png';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Axios from 'axios';
import { UserAuthContext } from '../helper/Context';

function Login() {

let navigate = useNavigate();

const {register,handleSubmit,formState:{errors}} = useForm();
const {globalAuthState,setGlobalAuthState} = useContext(UserAuthContext);

async function onSubmit(data){
let response = await Axios.post('https://gora-web-service-server-4vfd.vercel.app/user/login',data);
if(response.data.error){
  alert(response.data.error)
}
else{
  // localStorage.setItem('userToken',response.data)
setGlobalAuthState({...globalAuthState,status:true});
alert('Login Successful')

navigate('/');
}
}

  return (



   <React.Fragment>
    <section className='LoginLandingSection'>

<div className='leftLoginContent'>
<div className='leftLoginText'>
<h2>A Website Programming</h2>
<h1>Service</h1>
<hr/>
<p>There is so much that goes into building a beautiful website, so when some people need a website for their business, Gora Web Service will help you to to make your dream come true.</p>
<div className='loginSocialIcon'>
<a href=""><img src={faceIcon} alt="facebook" /></a>
<a href=""><img src={twitterIcon} alt="twitter" /></a>
<a href=""><img src={instaIcon} alt="instaicon" /></a>
<a href=""><img src={youtubeIcon} alt="youtube" /></a>
</div>
</div>
<div className='loginPhoneNumber'>
<div className='loginPhoneContent'>
<img src={loginPhoneIcon} alt="phone" />
<p>+69215433057</p>
</div>
<div className='loginPhoneContent'>
<img src={loginGlobeIcon} alt="phone" />
<p>GoraService.com</p>
</div>
</div>
</div>


<div className='rightLoginContent'>

<form className='LoginForm' onSubmit={handleSubmit(onSubmit)}>
<h1>Login</h1>
<div className='loginInput'>
<h2>Email</h2>
<input type="email" {...register("email",{required:true})}/>
{errors.email && <span>This field is required</span>}
</div>
<div className='loginInput'>
<h2>Password</h2>
<input type="password" {...register("password",{required:true})}/>
{errors.email && <span>This field is required</span>}
</div>
<input className='loginSubmitButton' value='Login' type="submit" />
<Link to={'/register'}>Create Account</Link>
</form>
</div>


   </section>

   
   </React.Fragment>
  )
}

export default Login
