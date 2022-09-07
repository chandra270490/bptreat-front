import React from 'react'
import { useSelector, useDispatch} from "react-redux";
import { useNavigate, NavLink } from 'react-router-dom'; 
import { Logout } from '../action';


export default function Header() {
  const dispatch =  useDispatch()
  const auth = useSelector(state=>state.auth);  
  const navigate = useNavigate();
  const logout=()=>{
    dispatch(Logout());
    localStorage.clear();
    navigate('/');
}
  // const logout = () => { 
  //   localStorage.clear();
  //   navigate('/');
  // }

	return (
		<div> 
		<header className="main-header">
    {/* Logo */}
    <a href="index2.html" className="logo">
      {/* mini logo for sidebar mini 50x50 pixels */}
      <span className="logo-mini">

        <span><b>Admin</b></span>
        {/*<b>P</b>NL*/}
      </span>
      {/* logo for regular state and mobile devices */}
      <span className="logo-lg">
        <span><b>Admin</b>Panel</span>
      </span>
    </a>
    {/* Header Navbar: style can be found in header.less */}
    <nav className="navbar navbar-static-top">
      {/* Sidebar toggle button*/}
      <a
        href="#"
        className="sidebar-toggle"
        data-toggle="push-menu"
        role="button"
      >
        <span className="sr-only">Toggle navigation</span>
      </a>
      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
          {/* User Account: style can be found in dropdown.less */}
          <li className="dropdown user user-menu">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
              <img
                src="dist/img/admin.jpg"
                className="user-image"
                alt="User Image"
              />
              <span className="hidden-xs">{auth.user.fname} {auth.user.lname}</span>
            </a>
            <ul className="dropdown-menu">
              {/* User image */}
              <li className="user-header">
                <img
                  // src="https://adminlte.io/themes/v3/dist/img/user2-160x160.jpg"
                  src="dist/img/admin.jpg"
                  className="img-circle"
                  alt="User Image"
                />
                <p>
                {auth.user.fname} {auth.user.lname} - Admin
                </p>
              </li>
              
              {/* <li className="user-body">
                <div className="row">
                  <div className="col-xs-4 text-center">
                    <a href="#">Followers</a>
                  </div>
                  <div className="col-xs-4 text-center">
                    <a href="#">Sales</a>
                  </div>
                  <div className="col-xs-4 text-center">
                    <a href="#">Friends</a>
                  </div>
                </div> 
              </li> */}
              {/* Menu Footer*/}
              <li className="user-footer">
                <div className="pull-left">
                <NavLink to="/profile" className="btn btn-default btn-flat">Profile</NavLink>
                </div>
                <div className="pull-right">
                <a href="#" className="btn btn-default btn-flat" onClick={logout}>
                    Sign out
                  </a>
                </div>
              </li>
            </ul>
          </li>
          {/* Control Sidebar Toggle Button */}
          <li>
            <a href="#" data-toggle="control-sidebar">
              <i className="fa fa-gears" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
			
		</div>
	)
}