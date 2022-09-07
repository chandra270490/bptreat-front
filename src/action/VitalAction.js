// VITAL ACTIONS
import { vitalStatus } from "./Status";
import axios from "../helper/axios";
import toast from 'react-hot-toast';

export const AddVitalAction=(data)=>{
	console.log(data)
	return async (dispatch)=>{
		dispatch({type:vitalStatus.VITAL_REQUEST});
		const res = await axios.post(`/addvital/`,data);
		console.log(res.data)
		if(res.status===200){    
			const categories= res.data
			dispatch({
				type:vitalStatus.VITAL_SUCCESS,
				payload:{
					categories
				}
			})
            toast.success('Vital added successfully');
		}else{
		dispatch({type:vitalStatus.VITAL_EXIST});
        toast.error(res?.data?.msg);
	    }
	}
}

export const GetVitalAction=()=>{
	
	return async (dispatch)=>{
		dispatch({type:vitalStatus.VITAL_GET_REQUEST});
		const res = await axios.post(`/getvital/`);
		console.log(res.data)
		if(res.status===200){    
			const vitals= res.data
			dispatch({
				type:vitalStatus.VITAL_GET_SUCCESS,
				payload:{ vitals }
			})

		}else{
		if(res.status===201){
			dispatch({type:vitalStatus.VITAL_GET_FAILED});
			console.log(res.data);
		}
	    }
	}
}

export const EditVitalAction=(data)=>{
	return async (dispatch)=>{
		dispatch({type:vitalStatus.VITAL_UPDATE_REQUEST});
		const res = await axios.post(`/editvital/`,data);
		if(res.status === 200) {    
			const vitals= res.data
			dispatch({
				type: vitalStatus.VITAL_UPDATE_SUCCESS,
				payload:{
					vitals
				}
			})
            toast.success('Vital updated successfully');
		} else {
		if(res.status === 201){
			dispatch({
				type: vitalStatus.VITAL_UPDATE_FAILED
			});
            toast.error(res?.data?.msg);
		}
	    }
	}
}

export const DeleteVitalAction=(data)=>{
	
	return async (dispatch)=>{
		dispatch({type:vitalStatus.VITAL_DELETE_REQUEST});
		const res = await axios.post(`/deletevital/`,data);
		console.log(res.data)
		if(res.status === 200){    
			const vitals= res.data
			dispatch({
				type:vitalStatus.VITAL_DELETE_SUCCESS,
				payload:{ vitals }
			})
            toast.success('Vital deleted successfully');
		}else{
		if(res.status === 201){
			dispatch({
				type: vitalStatus.VITAL_DELETE_FAILED
			});
            toast.error(res?.data?.msg);
		}
	    }
	}
}