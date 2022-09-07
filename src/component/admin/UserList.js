import React,{useEffect,useState} from 'react'
import {Link,useNavigate} from "react-router-dom";
import Header from '../../header/Header';
import Sidebarr from '../../sidebar/Sidebar';
import {GetPatientAction,DeletePatientAction} from "../../action"
import Tool from '../../sidebar/Tool';
import Footer from '../../footer/Footer';
import {useSelector,useDispatch} from "react-redux";


export default function ProductList() {
  const auth = useSelector(state=>state.auth);
  const patientData = useSelector(state=>state?.category?.patient)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(()=>{
    dispatch(GetPatientAction())
  },[])

  const deletePatient=async(id)=>{
    const data={id:id}
    dispatch(DeletePatientAction(data))
    await dispatch(GetPatientAction()) 
    alert("patient Delete Successfully...")

  }

	return (
		<div className="sidebar-mini skin-green-light">
		<div className="wrapper"> 
  		  <Header/> 
  		  <Sidebarr/>
         
  {/* Content Wrapper. Contains page content */}
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <section className="content-header">
      <h1>
        All patient  List
        {/* <small>it all starts here</small> */}
      </h1>
      <ol className="breadcrumb">
        <li>
          <a href="/home">
            <i className="fa fa-dashboard" /> Home
          </a>
        </li>
        <li>
          <a href="#">Manage patient</a>
        </li>
        <li className="active">All patient</li>
      </ol>
    </section>
    {/* Main content */}
    <section className="content">
      {/* Default box */}
      <div className="box">
        <div className="box-header with-border"> 
          <div className="box-tools pull-right">
            {/* <Link
              to="/addpatient"
              type="button"
              className="btn btn-warning" 
              data-toggle="tooltip"
              title="Add"
            > */}
            <Link
              // to="/home"
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
            {/*<Link to="/upload"
              type="button"
              className="btn btn-primary"
              data-toggle="tooltip"
              title="Upload"
            >
              <i className="fa fa-upload" />{" "}
              {"Bulk Upload"}
            </Link>*/}
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
              {/* <th>Status</th>  */}
        	  	<th>Action</th>
        	  	</tr>
              {/* <tr>
        	  	<th className="fw-bold">{" "}<input type="checkbox"/></th>
              
        	  	<th>Patient Code</th>
              <th>Patient Type</th> 
              <th>Expiry</th> 
        	  	<th>Action</th>
        	  	</tr> */}
        	  </thead>
        	  <tbody>
              {/* <tr>
                <td><input type="checkbox"/></td>
                <td>
                  <span className="text-uppercase fs-1">
                    <p>Amit</p>
                  </span>
                </td>
                <td>
                  <span className="text-lowercase fs-1">Verma</span>
                </td>  
                <td>
                  <span className="text-lowercase fs-1">1234567890</span>
                </td>
                <td>
                  <span className="text-lowercase fs-1">amitverma@gmail.com</span>
                </td>
                <td>
                  <button className="btn btn-default">
                    <i className="fa fa-trash"></i>
                  </button>
                  {" "} 
                  {" "}
                  <div className="btn btn-default">
                    <i className="fa fa-edit"></i>
                  </div>
                </td>
              </tr> */}

              {/* <tr>
                <td><input type="checkbox"/></td>
                <td>
                  <span className="text-uppercase fs-1">
                    <p>Satya</p>
                  </span>
                </td>
                <td>
                  <span className="text-lowercase fs-1">Dey</span>
                </td>  
                <td>
                  <span className="text-lowercase fs-1">0987654321</span>
                </td>
                <td>
                  <span className="text-lowercase fs-1">satyadey@gmail.com</span>
                </td>
                <td>
                  <button className="btn btn-default">
                    <i className="fa fa-trash"></i>
                  </button>
                  {" "} 
                  {" "}
                  <div className="btn btn-default">
                    <i className="fa fa-edit"></i>
                  </div>
                </td>
              </tr>

              <tr>
                <td><input type="checkbox"/></td>
                <td>
                  <span className="text-uppercase fs-1">
                    <p>Gopal</p>
                  </span>
                </td>
                <td>
                  <span className="text-lowercase fs-1">Dey</span>
                </td>  
                <td>
                  <span className="text-lowercase fs-1">1212121212</span>
                </td>
                <td>
                  <span className="text-lowercase fs-1">gopaldey@gmail.com</span>
                </td>
                <td>
                  <button className="btn btn-default">
                    <i className="fa fa-trash"></i>
                  </button>
                  {" "} 
                  {" "}
                  <div className="btn btn-default">
                    <i className="fa fa-edit"></i>
                  </div>
                </td>
              </tr> */}
              
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
                  <span className="text-lowercase fs-1">{dt?.phone}</span>
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
                  {/* <Link to={"/editpatient/"+auth?.user?.role+"/ "+auth?.user?._id+"/"+dt?._id} className="btn btn-default">
                    <i className="fa fa-edit"></i>
                  </Link> */}
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