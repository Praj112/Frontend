import React,  { useState } from 'react';
import { NavLink } from 'react-router-dom';

import notification from "../src/images/notification.png";
import interest from "../src/images/interest.png";
import meditate from "../src/images/meditate.png"
import { GoogleLogin } from 'react-google-login';
import './css/App.css'
import {AuthContext} from "./context/auth";
import { useContext } from 'react';
import { useGoogleLogin } from 'react-google-login'

const Home =() => {
  const auth = useContext(AuthContext)
  const [loginButton, setloginButton] = useState(false);
  //const [loginData, setloginData] = useState({});
  //const [login, setlogin] = useState(false);


  const responseGoogle = (response) => {
    const user = {
      user:response.profileObj.name,
      email:response.profileObj.email
    };
    setloginButton(false);
      console.log(user);
      auth.login();
      auth.setLoggedInUser(user);
      console.log(auth.user);
  }


    return (
        <>
            <section id="header" className="d-flex align-items-center">

                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify- content-center flex-column">
                                {!auth.isLoggedIn ? <h1>
                                     A healthy and happy body is worth the <strong className="brand-name"> Effort</strong>
                                </h1>:<h1>Hello <strong className="brand-name"> {auth.user.userName} </strong> Welcome!! </h1>}


                                <h2 className="my-3">
                                    We are the team of talented developer making websites
                                </h2>

                                {!auth.isLoggedIn ? <div className="mt-3">
                                    <button className="btn-get-started" onClick={()=>{setloginButton(true)}} > Login </button>
                                </div>:null}
                           </div>
                           <div className="col-lg-6 order-1 order-lg-2 header-img">
                                {((!auth.isLoggedIn && !loginButton)  || (auth.isLoggedIn && loginButton) || (auth.isLoggedIn && !loginButton)) && <div className="animation-two"><lottie-player className="animation-two" src="https://assets2.lottiefiles.com/packages/lf20_ocGoFt.json"  background="transparent"  speed="1"  style={{width: '450px', height: '450px'}}  loop  autoplay></lottie-player></div>}
                                {(!auth.isLoggedIn && loginButton)  && <div class="container text-center">
                                  <GoogleLogin
                                 clientId="942867383585-teeiktr8qv4g9dimnqb31gq0j2pfc9hd.apps.googleusercontent.com"
                                 buttonText="Login with Google"
                                 onSuccess={responseGoogle}
                                 onFailure={responseGoogle}
                                 isSignedIn={true}
                                 cookiePolicy={'single_host_origin'}
                               />
                               </div>}
                            </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="boundary" data-aos="fade-down" data-aos-offset="400"  data-aos-duration="2000"  data-aos-once="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#24a0ed" fill-opacity="1" d="M0,128L80,149.3C160,171,320,213,480,234.7C640,256,800,256,960,245.3C1120,235,1280,213,1360,202.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
            <h1 className="text-center" style={{color:"white",background:"#24a0ed",fontSize:'3.5em'}}><span  data-aos="zoom-in" data-aos-delay="500"  >Features We Offer</span></h1>
            <svg style={{position:'relative',bottom:'10px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#24a0ed" fill-opacity="1" d="M0,128L360,128L720,320L1080,128L1440,192L1440,0L1080,0L720,0L360,0L0,0Z"></path></svg>
            </div>


            <section className="features container">

              <div className="row"   data-aos="fade-left" style={{marginBottom:'5em'}}>
                <div className="col-lg-6 " >
                  <img style={{width:'90%',objectFit:'cover'}} src={notification}  alt= "home img" />
                </div >
                <div className="col-lg-6 card"  style={{borderLeftColor:'#24a0ed ',borderLeftWidth:'2px',borderLeftStyle:'solid'}}>
                  <h2 style={{color:'#24a0ed',marginTop:'5px'}}>Push Notification</h2>
                  <hr></hr>
                  <p style={{color:'grey',fontSize:'1.2em'}}>lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
                </div>
              </div>

              <div className="row" data-aos="fade-right" style={{marginBottom:'5em'}}>
                <div className="col-lg-6 card"  style={{borderLeftColor:'#24a0ed ',borderLeftWidth:'2px',borderLeftStyle:'solid'}}>
                  <h2 style={{color:'#24a0ed',marginTop:'5px'}}>We consider your interest</h2>
                  <hr></hr>
                  <p style={{color:'grey',fontSize:'1.2em'}}>lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlo</p>
                </div>
                <div className="col-lg-6 ">
                  <img style={{width:'90%',objectFit:'cover'}} src={interest}  alt= "home img" />

                </div>
              </div>
              <div className="row" data-aos="fade-left" style={{marginBottom:'5em'}}>
                <div className="col-lg-6 ">
                  <img style={{width:'90%',objectFit:'cover'}} src={meditate}  alt= "home img" />
                </div>
                <div className="col-lg-6 card"  style={{borderLeftColor:'#24a0ed ',borderLeftWidth:'2px',borderLeftStyle:'solid'}}>
                  <h2 style={{color:'#24a0ed',marginTop:'5px'}}>Meditate</h2>
                  <hr></hr>
                  <p style={{color:'grey',fontSize:'1.2em'}}>Our developers along with the doctors have created the animation which tells the best time for which we should breath in and breath out in order to reach a calm state!</p>
                </div>
              </div>
            </section>

            <section className=" text-center" style={{background:'#393e46',height:'17em', color:'white'}}>
                <div  style={{paddingTop:'5.5em'}}>
                  <h3> Made with love ♥</h3>
                  <br/>
                  <p style={{color:'#24a0ed', letterSpacing:"5px"}}>© ℗ ® ™ Copyright 2021 OurBrand</p>
                </div>
            </section>


        </>
    );
}
export default Home;
