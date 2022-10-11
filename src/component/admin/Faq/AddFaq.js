import React, {useEffect,useState} from 'react'
import {Link} from "react-router-dom";
import Header from '../../../header/Header';
import Sidebarr from '../../../sidebar/Sidebar';
import Tool from '../../../sidebar/Tool';
import Footer from '../../../footer/Footer';
import {AddFaqAction} from "../../../action";
import {useDispatch} from "react-redux";
import { Toaster } from 'react-hot-toast';
import { useForm } from "react-hook-form";

  
export default function AddFaq() {
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
const [title,setTitle] = useState("");
const [body,setBody] = useState("");

const onSubmit = () => { 
   const data={
    title,
    body
  }
   dispatch(AddFaqAction(data));
   setTitle("");
   setBody("");
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
       Add New Faq
      </h1>
      <ol className="breadcrumb">
        <li>
        <Link to="/home" className="fa fa-dashboard"> Home</Link>
        </li>
        <li>
        <Link to="/faqs" className="small-box-footer">Manage Faqs</Link>
        </li>
        <li className="active">Add Faq</li>
      </ol>
    </section> 
    <section className="content"> 
        <div className="box">
            <div className="box-header with-border"> 
                <div className="box-tools pull-right">
                    <Link
                    to="/faqs"
                    type="button"
                    className="btn btn-success" 
                    data-toggle="tooltip"
                    title="Add"
                    >
                    <i className="fa fa-eye" />
                    {" View Faq"}
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
                            <label htmlFor="title" className="col-sm-2 control-label">Title</label>
                            <div className="col-sm-10">
                            <input type="text" className="form-control" id="title" placeholder="" name="name" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                            {errors.title && <span className='validationError'>Required</span>}
                            </div> 
                        </div>

                        <div className="form-group">
                            <label htmlFor="body" className="col-sm-2 control-label">Body</label>
                            <div className="col-sm-10">
                            <input type="text" value={body} className="form-control" id="body" placeholder="" name="body" onChange={(e)=>setBody(e.target.value)}/>
                            {errors.body && <span className='validationError'>Required</span>}
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