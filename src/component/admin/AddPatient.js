import React, {useEffect,useState} from 'react'
import {Link, useNavigate} from "react-router-dom";
import Header from '../../header/Header';
import Sidebarr from '../../sidebar/Sidebar';
import Tool from '../../sidebar/Tool';
import Footer from '../../footer/Footer';
import {AddPatientAction} from "../../action";
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
    //setInputField( {[e.target.name]: e.target.value} )
}

 
 const [editorLoaded, setEditorLoaded] = useState(false); 
  const [username,setusername] = useState("");
  const [password,setpassword] = useState("");
  const [address,setaddress] = useState("");
  const [mobile,setmobile] = useState("");
  const [email,setemail] = useState("");
  const [age,setage] = useState("");
  const [gender,setgender] = useState("");
  const [height,setheight] = useState("");
  const [weight,setweight] = useState("");
  const [chronic,setchronic] = useState(""); 
  const [drug,setdrug] = useState("");
  const [bp,setbp] = useState(""); 
  const [sideEffect,setsideEffect] = useState("");
  const [remindBPTextMsg,setremindBPTextMsg] = useState("");



const onSubmit = () => { 
   const data={
    username,
    password,
    address,
    mobile,
    email,
    age,
    gender,
    height,
    weight,
    chronic,
    drug,
    bp,
    sideEffect,
    remindBPTextMsg
  } 
dispatch(AddPatientAction(data));
setusername("");
setpassword("");
setaddress("");
setmobile("");
setemail("");
setage("");
setgender("");
setheight("");
setweight("");
setchronic("");
setdrug("");
setbp("");
setsideEffect("");
setremindBPTextMsg("");
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
          <a href="#">
            <i className="fa fa-dashboard" /> Home
          </a>
        </li>
        <li>
          <a href="#">Manage patient</a>
        </li>
        <li className="active">All patient</li>
      </ol>
    </section> 
    <section className="content"> 
      <div className="box">
      <div className="box-header with-border"> 
          <div className="box-tools pull-right">
            {/* <Link
              to="/patientlist"
              type="button"
              className="btn btn-success" 
              data-toggle="tooltip"
              title="Add"
            > */}
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
                        <label htmlFor="inputName" className="col-sm-2 control-label">User Name</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="username" placeholder="" required value={username} name="username" onChange={(e)=>setusername(e.target.value)}/>
                          {errors.username && <span className='validationError'>Required</span>}
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
                        <label htmlFor="inputName" className="col-sm-2 control-label">Address</label>
                        <div className="col-sm-10">
                        <input type="text"  className="form-control" id="inputName" placeholder="" value={address} name="fname" onChange={(e)=>setaddress(e.target.value)}/>

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
                        <label htmlFor="inputName" className="col-sm-2 control-label">Record chronic disease</label>
                        <div className="col-sm-10">
                          <input type="text"  className="form-control" id="inputName" placeholder="" value={chronic} name="fname" onChange={(e)=>setchronic(e.target.value)}/>
                          {errors.fname && <span className='validationError'>Required</span>}
                        </div> 
                      </div>
                       <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Record drug allergies</label>
                        <div className="col-sm-10">
                          <input type="text"  className="form-control" id="inputName" placeholder="" value={drug} name="fname" onChange={(e)=>setdrug(e.target.value)}/>
                          {errors.fname && <span className='validationError'>Required</span>}
                        </div> 
                      </div>

                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Record bp</label>
                        <div className="col-sm-10">
                          <input type="text"  className="form-control" id="inputName" placeholder="" value={bp} name="fname" onChange={(e)=>setbp(e.target.value)}/>
                          {errors.fname && <span className='validationError'>Required</span>}
                        </div> 
                      </div>

                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Way to communicate side effects</label>
                        <div className="col-sm-10">
                          <input type="text"  className="form-control" id="inputName" placeholder="" value={sideEffect} name="fname" onChange={(e)=>setsideEffect(e.target.value)}/>
                          {errors.fname && <span className='validationError'>Required</span>}
                        </div> 
                      </div>

                      <div className="form-group">
                        <label htmlFor="inputName" className="col-sm-2 control-label">Reminder to take bp by text message</label>
                        <div className="col-sm-10">
                          <input type="text"  className="form-control" id="inputName" placeholder="" value={remindBPTextMsg} name="fname" onChange={(e)=>setremindBPTextMsg(e.target.value)}/>
                          {errors.fname && <span className='validationError'>Required</span>}
                        </div> 
                      </div>

                      
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