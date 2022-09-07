import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import {useDispatch,useSelector} from "react-redux";

const AdminRouter =({ children, redirectTo }) => { 
     const auth = useSelector(state=>state.auth); 
     const token = window.localStorage.getItem('token');
     return (auth?.user?.role==="Admin") ? children : <Navigate to={redirectTo} /> ;
} 
 

export default AdminRouter;