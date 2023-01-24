import React from 'react'
import { useForm } from 'react-hook-form'
import  Axios from 'axios';
import { useNavigate } from 'react-router-dom';


function PasswordChanges() {
let navigate = useNavigate();

const {register,handleSubmit,formState:{errors}} = useForm();

async function onSubmit(data){
const {Oldpassword,Newpassword,Confirmpassword} = data;
  if(Newpassword == Confirmpassword){
    let response = await Axios.put("https://gora-web-service-server-4vfd.vercel.app/user/changepassword",{Oldpassword:Oldpassword,Newpassword:Newpassword},{headers:{userToken:localStorage.getItem("userToken")}});
    if(response.data.error){
        alert(response.data.error);
    }
    else{
        alert(response.data);
        navigate('/profile')
    }
  }
   else{
    alert("Confirm and New Password is not match")
   }
};

  return (
    <section className='changePassSection'>
 <form className='changePassForm' onSubmit={handleSubmit(onSubmit)}>

<h2>Change Password</h2>
<input type="password" placeholder='Old password' {...register("Oldpassword",{required:true})} />
{errors.Oldpassword && <span>This field is required</span>}
<input type="password" placeholder='New password' {...register("Newpassword",{required:true})} />
{errors.Newpassword && <span>This field is required</span>}
<input type="password" placeholder='Confirm password' {...register("Confirmpassword",{required:true})} />
{errors.Confirmpassword && <span>This field is required</span>}
<input className='changePassSubmit' type="submit" />
 </form>
    </section>
  )
}

export default PasswordChanges
