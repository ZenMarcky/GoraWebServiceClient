import React, {  useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import  Axios, { all } from 'axios';

function Admin() {
const navigate = useNavigate();

const [allUser,setAllUser] = useState([]);

  useEffect(()=>{

    async function getUserList(){
      let response = await Axios.get('https://gora-web-service-server-4vfd.vercel.app/user');
      if(response.data.error){
        alert(response.data.error);
        navigate('/');
      }
      else{
setAllUser(...allUser,response.data);
      }
    }
getUserList();
  },[])

  return (
    <section className='adminUserAccountSection'>
     
      <div className='adminLeftNav'>
<h1>ADMIN PAGES</h1>
<div className='adminNavContainer'>
<Link to={'/admin'}>User Account</Link>
<Link to={'/admincontact'}>Contact Request</Link>
<Link to={'/adminbook'}>Book Request</Link>
</div>
</div>

<div className='adminRightData'>

<table className='adminUserTable'>
<thead>
<tr>
    <th>User Name</th>
    <th>User Email</th>
    <th>Updated At</th>
    <th>Created At</th>
    </tr>
</thead>
 <tbody>
{
  allUser.length > 0 && allUser.map((data)=>{
    return(
      <tr key={data.id}>
      <td>{data.username}</td>
      <td>{data.email}</td>
      <td>{data.updatedAt.substring(0,10)}</td>
      <td>{data.createdAt.substring(0,10)}</td>
      </tr>
    )
  })
}
    
 </tbody>
   

</table>


</div>
    </section>
  )
}

export default Admin
