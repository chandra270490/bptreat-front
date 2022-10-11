import React,{useEffect} from 'react'
import {Link} from "react-router-dom";
import Header from '../../../header/Header';
import Sidebarr from '../../../sidebar/Sidebar';
import { GetFaqAction,DeleteFaqAction} from "../../../action"
import Tool from '../../../sidebar/Tool';
import Footer from '../../../footer/Footer';
import {useSelector,useDispatch} from "react-redux";
import { Toaster } from 'react-hot-toast';

export default function FaqList() {
  const auth = useSelector(state=>state.auth);
  const faqData = useSelector(state=>state?.faq?.data?.data)
  const dispatch = useDispatch();
  
  useEffect(async()=>{
    await dispatch(GetFaqAction())
  },[])

  
  const refreshFaqList = async() => {
    await dispatch(GetFaqAction());
  }
  const deleteFaq = async(id)=>{
    const data={id:id}
    await dispatch(DeleteFaqAction(data))
    await refreshFaqList();
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
        Faqs  List
      </h1>
      <ol className="breadcrumb">
        <li>
          <a href="/home">
            <i className="fa fa-dashboard" /> Home
          </a>
        </li>
        <li>
          <a className="active">Manage Faqs</a>
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
              to="/add-faq"
              type="button"
              className="btn btn-warning" 
              data-toggle="tooltip"
              title="Add"
            >
              <i className="fa fa-plus" />
              {" Add New Faq "}
            </Link>
            {" "}
          </div>
        </div>
        <div className="box-body">
        	<table className="table table-bordered table-striped dataTable" id="example2">
        	  <thead>
        	    <tr>
                    <th className="fw-bold">{" "}<input type="checkbox"/></th>
                    
                    <th>Title</th>
                    <th>Category</th> 
                    <th>Action</th>
        	  	</tr>
        	  </thead>
        	  <tbody>
              
            {faqData?.length>0 && faqData?.map((dt)=>(
              <tr>
                <td><input type="checkbox"/></td>
                
                {(() => {
                  if (
                    dt?.description != ""
                  ) {
                    return (
                      <div className="col-sm-5">
                        { <td>
                            <span className="text-uppercase fs-1"><p>Help Content</p></span>
                          </td> 
                          
                        }
                      </div>
                    );
                  } else {
                    return (
                      <div className="col-sm-5">
                        <td>
                          <span className="text-uppercase fs-1"><p>{dt?.title}</p></span>
                        </td>
                      </div>
                    );
                  }
                })()}

                {(() => {
                  if (
                    dt?.description != ""
                  ) {
                    return (
                      <td>
                        {<span className="text-uppercase fs-1"><p>HELP</p></span>}
                      </td>
                    );
                  } else {
                    return (
                        <td>
                          {<span className="text-uppercase fs-1"><p>FAQ</p></span>}
                        </td>
                    );
                  }
                })()}


                
                <td>

                {(() => {
                  if (
                    dt?.description == ""
                  ) {
                    return (
                      <button title="Delete" className="btn btn-default" onClick={()=>deleteFaq(dt?._id)}>
                        <i className="fa fa-trash"></i>
                      </button>
                    );
                  }
                })()}

                  
                  {" "} 
                  {" "}

                  <Link title="Edit" to={"/edit-faq/"+dt?._id} className="btn btn-default">
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