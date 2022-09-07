import React, {useState} from 'react'
import {Link, useParams} from "react-router-dom";
import Header from '../../header/Header';
import Sidebarr from '../../sidebar/Sidebar';
import Tool from '../../sidebar/Tool';
import Footer from '../../footer/Footer';
import {EditVitalAction} from "../../action";
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { useForm } from "react-hook-form";

export default function AddVital() {
  const dispatch = useDispatch();
  const { formState: { errors } } = useForm();
  const {id} = useParams();
  const [ setEditorLoaded] = useState(false); 
  const vitalInfo = useSelector(state=>state?.vital?.data);
  const setVital = vitalInfo.find(data => data._id === id );

  const [name,setName] = useState(setVital?.name);
  const [minValue,setMinValue] = useState(setVital?.minValue);
  const [maxValue,setMaxValue] = useState(setVital?.maxValue);

const onSubmit = () => { 
   const data={
    id,
    name,
    minValue,
    maxValue
  } 
   dispatch(EditVitalAction(data));
}

	return (
		<div className="sidebar-mini skin-green-light">
      <div><Toaster/></div>
		<div className="wrapper"> 
  		  <Header/> 
  		  <Sidebarr/> 
  <div className="content-wrapper"> 
    <section className="content-header">
      <h1>
       Edit Vital
      </h1>
      <ol className="breadcrumb">
        <li>
        <Link to="/home" className="fa fa-dashboard"> Home</Link>
        </li>
        <li>
          <Link to="/vitals" className="small-box-footer">Manage Vitals</Link>
        </li>
        <li className="active">Edit Vital</li>
      </ol>
    </section> 
    <section className="content"> 
        <div className="box">
            <div className="box-header with-border"> 
                <div className="box-tools pull-right">
                    <Link
                    to="/vitals"
                    type="button"
                    className="btn btn-success" 
                    data-toggle="tooltip"
                    title="Add"
                    >
                    <i className="fa fa-eye" />
                    {" View Vital"}
                    </Link> 
                </div>
            </div>
            <div className="box-body">
            <section className="content">
            <div className="row">  
                <div className="col-md-12">
                <div className="nav-tabs-custom">
                    <div className="tab-content">
                    <div className="active tab-pane" id="settings">
                        <form className="form-horizontal">
                        <div className="form-group">
                            <label htmlFor="name" className="col-sm-2 control-label">Name</label>
                            <div className="col-sm-5">
                            <input type="text"  className="form-control" id="name" placeholder="" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                            {errors.name && <span className='validationError'>Required</span>}
                            </div> 
                        </div>

                        <div className="form-group">
                            <label htmlFor="minValue" className="col-sm-2 control-label">Minimum Value</label>
                            <div className="col-sm-5">
                            <input type="text"  className="form-control" id="minValue" placeholder="" name="minValue" value={minValue} onChange={(e)=>setMinValue(e.target.value)}/>
                            {errors.minValue && <span className='validationError'>Required</span>}
                            </div> 
                        </div>
    
                        <div className="form-group">
                            <label htmlFor="maxValue" className="col-sm-2 control-label">Maximum Value</label>
                            <div className="col-sm-5">
                            <input type="text" value={maxValue} className="form-control" id="maxValue" placeholder="" name="maxValue" onChange={(e)=>setMaxValue(e.target.value)}/>
                            {errors.maxValue && <span className='validationError'>Required</span>}
                            </div>
                        </div>
 
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-danger" onClick={(e)=>onSubmit()}>Update</button>
                            </div>
                        </div>
                        </form>
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