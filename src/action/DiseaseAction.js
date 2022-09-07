import { diseaseStatus } from "./Status";
import axios from "../helper/axios";
import toast from 'react-hot-toast';

export const AddDiseaseAction=(data)=>{
	return async (dispatch)=>{
		dispatch({type:diseaseStatus.DISEASE_REQUEST});
		const res = await axios.post(`/add-disease/`,data);
		console.log(res.data)
		if(res.status===200){    
			const categories= res.data
			dispatch({
				type:diseaseStatus.DISEASE_SUCCESS,
				payload:{
					categories
				}
			})
			toast.success('Disease added successfully');
		}else{
		dispatch({type:diseaseStatus.DISEASE_EXIST});
		toast.error(res?.data?.msg);
	    }
	}
}

export const GetDiseaseAction=()=>{
	
	return async (dispatch)=>{
		dispatch({type:diseaseStatus.DISEASE_GET_REQUEST});
		const res = await axios.post(`/get-disease/`);
		console.log(res.data)
		if(res.status===200){    
			const diseases = res.data
			dispatch({
				type:diseaseStatus.DISEASE_GET_SUCCESS,
				payload:{ diseases }
			})

		}else{
		if(res.status===201){
			dispatch({type:diseaseStatus.DISEASE_GET_FAILED});
			console.log(res.data);
		}
	    }
	}
}

export const EditDiseaseAction=(data)=>{
	return async (dispatch)=>{
		dispatch({type:diseaseStatus.DISEASE_UPDATE_REQUEST});
		const res = await axios.post(`/edit-disease/`,data);
		if(res.status === 200) {    
			const diseases= res.data
			dispatch({
				type: diseaseStatus.DISEASE_UPDATE_SUCCESS,
				payload:{
					diseases
				}
			})
			toast.success('Disease updated successfully');
		} else {
		if(res.status === 201){
			dispatch({
				type: diseaseStatus.DISEASE_UPDATE_FAILED
			});
			toast.error(res?.data?.msg);
		}
	    }
	}
}

export const DeleteDiseaseAction=(data)=>{
	
	return async (dispatch)=>{
		dispatch({type:diseaseStatus.DISEASE_DELETE_REQUEST});
		const res = await axios.post(`/delete-disease/`,data);
		console.log(res.data)
		if(res.status === 200){    
			const diseases= res.data
			dispatch({
				type:diseaseStatus.DISEASE_DELETE_SUCCESS,
				payload:{ diseases }
			})
			toast.success('Disease deleted successfully');
		}else{
		if(res.status === 201){
			dispatch({
				type: diseaseStatus.DISEASE_DELETE_FAILED
			});
			toast.error(res?.data?.msg);
			console.log(res.data);
		}
	    }
	}
}