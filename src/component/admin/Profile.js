import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import Header from '../../header/Header';
import Sidebarr from '../../sidebar/Sidebar';
import Tool from '../../sidebar/Tool';
import Footer from '../../footer/Footer';
import {EditProfileAction, GetAdminProfileAction} from "../../action";
import {useDispatch,useSelector} from "react-redux";
import { Toaster } from 'react-hot-toast';
import { useForm } from "react-hook-form";

export default function Profile() {

const dispatch = useDispatch();
const { formState: { errors } } = useForm();
const adminId = useSelector(state=>state?.auth?.user);
const id = adminId?._id;

useEffect(async()=>{
  await dispatch(GetAdminProfileAction(id))
},[]);

const adminInfo = useSelector(state=>state?.common?.data);
const [fname,setFname] = useState(adminInfo?.fname);
const [lname,setLname] = useState(adminInfo?.lname);
const [email,setEmail] = useState(adminInfo?.email);
const [contact,setContact] = useState(adminInfo?.contact);
const [gender,setGender] = useState(adminInfo?.gender);
const [address,setAddress] = useState(adminInfo?.address);

const onSubmit = () => { 
   const data={
    id,
    fname,
    lname,
    email,
    contact,
    gender,
    address
  }
   dispatch(EditProfileAction(data));
}

  const genderData = [
    { value: 'Male', name: 'male' },
    { value: 'Female', name: 'female' }
  ]
	return (
    <div className="sidebar-mini skin-green-light">
        <div><Toaster/></div>
    <div className="wrapper"> 
  		  <Header/> 
  		  <Sidebarr/> 
    <div className="content-wrapper"> 
    <section className="content-header">
      <h1>
       Update Profile
      </h1>
      <ol className="breadcrumb">
        <li>
        <Link to="/home" className="fa fa-dashboard"> Home</Link>
        </li>
        <li>
        <Link to="/profile" className="small-box-footer">Profile</Link>
        </li>
        {/* <li className="active">Add Profile</li> */}
      </ol>
    </section> 
    <section className="content"> 
        <div className="box">
            

            <div className="box-body">
            <section className="content">
            <div className="row">  
                <div className="col-md-12">
                <div className="nav-tabs-custom">
                    <div className="tab-content">
                    <div className="active tab-pane" id="settings">
                        <div className="form-horizontal">
                        <div className="form-group">
                            <label htmlFor="fname" className="col-sm-2 control-label">Name</label>
                            <div className="col-sm-4">
                            <input type="text" className="form-control" id="fname" placeholder="First Name" name="fname" value={fname} onChange={(e)=>setFname(e.target.value)}/>
                            {errors.fname && <span className='validationError'>Required</span>}
                            </div> 
                            <div className="col-sm-4">
                            <input type="text" className="form-control" id="lname" placeholder="Last Name" name="lname" value={lname} onChange={(e)=>setLname(e.target.value)}/>
                            {errors.lname && <span className='validationError'>Required</span>}
                            </div> 
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" className="col-sm-2 control-label">Email</label>
                            <div className="col-sm-8">
                            <input type="text" className="form-control" id="email" placeholder="" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            {errors.email && <span className='validationError'>Required</span>}
                            </div> 
                        </div>
    
                      <div className="form-group">
                            <label htmlFor="contact" className="col-sm-2 control-label">Contact</label>
                            <div className="col-sm-8">
                            <input type="text" value={contact} className="form-control" id="contact" placeholder="" name="contact" onChange={(e)=>setContact(e.target.value)}/>
                            {errors.contact && <span className='validationError'>Required</span>}
                            </div>
                        </div> 

                        <div className="form-group">
                            <label htmlFor="address" className="col-sm-2 control-label">Address</label>
                            <div className="col-sm-8"> 
                            <input type="text" value={address} className="form-control" id="address" placeholder="" name="address" onChange={(e)=>setAddress(e.target.value)}/>
                            </div> 
                        </div> 

                        <div className="form-group">
                            <label htmlFor="gender" className="col-sm-2 control-label">Gender</label>
                            <div className="col-sm-8"> 
                            <select
                            class="form-control"
                            required
                            id="gender"
                            value={gender}
                            onChange={(e)=>setGender(e.target.value)}>
                            {genderData.map(({ value, name }, index) => <option value={name} >{value}</option>)}
                          </select>
                            </div> 
                        </div>

                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-danger" onClick={(e)=>onSubmit()}>Update</button>
                            </div>
                        </div>
                        </div>
                    </div> 
                    </div> 
                </div> 
                </div> 
            </div> 
            </section> 
            </div>
       </div> 
    </section> 
  </div> 
  <Footer/>
       <Tool/> 
  <div className="control-sidebar-bg" />
</div>		
    </div>
	)
}