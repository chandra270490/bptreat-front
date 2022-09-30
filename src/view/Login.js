import React,{useEffect,useState} from 'react'
import {Link,Redirect} from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux";
import {LoginPage} from "../action";
import { Toaster } from 'react-hot-toast';
// import {logo} from '../../public/logo.png';

export default function Login() {

  const auth = useSelector(state=>state.auth); 
   const dispatch =  useDispatch()

   const [email,setEmail] = useState("");
   const [password,setPassword] = useState(""); 

   const loginData=()=>{
         const data={email,password};
         dispatch(LoginPage(data));
    }




	return (
		<div className="hold-transition login-page">
      <div><Toaster/></div>
		<div className="login-box">
  <div className="login-logo">
    <a href="../../index2.html">
      <a aria-current="page" className="MobileHeaderTop__logo active" href="#">
        <img src="dist/img/logo.png" style={{height:"100px"}}></img>
      </a>
    </a>
  </div>
  <div className="login-box-body" style={{borderRadius: "4%"}}>
    <p className="login-box-msg" style={{fontWeight: "bold"}}>Sign in</p>
    <form>
      <div className="form-group has-feedback">
        <input type="email" 
              className="form-control" 
              placeholder="Email"
              style={{borderRadius: "7px"}}
              onChange={(e)=>setEmail(e.target.value)} />
        <span className="glyphicon glyphicon-envelope form-control-feedback icoColor" />
      </div>
      <div className="form-group has-feedback">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          style={{borderRadius: "7px"}}
          onChange={(e)=>setPassword(e.target.value)} />
        
        <span className="glyphicon glyphicon-lock form-control-feedback" />
      </div>
      <div className="row">
        {/* <div className="col-xs-8">
          <div className="checkbox icheck">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
          </div>
        </div> */}
        {/* /.col */}
        <div className="col-xs-4" style={{left:"137px"}}>
          <button 
          type="button" 
          className="btn btn-warning btn-block btn-flat"
          style={{'backgroundColor': '#DF1721','borderColor': '#690E14', borderRadius: "7px"}}
          // style={{backgroundColor: "#277ae1db", borderColor: "#0b5fe0", borderRadius: "7px"}}
          onClick={(e)=>loginData()}>
            Sign In
          </button>
        </div>
        {/* /.col */}
      </div>
    </form>
    {/*<div className="social-auth-links text-center">
      <p>- OR -</p>
      <a href="#" className="btn btn-block btn-social btn-facebook btn-flat">
        <i className="fa fa-facebook" /> Sign in using Facebook
      </a>
      <a href="#" className="btn btn-block btn-social btn-google btn-flat">
        <i className="fa fa-google-plus" /> Sign in using Google+
      </a>
    </div>*/}
    {/* /.social-auth-links */}
    {/* <a href="#">I forgot my password</a>
    <br />
    <Link to="/reg" className="text-center">
      Register a new membership
    </Link> */}
  </div>
  {/* /.login-box-body */}
</div>

			
		</div>
	)
}