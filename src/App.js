import './App.css';
import {Route, Routes, BrowserRouter,Link} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { UserAuthContext } from './helper/Context.jsx';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Features from './Pages/Features';
import Admin from './Pages/Admin';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Register from './Pages/Register';
import Service from './Pages/Service';
import logoBrand from './kitsune.png'
import navBurger from './menu.png'
import navClose from './close.png'
import AdminContact from './Pages/AdminContact';
import AdminBookRequest from './Pages/AdminBookRequest';
import  Axios from 'axios';
import PageNotFound from './Pages/PageNotFound';
import PasswordChanges from './Pages/PasswordChanges';




function App() {

  Axios.defaults.withCredentials = true;

//global useState
  let [globalAuthState,setGlobalAuthState] = useState({
    username: "",
    email: "",
    id:"",
    isAdmin:false,
    status: false
  });

  //globalNavbarFunction
let [showNav, setShowNav]= useState(false);
let openNav = (status)=>{
  if(status === true){
    setShowNav(true)
  }
  else{
    setShowNav(false)
  }
};


//logout Button
const logOut = async ()=>{
let response = await Axios.get('https://gora-web-service-server-4vfd.vercel.app/deletecookie')
if(response){
  setGlobalAuthState({...globalAuthState,
    username: "",
      email: "",
      id:0,
      isAdmin:false,
      status: false
  });
  alert('Logout Successful')
}

}

//global useEffect
useEffect(()=>{
async function authUserLocalData(){
  let response = await Axios.get('https://gora-web-service-server-4vfd.vercel.app/user/auth')
if(response.data.error){

 setGlobalAuthState({...globalAuthState,status:false});
}
else{
  setGlobalAuthState({
    ...globalAuthState,
    username: response.data.username,
    email: response.data.email,
    id:response.data.id,
    isAdmin:response.data.isAdmin,
    status: true
   
  })

}
};
authUserLocalData();
},[globalAuthState.status]);



  return (
    <React.Fragment>
  <UserAuthContext.Provider value={{globalAuthState,setGlobalAuthState}}>
   <BrowserRouter>
   {/*--------------------------- Big screen navbar-------------------------- */}
   <nav className='navBar'>
    <div className='navBrand'>
      <img src={logoBrand} className="Brandlogoimg"  alt="" />
    
<div className='navBrandTitle'>
<h1>Gora Web Service</h1>
<p>our service is yours</p>
</div>
    </div>
    <div className='navLink'>
    <Link to={'/'}>Home</Link>
    <Link to={'/service'}>Service</Link>
    <Link to={'/contact'}>Contact</Link>
   {
    !globalAuthState.status ? 
    <> <Link to={'/login'}>Login</Link>
    <Link to={'/register'}>Register</Link></> 
    :
   <>
    <Link to={'/profile'}>{globalAuthState.username}</Link>
    <Link to={'/'} onClick={logOut}>Logout</Link>
    {
    globalAuthState.isAdmin && <Link to={'/admin'}>Admin</Link>
   }
   </>
   }
   
    </div>
<img src={navBurger} onClick={()=>{openNav(true)}} className='navBurger'/>
   </nav>
      {/*---------------------- small screen navbar-------------------------------------- */}
      <nav className={showNav ? 'SmallnavBar' : 'closeSmallnavBar'}>
   <img src={navClose} onClick={()=>{openNav(false)}} className='navCloseButton'/>
    <div className='smallnavLink'>
    <Link to={'/'}>Home</Link>
    <Link to={'/service'}>Service</Link>
    <Link to={'/contact'}>Contact</Link>
    {
    !globalAuthState.status ? 
    <> <Link to={'/login'}>Login</Link>
    <Link to={'/register'}>Register</Link></> 
    :
   <>
    <Link to={'/profile'}>{globalAuthState.username}</Link>
    <Link to={'/'} onClick={logOut}>Logout</Link>
   </>
   }
   {
    globalAuthState.isAdmin && <Link to={'/admin'}>Admin</Link>
   }
    </div>
   </nav>
   
   <Routes>
    <Route path='/' exact element={<Home/>} />
    <Route path='/contact' exact element={<Contact/>} />
    {
      globalAuthState.isAdmin ? <>
      <Route path='/admin' exact element={<Admin/>} />
    <Route path='/admincontact' exact element={<AdminContact/>} />
    <Route path='/adminbook' exact element={<AdminBookRequest/>} />
      </>
      :
      <Route path='*' exact element={<PageNotFound/>} />
    }
    <Route path='/login' exact element={<Login/>} />
   {
    globalAuthState.status ? 
    <>
     <Route path='/profile' exact element={<Profile/>} />
     <Route path='/profile/changePassword' exact element={<PasswordChanges/>} />
    </>
    :
    <Route path='*' exact element={<PageNotFound/>} />
   }
    <Route path='*' exact element={<PageNotFound/>} />
    <Route path='/register' exact element={<Register/>} />
    <Route path='/service' exact element={<Service/>} />
    <Route path='/features' exact element={<Features/>} />
   
  </Routes>
  
   </BrowserRouter>
   </UserAuthContext.Provider>
    </React.Fragment>
  );
}

export default App;
