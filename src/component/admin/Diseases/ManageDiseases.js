import React,{useEffect,useState} from 'react'
import {Link} from "react-router-dom";
import Header from '../../../header/Header';
import Sidebarr from '../../../sidebar/Sidebar';
import {GetDiseaseAction,DeleteDiseaseAction} from "../../../action"
import Tool from '../../../sidebar/Tool';
import Footer from '../../../footer/Footer';
import {useSelector,useDispatch} from "react-redux";
import { Toaster } from 'react-hot-toast';

export default function DiseaseList() {
  const auth = useSelector(state=>state.auth);
  const diseaseData = useSelector(state=>state?.disease?.data?.data)
  const dispatch = useDispatch();
  
  useEffect(async()=>{
    await dispatch(GetDiseaseAction())
  },[])

  
  const refreshDiseaseList = async() => {
    await dispatch(GetDiseaseAction());
  }
  const deleteDisease = async(id)=>{
    const data={id:id}
    await dispatch(DeleteDiseaseAction(data))
    await refreshDiseaseList();
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
        Diseases  List
      </h1>
      <ol className="breadcrumb">
        <li>
          <a href="/home">
            <i className="fa fa-dashboard" /> Home
          </a>
        </li>
        <li>
          <a className="active">Manage Diseases</a>
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
              to="/add-disease"
              type="button"
              className="btn btn-warning" 
              data-toggle="tooltip"
              title="Add"
            >
              <i className="fa fa-plus" />
              {" Add New Disease "}
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
                    <th>Type</th> 
                    <th>Recovery Rate</th>
                    <th>Severity</th>
                    <th>Action</th>
        	  	</tr>
        	  </thead>
        	  <tbody>
              
            {diseaseData?.length>0 && diseaseData?.map((dt)=>(
              <tr>
                <td><input type="checkbox"/></td>
                <td>
                  <span className="text-uppercase fs-1"><p>{dt?.name}</p></span>
                </td>  
                <td>
                  <span className="text-lowercase fs-1">{dt?.category}</span>
                </td>
                <td>
                  <span className="text-lowercase fs-1">{dt?.recoveryRate}</span>
                </td>
                <td>
                  <span className="text-lowercase fs-1">{dt?.severity}</span>
                </td>
                <td>
                  <button title="Delete" className="btn btn-default" onClick={()=>deleteDisease(dt?._id)}>
                    <i className="fa fa-trash"></i>
                  </button>
                  {" "} 
                  {" "}
                  {/* <Link to={"/editpatient/"+auth?.user?.role+"/ "+auth?.user?._id+"/"+dt?._id} className="btn btn-default">
                    <i className="fa fa-edit"></i>
                  </Link> */}
                  <Link title="Edit" to={"/edit-disease/"+dt?._id} className="btn btn-default">
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