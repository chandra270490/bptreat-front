import {authStatus} from "./Status";
import axios from "../helper/axios";
import toast from 'react-hot-toast';

console.log(axios)

export const  LoginPage=(userLogin)=>{
	 
	return async (dispatch)=>{
		dispatch({type:authStatus.LOGIN_REQUEST});
		const res = await axios.post(`/adminLogin/`,userLogin);
		if(res.status===200){
            console.log(res)
			const {token,user} = res.data; 
			localStorage.setItem("token",token);
			localStorage.setItem("admin",JSON.stringify(user));
			console.log({user})
			dispatch({
				type:authStatus.LOGIN_SUCCESS,
				payload:{
					token,user
				}
			})
			// toast.success('Welcome to Admin Panel');
		}else{
		if(res.status===201){
			dispatch({
				type:authStatus.LOGIN_FAILED
			})
			toast.error("Email and Password do not match.");
			console.log(res.data);
		}
	    }
	}
}

export const  Logout=(userLogout)=>{
	 
	return async (dispatch)=>{
		dispatch({type:authStatus.LOGOUT_SUCCESS});
	}
}
