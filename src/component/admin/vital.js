import React, {useEffect,useState} from 'react'
import {Link, useNavigate} from "react-router-dom";
import Header from '../../header/Header';
import Sidebarr from '../../sidebar/Sidebar';
import Tool from '../../sidebar/Tool';
import Footer from '../../footer/Footer';
import {AddVitalAction} from "../../action";
import {useDispatch,useSelector} from "react-redux";
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';

  
export default function AddVital() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [selected, setSelected] = useState([]);
  const [fixedProductDiscount,setFixedProductDiscount] = useState(false);
  const dispatch =  useDispatch()
  const auth = useSelector(state=>state); 
  const obj = {}
  const [inputField , setInputField] = useState(obj)
  const options = [
  { label: "Items A", value: "Items A" },
  { label: "Items B", value: "Items B" },
  { label: "Items C", value: "Items C" },
];

const inputsHandler = (e) =>{
    let name = e.target.name; 
    let value = e.target.value;
    inputField[name] = value;
    setInputField(inputField);
    //setInputField( {[e.target.name]: e.target.value} )
}

 
 const [editorLoaded, setEditorLoaded] = useState(false); 
  const [temperature,settemperature] = useState("");
  const [pulse1,setpulse1] = useState("");
  const [pulse2,setpulse2] = useState("");
  const [weight,setweight] = useState("");
  const [oxygenSaturation,setoxygenSaturation] = useState("");



const onSubmit = () => { 
   const data={
    temperature,
    pulse1,
    pulse2,
    weight,
    oxygenSaturation
  } 
   dispatch(AddVitalAction(data));
   toast.success('Vital Added Successfully.');
    settemperature("");
    setpulse1("");
    setpulse2("");
    setweight("");
    setoxygenSaturation("");
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
       Add New Vital
      </h1>
      <ol className="breadcrumb">
        <li>
        <Link to="/home" className="fa fa-dashboard"> Home</Link>
        </li>
        <li>
        <Link to="/vitals" className="small-box-footer">Manage Vitals</Link>
        </li>
        <li className="active">Add Vital</li>
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
                            <label htmlFor="inputName" className="col-sm-2 control-label">temperature F</label>
                            <div className="col-sm-10">
                            <input type="text"  className="form-control" id="inputName" placeholder="" name="fname" value={temperature} onChange={(e)=>settemperature(e.target.value)}/>
                            {errors.fname && <span className='validationError'>Required</span>}
                            </div> 
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputName" className="col-sm-2 control-label">Pulse 1 per min</label>
                            <div className="col-sm-10">
                            <input type="text"  className="form-control" id="fname" placeholder="" name="fname" value={pulse1} onChange={(e)=>setpulse1(e.target.value)}/>
                            {errors.fname && <span className='validationError'>Required</span>}
                            </div> 
                        </div>
    
                        <div className="form-group">
                            <label htmlFor="inputName" className="col-sm-2 control-label">Pulse 2 per min</label>
                            <div className="col-sm-10">
                            <input type="text" value={pulse2} className="form-control" id="fname" placeholder="" name="fname" onChange={(e)=>setpulse2(e.target.value)}/>
                            {errors.lname && <span className='validationError'>Required</span>}
                            </div>
                        </div> 


                        <div className="form-group">
                            <label htmlFor="inputName" className="col-sm-2 control-label">Weight</label>
                            <div className="col-sm-10"> 
                            <input type="text" value={weight} className="form-control" id="fname" placeholder="" name="fname" onChange={(e)=>setweight(e.target.value)}/>
                            </div> 
                        </div> 
                        
                        <div className="form-group">
                            <label htmlFor="inputName" className="col-sm-2 control-label">Oxygen Saturation %</label>
                            <div className="col-sm-10"> 
                            <input type="text" value={oxygenSaturation} className="form-control" id="fname" placeholder="" name="fname" onChange={(e)=>setoxygenSaturation(e.target.value)}/>
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