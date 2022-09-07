import React, {useEffect,useState} from 'react'
import {Link, useNavigate} from "react-router-dom";
import Header from '../../../header/Header';
import Sidebarr from '../../../sidebar/Sidebar';
import Tool from '../../../sidebar/Tool';
import Footer from '../../../footer/Footer';
import {AddDiseaseAction} from "../../../action";
import {useDispatch,useSelector} from "react-redux";
import { Toaster } from 'react-hot-toast';
import { useForm } from "react-hook-form";

  
export default function AddDisease() {
  const dispatch =  useDispatch()
  const obj = {}
  const { formState: { errors } } = useForm();
  const [inputField , setInputField] = useState(obj)

const inputsHandler = (e) =>{
    let name = e.target.name; 
    let value = e.target.value;
    inputField[name] = value;
    setInputField(inputField);
}

const [editorLoaded, setEditorLoaded] = useState(false); 
const [name,setName] = useState("");
const [description,setDescription] = useState("");
const [symptoms,setSymptoms] = useState("");
const [causes,setCauses] = useState("");
const [treatment,setTreatment] = useState("");
const [category,setCategory] = useState("");
const [recoveryRate,setRecoveryRate] = useState("");
const [severity,setSeverity] = useState("");

const onSubmit = () => { 
   const data={
    name,
    description,
    symptoms,
    causes,
    treatment,
    category,
    recoveryRate,
    severity
  }
   dispatch(AddDiseaseAction(data));
   setName("");
   setDescription("");
   setSymptoms("");
   setCauses("");
   setTreatment("");
   setCategory("");
   setRecoveryRate("");
   setSeverity("");
}

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

	return (
    <div className="sidebar-mini skin-green-light">
        <div><Toaster/></div>
    <div className="wrapper"> 
  		  <Header/> 
  		  <Sidebarr/> 
    <div className="content-wrapper"> 
    <section className="content-header">
      <h1>
       Add New Disease
      </h1>
      <ol className="breadcrumb">
        <li>
        <Link to="/home" className="fa fa-dashboard"> Home</Link>
        </li>
        <li>
        <Link to="/diseases" className="small-box-footer">Manage Diseases</Link>
        </li>
        <li className="active">Add Disease</li>
      </ol>
    </section> 
    <section className="content"> 
        <div className="box">
            <div className="box-header with-border"> 
                <div className="box-tools pull-right">
                    <Link
                    to="/diseases"
                    type="button"
                    className="btn btn-success" 
                    data-toggle="tooltip"
                    title="Add"
                    >
                    <i className="fa fa-eye" />
                    {" View Disease"}
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
                            <div className="col-sm-10">
                            <input type="text" className="form-control" id="name" placeholder="" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                            {errors.name && <span className='validationError'>Required</span>}
                            </div> 
                        </div>

                        <div className="form-group">
                            <label htmlFor="description" className="col-sm-2 control-label">Description</label>
                            <div className="col-sm-10">
                            <input type="text" className="form-control" id="description" placeholder="" name="description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                            {errors.description && <span className='validationError'>Required</span>}
                            </div> 
                        </div>
    
                        <div className="form-group">
                            <label htmlFor="symptoms" className="col-sm-2 control-label">Symptoms</label>
                            <div className="col-sm-10">
                            <input type="text" value={symptoms} className="form-control" id="symptoms" placeholder="" name="symptoms" onChange={(e)=>setSymptoms(e.target.value)}/>
                            {errors.symptoms && <span className='validationError'>Required</span>}
                            </div>
                        </div> 


                        <div className="form-group">
                            <label htmlFor="causes" className="col-sm-2 control-label">Causes</label>
                            <div className="col-sm-10"> 
                            <input type="text" value={causes} className="form-control" id="causes" placeholder="" name="causes" onChange={(e)=>setCauses(e.target.value)}/>
                            </div> 
                        </div> 
                        
                        <div className="form-group">
                            <label htmlFor="treatment" className="col-sm-2 control-label">Treatment</label>
                            <div className="col-sm-10"> 
                            <input type="text" value={treatment} className="form-control" id="treatment" placeholder="" name="treatment" onChange={(e)=>setTreatment(e.target.value)}/>
                            </div> 
                        </div>

                        <div className="form-group">
                            <label htmlFor="category" className="col-sm-2 control-label">Category</label>
                            <div className="col-sm-10"> 
                            <input type="text" value={category} className="form-control" id="category" placeholder="" name="category" onChange={(e)=>setCategory(e.target.value)}/>
                            </div> 
                        </div>

                        <div className="form-group">
                            <label htmlFor="recoveryRate" className="col-sm-2 control-label">RecoveryRate</label>
                            <div className="col-sm-10"> 
                            <input type="text" value={recoveryRate} className="form-control" id="recoveryRate" placeholder="" name="recoveryRate" onChange={(e)=>setRecoveryRate(e.target.value)}/>
                            </div> 
                        </div>

                        <div className="form-group">
                            <label htmlFor="severity" className="col-sm-2 control-label">Severity</label>
                            <div className="col-sm-10"> 
                            <input type="text" value={severity} className="form-control" id="severity" placeholder="" name="severity" onChange={(e)=>setSeverity(e.target.value)}/>
                            </div> 
                        </div>

                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-danger" onClick={(e)=>onSubmit()}>Add</button>
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