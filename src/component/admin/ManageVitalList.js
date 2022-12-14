import React,{useEffect} from 'react'
import {Link} from "react-router-dom";
import Header from '../../header/Header';
import Sidebarr from '../../sidebar/Sidebar';
import {GetVitalAction,DeleteVitalAction} from "../../action"
import Tool from '../../sidebar/Tool';
import Footer from '../../footer/Footer';
import {useSelector,useDispatch} from "react-redux";
import { Toaster } from 'react-hot-toast';

export default function VitalList() {
  const auth = useSelector(state=>state.auth);
  const vitalData = useSelector(state=>state?.vital?.data)
  const dispatch = useDispatch();
  
  useEffect(async()=>{
    await dispatch(GetVitalAction())
  },[])

  
  const refreshVitalList = async() => {
    await dispatch(GetVitalAction());
  }
  const deleteVital = async(id)=>{
    const data={id:id}
    await dispatch(DeleteVitalAction(data))
    await refreshVitalList();
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
        Vitals  List
        {/* <small>it all starts here</small> */}
      </h1>
      <ol className="breadcrumb">
        <li>
          <a href="/home">
            <i className="fa fa-dashboard" /> Home
          </a>
        </li>
        <li>
          <a className="active">Manage Vitals</a>
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
              to="/addvital"
              type="button"
              className="btn btn-warning" 
              data-toggle="tooltip"
              title="Add"
            >
              <i className="fa fa-plus" />
              {" Add New Vital "}
            </Link>
            {" "}
          </div>
        </div>
        <div className="box-body">
        	<table className="table table-bordered table-striped dataTable" id="example2">
        	  <thead>
        	    <tr>
        	  	<th className="fw-bold">{" "}<input type="checkbox"/></th>
              
        	  <th>Vital Name</th>
              <th>Minimum Value</th> 
              <th>Maximum Value</th>
        	  	<th>Action</th>
        	  	</tr>
        	  </thead>
        	  <tbody>
            {vitalData?.length>0  &&vitalData?.map((dt)=>(
              <tr>
                <td><input type="checkbox"/></td>
                <td>
                  <span className="text-uppercase fs-1">
                    <p>{dt?.name}</p>
                  </span>
                </td>
                <td>
                  <span className="text-lowercase fs-1">{dt?.minValue}</span>
                </td>  
                <td>
                  <span className="text-lowercase fs-1">{dt?.maxValue}</span>
                </td>
                <td>
                  <button className="btn btn-default" onClick={()=>deleteVital(dt?._id)}>
                    <i className="fa fa-trash"></i>
                  </button>
                  {" "} 
                  {" "}
                  <Link to={"/editvital/"+dt?._id} className="btn btn-default">
                    <i className="fa fa-edit"></i>
                  </Link>
                </td>
              </tr>
              ))}
        	  </tbody>
        	</table>
        </div>
        {/* /.box-body */}
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