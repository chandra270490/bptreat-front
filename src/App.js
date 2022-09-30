import React,{useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux";
import Dashboard from './view/Dashboard';
import Login from './view/Login';
import Reg from './view/Reg';
import AdminRouter from "./privateRoute/PrivateRoute";
import PatientList from './component/admin/PatientList';
import AddPatient from './component/admin/AddPatient';
import EditPatient from './component/admin/EditPatient';
import ViewPatient from './component/admin/ViewPatient';

import ManageVitalList from './component/admin/ManageVitalList';
import AddVital from './component/admin/AddVital';
import EditVital from './component/admin/EditVital';

import ManageDiseases from './component/admin/Diseases/ManageDiseases';
import AddDisease from './component/admin/Diseases/AddDisease';
import EditDisease from './component/admin/Diseases/EditDisease';

import ManageMedicine from './component/admin/Medicine/ManageMedicine';
import AddMedicine from './component/admin/Medicine/AddMedicine';
import EditMedicine from './component/admin/Medicine/EditMedicine';
import Profile from './component/admin/Profile';

export default function App() {
  const auth = useSelector(state=>state.auth);
  console.log(auth)
    const navigate = useNavigate();
    useEffect(() => {
      if(auth?.authenticate){
      navigate("/home");
    } 
    }, [auth])
  return (
    <div> 
       <Routes>
         <Route path="/" element={<Login/>}/>
         <Route path="/reg" element={<Reg/>}/>
         <Route path="/home" element={<AdminRouter redirectTo="/"><Dashboard/></AdminRouter>}/>
         <Route path="/profile" element={<AdminRouter redirectTo="/"><Profile/></AdminRouter>}/>

         <Route path="/patients" element={<AdminRouter redirectTo="/"><PatientList/></AdminRouter>}/>
         <Route path="/addpatient" element={<AdminRouter redirectTo="/"><AddPatient/></AdminRouter>}/>
         <Route path="/editpatient/:role/:userId/:patientId" element={<AdminRouter redirectTo="/"><EditPatient/></AdminRouter>}/>
         <Route path="/viewpatient/:patientId" element={<AdminRouter redirectTo="/"><ViewPatient/></AdminRouter>}/>

         <Route path="/vitals" element={<AdminRouter redirectTo="/"><ManageVitalList/></AdminRouter>}/>
         <Route path="/addvital" element={<AdminRouter redirectTo="/"><AddVital/></AdminRouter>}/>
         <Route path="/editvital/:id" element={<AdminRouter redirectTo="/"><EditVital/></AdminRouter>}/>

         <Route path="/users" element={<AdminRouter redirectTo="/"><PatientList/></AdminRouter>}/>

         <Route path="/diseases" element={<AdminRouter redirectTo="/"><ManageDiseases/></AdminRouter>}/>
         <Route path="/add-disease" element={<AdminRouter redirectTo="/"><AddDisease/></AdminRouter>}/>
         <Route path="/edit-disease/:id" element={<AdminRouter redirectTo="/"><EditDisease/></AdminRouter>}/>

         <Route path="/medicines" element={<AdminRouter redirectTo="/"><ManageMedicine/></AdminRouter>}/>
         <Route path="/add-medicine" element={<AdminRouter redirectTo="/"><AddMedicine/></AdminRouter>}/>
         <Route path="/edit-medicine/:id" element={<AdminRouter redirectTo="/"><EditMedicine/></AdminRouter>}/>
       </Routes>
   </div>
  )
}

 