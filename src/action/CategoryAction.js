import {categoryStatus,cmsStatus} from "./Status";
import axios from "../helper/axios";
import toast from 'react-hot-toast';

export const  GetCategoryAction=(userLogin)=>{
	 
	return async (dispatch)=>{
		dispatch({type:categoryStatus.CATEGORY_GET_REQUEST});
		const res = await axios.get(`/getcategory/`);
		if(res.status===200){    
			const categories= res.data
			dispatch({
				type:categoryStatus.CATEGORY_GET_SUCCESS,
				payload:{
					categories
				}
			})

		}else{
		if(res.status===201){
			console.log(res.data);
		}
	    }
	}
}

export const  AddCategorAction=(data)=>{
	 
	return async (dispatch)=>{
		dispatch({type:categoryStatus.CATEGORY_ADD_REQUEST});
		const res = await axios.post(`/addcategory/`,data);
		if(res.status===200){    
			const categories= res.data
			dispatch({
				type:categoryStatus.CATEGORY_ADD_SUCCESS,
				payload:{
					categories
				}
			})

		}else{
		if(res.status===201){
			console.log(res.data);
		}
	    }
	}
}

export const DeleteCategoryAction=(data)=>{
	return async (dispatch)=>{
		dispatch({type:categoryStatus.CATEGORY_DELETE_REQUEST});
		const res = await axios.post(`/deletecategory/`,data);
		if(res.status===200){    
			const categories= res.data
			dispatch({
				type:categoryStatus.CATEGORY_DELETE_SUCCESS,
				payload:{
					categories
				}
			})

		}else{
		if(res.status===201){
			console.log(res.data);
		}
	    }
	}
}


export const AddPatientAction=(data)=>{
	console.log(data)
	return async (dispatch)=>{
		dispatch({type:cmsStatus.COUPON_REQUEST});
		const res = await axios.post(`/addpatient/`,data);
		console.log(res.data)
		if(res.status===200){    
			const categories= res.data
			dispatch({
				type:cmsStatus.COUPON_SUCCESS,
				payload:{
					categories
				}
			})
			toast.success('Patient added successfully');
		}else{
		dispatch({type:cmsStatus.COUPON_EXIST});
		toast.error("Patient email already exists.");
		// alert("Patient email already exists.")
	    }
	}
}


export const GetPatientAction=()=>{
	
	return async (dispatch)=>{
		dispatch({type:cmsStatus.COUPON_GET_REQUEST});
		const res = await axios.post(`/getpatient/`);
		console.log(res.data)
		if(res.status===200){    
			const categories= res.data
			dispatch({
				type:cmsStatus.COUPON_GET_SUCCESS,
				payload:{
					categories
				}
			})

		}else{
		if(res.status===201){
			console.log(res.data);
		}
	    }
	}
}


export const DeletePatientAction=(data)=>{
	
	return async (dispatch)=>{
		dispatch({type:cmsStatus.COUPON_DELETE_REQUEST});
		const res = await axios.post(`/deletepatient/`,data);
		console.log(res.data)
		if(res.status===200){    
			const categories= res.data
			dispatch({
				type:cmsStatus.COUPON_DELETE_SUCCESS,
				payload:{
					categories
				}
			})
			toast.success('Patient deleted successfully');
		}else{
		if(res.status===201){
			console.log(res.data);
		}
	    }
	}
}


export const EditPatientAction=(data)=>{
	console.log(data)
	return async (dispatch)=>{
		dispatch({type:cmsStatus.COUPON_UPDATE_REQUEST});
		const res = await axios.post(`/editpatient/`,data);
		console.log(res.data)
		if(res.status===200){    
			const categories= res.data
			dispatch({
				type:cmsStatus.COUPON_UPDATE_SUCCESS,
				payload:{
					categories
				}
			})
			toast.success('Patient updated successfully');

		}else{
		if(res.status===201){
			toast.error("Patient email already exists.");
			console.log(res.data);
		}
	    }
	}
}
