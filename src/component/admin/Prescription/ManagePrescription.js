import React,{useEffect} from 'react'
import {Link} from "react-router-dom";
import Header from '../../../header/Header';
import Sidebarr from '../../../sidebar/Sidebar';
import { GetPrescriptionAction,DeletePrescriptionAction} from "../../../action"
import Tool from '../../../sidebar/Tool';
import Footer from '../../../footer/Footer';
import {useSelector,useDispatch} from "react-redux";
import { Toaster } from 'react-hot-toast';

export default function PrescriptionList() {
  const auth = useSelector(state=>state.auth);
  const prescriptionData = useSelector(state=>state?.prescription?.data?.data)
  const dispatch = useDispatch();
  
  useEffect(async()=>{
    await dispatch(GetPrescriptionAction())
  },[])

  
  const refreshPrescriptionList = async() => {
    await dispatch(GetPrescriptionAction());
  }
  const deletePrescription = async(id)=>{
    const data={id:id}
    await dispatch(DeletePrescriptionAction(data))
    await refreshPrescriptionList();
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
        Prescription List
      </h1>
      <ol className="breadcrumb">
        <li>
          <a href="/home">
            <i className="fa fa-dashboard" /> Home
          </a>
        </li>
        <li>
          <a className="active">Manage Prescription</a>
        </li>
      </ol>
    </section>
    {/* Main content */}
    <section className="content">
      {/* Default box */}
      <div className="box">
        <div className="box-header with-border"> 
          <div className="box-tools pull-right">

            <Link
              // to="/home"
              to="/add-prescription"
              type="button"
              className="btn btn-warning" 
              data-toggle="tooltip"
              title="Add"
            >
              <i className="fa fa-plus" />
              {" Add New Prescription "}
            </Link>
            {" "}
          </div>
        </div>
        <div className="box-body">
        	<table className="table table-bordered table-striped dataTable" id="example2">
        	  <thead>
        	    <tr>
                    <th className="fw-bold">{" "}<input type="checkbox"/></th>
                    <th>Name</th>
                    <th>Dose</th> 
                    <th>Category</th>
                    <th>Action</th>
        	  	</tr>
        	  </thead>
        	  <tbody>
              
            {prescriptionData?.length>0 && prescriptionData?.map((dt)=>(
              <tr>
                <td><input type="checkbox"/></td>
                <td>
                  <span className="text-uppercase fs-1"><p>{dt?.name}</p></span>
                </td>  
                <td>
                  <span className="text-lowercase fs-1">{dt?.dose}</span>
                </td>
                <td>
                  <span className="text-lowercase fs-1">{dt?.category}</span>
                </td>
                <td>
                  <button title="Delete" className="btn btn-default" onClick={()=>deletePrescription(dt?._id)}>
                    <i className="fa fa-trash"></i>
                  </button>
                  {" "} 
                  {" "}
                  {/* <Link to={"/editpatient/"+auth?.user?.role+"/ "+auth?.user?._id+"/"+dt?._id} className="btn btn-default">
                    <i className="fa fa-edit"></i>
                  </Link> */}
                  <Link title="Edit" to={"/edit-prescription/"+dt?._id} className="btn btn-default">
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
)}