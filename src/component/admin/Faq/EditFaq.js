import React, {useEffect,useState} from 'react'
import {Link, useParams} from "react-router-dom";
import Header from '../../../header/Header';
import Sidebarr from '../../../sidebar/Sidebar';
import Tool from '../../../sidebar/Tool';
import Footer from '../../../footer/Footer';
import {EditMedicineAction, GetDiseaseAction} from "../../../action";
import {useDispatch,useSelector} from "react-redux";
import { Toaster } from 'react-hot-toast';
import { useForm } from "react-hook-form";

  
export default function EditMedicine() {

const dispatch =  useDispatch();
const {id} = useParams();
const { formState: { errors } } = useForm();
const medicineInfo = useSelector(state=>state?.medicine?.data?.data);
const setMedicine = medicineInfo.find(data => data._id === id );

const [name,setName] = useState(setMedicine?.name);
const [description,setDescription] = useState(setMedicine?.description);
const [sideEffects,setSideEffects] = useState(setMedicine?.sideEffects);
const [dose,setDose] = useState(setMedicine?.dose);
const [diseaseId,setDiseaseId] = useState(setMedicine?.diseaseId);
const [category,setCategory] = useState(setMedicine?.category);

const onSubmit = () => { 
   const data={
    id,
    name,
    description,
    sideEffects,
    dose,
    diseaseId,
    category
  }
   dispatch(EditMedicineAction(data));
//    toast.success('Disease Up/dated Successfully.');
}
  useEffect(() => {
    dispatch(GetDiseaseAction())
  }, []);

  const diseaseData = useSelector(state=>state?.disease?.data?.data)

	return (
    <div className="sidebar-mini skin-green-light">
        <div><Toaster/></div>
    <div className="wrapper"> 
  		  <Header/> 
  		  <Sidebarr/> 
    <div className="content-wrapper"> 
    <section className="content-header">
      <h1>
       Edit Medicine
      </h1>
      <ol className="breadcrumb">
        <li>
        <Link to="/home" className="fa fa-dashboard"> Home</Link>
        </li>
        <li>
        <Link to="/medicines" className="small-box-footer">Manage Medicines</Link>
        </li>
        <li className="active">Add Medicine</li>
      </ol>
    </section> 
    <section className="content"> 
        <div className="box">
            <div className="box-header with-border"> 
                <div className="box-tools pull-right">
                    <Link
                    to="/medicines"
                    type="button"
                    className="btn btn-success" 
                    data-toggle="tooltip"
                    title="Add"
                    >
                    <i className="fa fa-eye" />
                    {" View Medicine"}
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
                            <label htmlFor="sideEffects" className="col-sm-2 control-label">Side-Effects</label>
                            <div className="col-sm-10">
                            <input type="text" value={sideEffects} className="form-control" id="sideEffects" placeholder="" name="sideEffects" onChange={(e)=>setSideEffects(e.target.value)}/>
                            {errors.sideEffects && <span className='validationError'>Required</span>}
                            </div>
                        </div> 


                        <div className="form-group">
                            <label htmlFor="dose" className="col-sm-2 control-label">Dose</label>
                            <div className="col-sm-10"> 
                            <input type="text" value={dose} className="form-control" id="dose" placeholder="" name="dose" onChange={(e)=>setDose(e.target.value)}/>
                            </div> 
                        </div> 
                        
                        <div className="form-group">
                            <label htmlFor="category" className="col-sm-2 control-label">Category</label>
                            <div className="col-sm-10"> 
                            <input type="text" value={category} className="form-control" id="category" placeholder="" name="category" onChange={(e)=>setCategory(e.target.value)}/>
                            </div> 
                        </div>

                        <div className="form-group">
                            <label htmlFor="diseaseId" className="col-sm-2 control-label">Medicine used for</label>
                            <div className="col-sm-10"> 
                            <select
                            class="form-control"
                            required
                            id="diseaseId"
                            value={diseaseId}
                            onChange={(e)=>setDiseaseId(e.target.value)}>
                            {diseaseData.map(({ _id, name }, index) => <option value={_id} >{name}</option>)}
                          </select>
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