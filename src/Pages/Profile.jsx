import React,{ useContext, useEffect, useState } from 'react'
import UserPic from '../images/UserProilePic.png'
import { Link } from 'react-router-dom';
import { UserAuthContext } from '../helper/Context';
import  Axios from 'axios';

function Profile() {

let [userBooked,setUserBooked] = useState([]);

  const {globalAuthState,setGlobalAuthState} = useContext(UserAuthContext);

useEffect(()=>{

  async function getUserBooks(){
    let response = await Axios.get(`https://gora-web-service-server-4vfd.vercel.app/booked/books/${globalAuthState.id}`,{headers:{userToken:localStorage.getItem("userToken")}});
    if(response){
      setUserBooked(response.data);
    }
  }

  getUserBooks();

},[setUserBooked])

  return (
    
    <section className='profileSection'>
   
<div className='profileLeftContainer'>
<div className='profilePicUserName'>
<img src={UserPic} alt="User" />
<h1>{globalAuthState.username}</h1>
</div>
<div className='userProfileInfo'>

  <p>Username: <strong>{globalAuthState.username}</strong></p>
<p>Email: <strong>{globalAuthState.email}</strong></p>

<Link to={'/profile/changePassword'}>Change Password</Link>
</div>
</div>

<div className='profileRightContainer'>
<h1>My Book</h1>
{userBooked.length ? userBooked.map((books)=>{
  return(

      <div key={books.id} className='profileBookContainer'>
<p >Service: <strong>{books.servicetype}</strong>  </p>
<p >Package: <strong>{books.packageplan}</strong></p>
<span>Date: <strong>{books.createdAt.substring(0,10)}</strong></span>

<p><strong>{books.message}</strong></p>
</div>

  )
})
:
<div className='profileEmptyBooks'>
<h2>Your books is empty!</h2>
</div>

}

</div>
    </section>
  )
}

export default Profile
