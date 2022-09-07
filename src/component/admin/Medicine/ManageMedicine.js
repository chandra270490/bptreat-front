import React,{useEffect,useState} from 'react'
import {Link} from "react-router-dom";
import Header from '../../../header/Header';
import Sidebarr from '../../../sidebar/Sidebar';
import { GetMedicineAction,DeleteMedicineAction} from "../../../action"
import Tool from '../../../sidebar/Tool';
import Footer from '../../../footer/Footer';
import {useSelector,useDispatch} from "react-redux";
import { Toaster } from 'react-hot-toast';

export default function MedicineList() {
  const auth = useSelector(state=>state.auth);
  const medicineData = useSelector(state=>state?.medicine?.data)
  const dispatch = useDispatch();
  
  useEffect(async()=>{
    await dispatch(GetMedicineAction())
  },[])

  
  const refreshMedicineList = async() => {
    await dispatch(GetMedicineAction());
  }
  const deleteMedicine = async(id)=>{
    const data={id:id}
    await dispatch(DeleteMedicineAction(data))
    await refreshMedicineList();
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
        Medicines  List
      </h1>
      <ol className="breadcrumb">
        <li>
          <a href="/home">
            <i className="fa fa-dashboard" /> Home
          </a>
        </li>
        <li>
          <a className="active">Manage Medicines</a>
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
              to="/add-medicine"
              type="button"
              className="btn btn-warning" 
              data-toggle="tooltip"
              title="Add"
            >
              <i className="fa fa-plus" />
              {" Add New Medicine "}
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
              
            {medicineData?.length>0 && medicineData?.map((dt)=>(
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
                  <button className="btn btn-default" onClick={()=>deleteMedicine(dt?._id)}>
                    <i className="fa fa-trash"></i>
                  </button>
                  {" "} 
                  {" "}
                  {/* <Link to={"/editpatient/"+auth?.user?.role+"/ "+auth?.user?._id+"/"+dt?._id} className="btn btn-default">
                    <i className="fa fa-edit"></i>
                  </Link> */}
                  <Link to={"/edit-medicine/"+dt?._id} className="btn btn-default">
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