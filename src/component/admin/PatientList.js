import React,{useEffect} from 'react'
import {Link} from "react-router-dom";
import Header from '../../header/Header';
import Sidebarr from '../../sidebar/Sidebar';
import {GetPatientAction,DeletePatientAction} from "../../action"
import Tool from '../../sidebar/Tool';
import Footer from '../../footer/Footer';
import {useSelector,useDispatch} from "react-redux";
import { Toaster } from 'react-hot-toast';


export default function ProductList() {
  const auth = useSelector(state=>state.auth);
  const patientData = useSelector(state=>state?.category?.patient)
  const dispatch = useDispatch();
  
  useEffect(()=>{
     dispatch(GetPatientAction())
  },[])

  const deletePatient=async(id)=>{
    const data={id:id}
    await dispatch(DeletePatientAction(data))
    await refreshPatientList();
  }

  const refreshPatientList = async() => {
    await dispatch(GetPatientAction());
  }

	return (
		<div className="sidebar-mini skin-green-light">
      <div><Toaster/></div>
		<div className="wrapper"> 
  		  <Header/> 
  		  <Sidebarr/>
         
  {/* Content Wrapper. Contains page content */}
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <section className="content-header">
      <h1>
        Patients  List
        {/* <small>it all starts here</small> */}
      </h1>
      <ol className="breadcrumb">
        <li>
          <a href="/home">
            <i className="fa fa-dashboard" /> Home
          </a>
        </li>
        <li className="active">Manage patients</li>
      </ol>
    </section>
    {/* Main content */}
    <section className="content">
      {/* Default box */}
      <div className="box">
        <div className="box-header with-border"> 
          <div className="box-tools pull-right">
            <Link
              to="/addpatient"
              type="button"
              className="btn btn-warning" 
              data-toggle="tooltip"
              title="Add"
            >
              <i className="fa fa-plus" />
              {" Add New patient "}
            </Link>
            {" "}
          </div>
        </div>
        <div className="box-body">
        	<table className="table table-bordered table-striped dataTable" id="example2">
        	  <thead>
        	    <tr>
        	  	<th className="fw-bold">{" "}<input type="checkbox"/></th>
              
        	  	<th>User Name</th>
              <th>Password</th> 
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
        	  	<th>Action</th>
        	  	</tr>
        	  </thead>
        	  <tbody>
            {patientData?.length>0  &&patientData?.map((dt)=>(
              <tr>
                <td><input type="checkbox"/></td>
                <td>
                  <span className="text-uppercase fs-1">
                    <p>{dt?.username}</p>
                  </span>
                </td>
                <td>
                  <span className="text-lowercase fs-1">{dt?.password}</span>
                </td>  
                <td>
                  <span className="text-lowercase fs-1">{dt?.address}</span>
                </td>
                <td>
                  <span className="text-lowercase fs-1">{dt?.mobile}</span>
                </td>
                <td>
                  <span className="text-lowercase fs-1">{dt?.email}</span>
                </td>
                <td>
                  <button className="btn btn-default" onClick={(e)=>deletePatient(dt?._id)}>
                    <i className="fa fa-trash"></i>
                  </button>
                  {" "} 
                  {" "}
                  <Link to={"/editpatient/"+auth?.user?.role+"/ "+auth?.user?._id+"/"+dt?._id} className="btn btn-default">
                    <i className="fa fa-edit"></i>
                  </Link>
                </td>
              </tr>
              ))}
        	  </tbody>
        	</table>
        </div>
        {/* /.box-body */}
        {/*<div className="box-footer">Footer</div>*/}
        {/* /.box-footer*/}
      </div>
      {/* /.box */}
    </section>
    {/* /.content */}
  </div>
  {/* /.content-wrapper */}
 


       <Footer/>
       <Tool/> 
   
  <div className="control-sidebar-bg" />
</div>

			
		</div>
	)
}