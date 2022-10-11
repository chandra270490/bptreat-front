import React, {useEffect,useState} from 'react'
import {Link, useNavigate} from "react-router-dom";
import Header from '../../../header/Header';
import Sidebarr from '../../../sidebar/Sidebar';
import Tool from '../../../sidebar/Tool';
import Footer from '../../../footer/Footer';
import {AddPatientAction} from "../../../action";
import {useDispatch,useSelector} from "react-redux";
import { useForm } from "react-hook-form";
import { Toaster } from 'react-hot-toast';
  
export default function AddPatient() {
  const { formState: { errors } } = useForm();
  const [selected, setSelected] = useState([]);
  const dispatch =  useDispatch()
  const auth = useSelector(state=>state); 
  const obj = {}
  const [inputField , setInputField] = useState(obj)
  const genderData = [
    { value: 'Male', name: 'male' },
    { value: 'Female', name: 'female' }
  ]

const inputsHandler = (e) =>{
    let name = e.target.name; 
    let value = e.target.value;
    inputField[name] = value;
    setInputField(inputField);
}

 
 const [editorLoaded, setEditorLoaded] = useState(false); 
  const [name,setname] = useState("");
  const [password,setpassword] = useState("");
  const [state,setstate] = useState("");
  const [mobile,setmobile] = useState("");
  const [email,setemail] = useState("");
  const [age,setage] = useState("");
  const [gender,setgender] = useState("");
  const [height,setheight] = useState("");
  const [weight,setweight] = useState("");
  const [zipcode,setzipcode] = useState(""); 
  const [diabetes,setdiabetes] = useState(Boolean);
  const [hematocrit,sethematocrit] = useState(""); 
  const [creatinine,setcreatinine] = useState("");
  const [calcium,setcalcium] = useState("");
  const [albumin,setalbumin] = useState("");
  const [tsh,settsh] = useState("");



const onSubmit = () => { 
   const data={
    name,
    password,
    state,
    zipcode,
    mobile,
    email,
    age,
    gender,
    height,
    weight,
    diabetes,
    hematocrit,
    creatinine,
    calcium,
    albumin,
    tsh,
    // smoker,
    // marijuana,
    // amphetamine,
    // heroin,
    // narcotics,
    // alcohol
  } 
dispatch(AddPatientAction(data));
setname("");
setpassword("");
setstate("");
setmobile("");
setemail("");
setage("");
setgender("");
setheight("");
setweight("");
setzipcode("");
setdiabetes(Boolean);
sethematocrit("");
setcreatinine("");
setcalcium("");
setalbumin("");
settsh("");
// setsmoker("");
// setmarijuana("");
// setamphetamine("");
// setamphetamine("");
// setheroin("");
// setnarcotics("");
// setalcohol("");
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
       Add New patient
      </h1>
      <ol className="breadcrumb">
        <li>
          <a href="/home">
            <i className="fa fa-dashboard" /> Home
          </a>
        </li>
        <li>
          <a href="/patients">Manage patient</a>
        </li>
        <li className="active">Add patient</li>
      </ol>
    </section> 
    <section className="content"> 
      <div className="box">
      <div className="box-header with-border"> 
          <div className="box-tools pull-right">
            <Link
              to="/patients"
              type="button"
              className="btn btn-success" 
              data-toggle="tooltip"
              title="Add"
            >
              <i className="fa fa-eye" />
              {" View patients"}
            </Link> 
          </div>
        </div>

        <div className="box-body">
        <section className="content">
          <div className="row">  
            <div className="col-md-12">
              <div className="nav-tabs-custom">
                {/* <ul className="nav nav-tabs"> 
                  <li className="active"><a href="#settings" data-toggle="tab">Update Profile</a></li>
                </ul> */}
                <div className="tab-content">
                  <div className="active tab-pane" id="settings">
                    <form className="form-horizontal">
                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Name</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="name" placeholder="" required value={name} name="name" onChange={(e)=>setname(e.target.value)}/>
                          {errors.name && <span className='validationError'>Required</span>}
                        </div> 
                      </div>

                       <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Password</label>
                        <div className="col-sm-10">
                          <input type="text"  className="form-control" id="inputName" placeholder="" value={password} name="fname" onChange={(e)=>setpassword(e.target.value)}/>
                          {errors.fname && <span className='validationError'>Required</span>}
                        </div> 
                      </div>
  
                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">State</label>
                        <div className="col-sm-10">
                        <input type="text"  className="form-control" id="inputName" placeholder="" value={state} name="fname" onChange={(e)=>setstate(e.target.value)}/>

                          {errors.lname && <span className='validationError'>Required</span>}
                        </div>
                      </div> 


                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Phone Number</label>
                        <div className="col-sm-10"> 
                        <input type="text"  className="form-control" id="inputName" placeholder="" value={mobile} name="fname" onChange={(e)=>setmobile(e.target.value)}/>
                        </div> 
                      </div> 
                      
                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Email</label>
                        <div className="col-sm-10"> 
                        <input type="text"  className="form-control" id="inputName" placeholder="" value={email} name="fname" onChange={(e)=>setemail(e.target.value)}/>
                        </div> 
                      </div>
                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Age</label>
                        <div className="col-sm-10"> 
                        <input type="text"  className="form-control" id="inputName" placeholder="" value={age} name="fname" onChange={(e)=>setage(e.target.value)}/>
                        </div> 
                      </div>
                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Gender</label>
                        <div className="col-sm-10">
                          <select
                            class="form-control"
                            required
                            id="gender"
                            onChange={(e)=>setgender(e.target.value)}>
                                <option value=''>----Choose one option----</option>
                            {genderData.map(({ value, name }, index) => <option value={name} >{value}</option>)}
                          </select>
                        </div> 
                      </div>
                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Height</label>
                        <div className="col-sm-10"> 
                        <input type="text"  className="form-control" id="inputName" placeholder="" value={height} name="fname" onChange={(e)=>setheight(e.target.value)}/>
                        </div> 
                      </div>
                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Weight</label>
                        <div className="col-sm-10"> 
                        <input type="text"  className="form-control" id="inputName" placeholder="" value={weight} name="fname" onChange={(e)=>setweight(e.target.value)}/>
                        </div> 
                      </div>
                      <div className="form-group">
                        <label htmlFor="zipcode" className="col-sm-2 control-label">Zipcode</label>
                        <div className="col-sm-10">
                          <input type="text"  className="form-control" id="zipcode" placeholder="" value={zipcode} name="zipcode" onChange={(e)=>setzipcode(e.target.value)}/>
                          {errors.zipcode && <span className='validationError'>Required</span>}
                        </div> 
                      </div>
                       <div className="form-group">
                        <label htmlFor="diabetes" className="col-sm-2 control-label">Diabetes</label>
                        <div className="col-sm-10">
                        <select
                            class="form-control"
                            required
                            id="diabetes"
                            onChange={(e)=>setdiabetes(e.target.value)}>
                                <option value=''>----Choose one option----</option>
                                <option value='true'>Yes</option>
                                <option value='false'>No</option>
                            {/* {genderData.map(({ value, name }, index) => <option value={name} >{value}</option>)} */}
                          </select>
                          {/* <input type="text"  className="form-control" id="diabetes" placeholder="" value={diabetes} name="diabetes" onChange={(e)=>setdiabetes(e.target.value)}/>
                          {errors.diabetes && <span className='validationError'>Required</span>} */}
                        </div> 
                      </div>

                      <div className="form-group">
                        <label htmlFor="hematocrit" className="col-sm-2 control-label">Hematocrit</label>
                        <div className="col-sm-10">
                          <input type="text"  className="form-control" id="hematocrit" placeholder="" value={hematocrit} name="hematocrit" onChange={(e)=>sethematocrit(e.target.value)}/>
                          {errors.hematocrit && <span className='validationError'>Required</span>}
                        </div> 
                      </div>

                      <div className="form-group">
                        <label htmlFor="creatinine" className="col-sm-2 control-label">Creatinine</label>
                        <div className="col-sm-10">
                          <input type="text"  className="form-control" id="creatinine" placeholder="" value={creatinine} name="creatinine" onChange={(e)=>setcreatinine(e.target.value)}/>
                          {errors.creatinine && <span className='validationError'>Required</span>}
                        </div> 
                      </div>

                      <div className="form-group">
                        <label htmlFor="calcium" className="col-sm-2 control-label">Calcium</label>
                        <div className="col-sm-10">
                          <input type="text"  className="form-control" id="calcium" placeholder="" value={calcium} name="calcium" onChange={(e)=>setcalcium(e.target.value)}/>
                          {errors.calcium && <span className='validationError'>Required</span>}
                        </div> 
                      </div>

                      <div className="form-group">
                        <label htmlFor="albumin" className="col-sm-2 control-label">Albumin</label>
                        <div className="col-sm-10">
                          <input type="text"  className="form-control" id="albumin" placeholder="" value={albumin} name="albumin" onChange={(e)=>setalbumin(e.target.value)}/>
                          {errors.albumin && <span className='validationError'>Required</span>}
                        </div> 
                      </div>

                      <div className="form-group">
                        <label htmlFor="tsh" className="col-sm-2 control-label">TSH</label>
                        <div className="col-sm-10">
                          <input type="text"  className="form-control" id="tsh" placeholder="" value={tsh} name="tsh" onChange={(e)=>settsh(e.target.value)}/>
                          {errors.tsh && <span className='validationError'>Required</span>}
                        </div> 
                      </div>

                      {/* <div className="form-group">
                        <label htmlFor="smoker" className="col-sm-2 control-label">Smoker</label>
                        <div className="col-sm-10">
                          <input type="text"  className="form-control" id="smoker" placeholder="" value={smoker} name="smoker" onChange={(e)=>setsmoker(e.target.value)}/>
                          {errors.smoker && <span className='validationError'>Required</span>}
                        </div> 
                      </div>

                      <div className="form-group">
                        <label htmlFor="calcium" className="col-sm-2 control-label">Calcium</label>
                        <div className="col-sm-10">
                          <input type="text"  className="form-control" id="calcium" placeholder="" value={calcium} name="calcium" onChange={(e)=>setcalcium(e.target.value)}/>
                          {errors.calcium && <span className='validationError'>Required</span>}
                        </div> 
                      </div>

                      <div className="form-group">
                        <label htmlFor="calcium" className="col-sm-2 control-label">Calcium</label>
                        <div className="col-sm-10">
                          <input type="text"  className="form-control" id="calcium" placeholder="" value={calcium} name="calcium" onChange={(e)=>setcalcium(e.target.value)}/>
                          {errors.calcium && <span className='validationError'>Required</span>}
                        </div> 
                      </div>

                      <div className="form-group">
                        <label htmlFor="calcium" className="col-sm-2 control-label">Calcium</label>
                        <div className="col-sm-10">
                          <input type="text"  className="form-control" id="calcium" placeholder="" value={calcium} name="calcium" onChange={(e)=>setcalcium(e.target.value)}/>
                          {errors.calcium && <span className='validationError'>Required</span>}
                        </div> 
                      </div>

                      <div className="form-group">
                        <label htmlFor="calcium" className="col-sm-2 control-label">Calcium</label>
                        <div className="col-sm-10">
                          <input type="text"  className="form-control" id="calcium" placeholder="" value={calcium} name="calcium" onChange={(e)=>setcalcium(e.target.value)}/>
                          {errors.calcium && <span className='validationError'>Required</span>}
                        </div> 
                      </div>

                      <div className="form-group">
                        <label htmlFor="calcium" className="col-sm-2 control-label">Calcium</label>
                        <div className="col-sm-10">
                          <input type="text"  className="form-control" id="calcium" placeholder="" value={calcium} name="calcium" onChange={(e)=>setcalcium(e.target.value)}/>
                          {errors.calcium && <span className='validationError'>Required</span>}
                        </div> 
                      </div>

                      <div className="form-group">
                        <label htmlFor="calcium" className="col-sm-2 control-label">Calcium</label>
                        <div className="col-sm-10">
                          <input type="text"  className="form-control" id="calcium" placeholder="" value={calcium} name="calcium" onChange={(e)=>setcalcium(e.target.value)}/>
                          {errors.calcium && <span className='validationError'>Required</span>}
                        </div> 
                      </div> */}

                      
                      <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                          <button type="button" className="btn btn-danger" onClick={(e)=>onSubmit()}>Submit</button>
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