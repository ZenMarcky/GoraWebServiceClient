
import React from 'react';
import { useForm } from 'react-hook-form';
import  Axios  from 'axios';
import { Link , useNavigate} from 'react-router-dom';



function Register() {

  let navigate = useNavigate();

const {register,handleSubmit,formState:{errors}} = useForm();

async function onSubmit(data){
let response = await Axios.post('https://gora-web-service-server-4vfd.vercel.app/user/register',data);
if(response.data.error){
  alert(response.data.error);
}
else{
  alert('Register Successful')
  navigate('/login')
}
};

  return (

    <section className='registerPageSection'>
     <form className='registerForm' onSubmit={handleSubmit(onSubmit)}>
<h1>Register</h1>
<div className='loginInput'>
<h2>Username</h2>
<input type="text" {...register("username",{required:true})} />
{errors.username && <span>This field is required</span>}
</div>
<div className='loginInput'>
<h2>Email</h2>
<input type="email" {...register('email',{required:true})}/>
{errors.email && <span>This field is required</span>}
</div>
<div className='loginInput'>
<h2>Password</h2>
<input autoComplete='off' type="password" {...register('password',{required:true})}/>
{errors.password && <span>This field is required</span>}
</div>
<input className='registertButton' value='Register' type="submit" />

</form>
    </section>
  )
}

export default Register
