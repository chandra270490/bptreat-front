import React,{useEffect} from 'react'
import Dashboard from '../component/DashboardCard';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import Tool from '../sidebar/Tool';
import Footer from '../footer/Footer';
import {GetPatientAction,GetVitalAction,GetDiseaseAction,GetMedicineAction} from "../action"
import {useDispatch,useSelector} from "react-redux";

export default function DashboardPage() {
	const dispatch = useDispatch();
	useEffect(()=>{
		dispatch(GetPatientAction())
		dispatch(GetVitalAction())
		dispatch(GetDiseaseAction())
		dispatch(GetMedicineAction())
	 },[])
	const auth = useSelector(state=>state.auth);
	return (
		<div className="sidebar-mini skin-green-light">
		<div className="wrapper"> 
  		  <Header/> 
  		  <Sidebar/>
          <div className="content-wrapper"> 
          	<Dashboard/> 
  		  </div>

       <Footer/>
       <Tool/> 
   
  <div className="control-sidebar-bg" />
</div>

			
		</div>
	)
}