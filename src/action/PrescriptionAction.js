import { prescriptionStatus } from "./Status";
import axios from "../helper/axios";
import toast from 'react-hot-toast';

export const AddPrescriptionAction=(data)=>{
	return async (dispatch)=>{
		dispatch({type:prescriptionStatus.PRESCRIPTION_REQUEST});
		const res = await axios.post(`/add-prescription/`,data);
		console.log(res.data)
		if(res.status===200){    
			const categories= res.data
			dispatch({
				type:prescriptionStatus.PRESCRIPTION_SUCCESS,
				payload:{
					categories
				}
			})
			toast.success('Prescription added successfully');
		}else{
		dispatch({type:prescriptionStatus.PRESCRIPTION_EXIST});
		toast.error(res?.data?.msg);
	    }
	}
}

export const GetPrescriptionAction=()=>{
	
	return async (dispatch)=>{
		dispatch({type:prescriptionStatus.PRESCRIPTION_GET_REQUEST});
		const res = await axios.get(`/get-prescription/`);
		console.log(res.data)
		if(res.status===200){    
			const prescriptions = res.data
			dispatch({
				type:prescriptionStatus.PRESCRIPTION_GET_SUCCESS,
				payload:{ prescriptions }
			})

		}else{
		if(res.status===400){
			dispatch({type:prescriptionStatus.PRESCRIPTION_GET_FAILED});
			console.log(res.data);
		}
	    }
	}
}

export const EditPrescriptionAction=(data)=>{
	return async (dispatch)=>{
		dispatch({type:prescriptionStatus.PRESCRIPTION_UPDATE_REQUEST});
		const res = await axios.post(`/edit-prescription/`,data);
		if(res.status === 200) {    
			const prescriptions= res.data
			dispatch({
				type: prescriptionStatus.PRESCRIPTION_UPDATE_SUCCESS,
				payload:{
					prescriptions
				}
			})
			toast.success('Prescription updated successfully');
		} else {
		if(res.status === 201){
			dispatch({
				type: prescriptionStatus.PRESCRIPTION_UPDATE_FAILED
			});
			toast.error(res?.data?.msg);
		}
	    }
	}
}

export const DeletePrescriptionAction=(data)=>{
	
	return async (dispatch)=>{
		dispatch({type:prescriptionStatus.PRESCRIPTION_DELETE_REQUEST});
		const res = await axios.post(`/delete-prescription/`,data);
		console.log(res.data)
		if(res.status === 200){    
			const prescriptions= res.data
			dispatch({
				type:prescriptionStatus.PRESCRIPTION_DELETE_SUCCESS,
				payload:{ prescriptions }
			})
			toast.success('Prescription deleted successfully');
		}else{
		if(res.status === 201){
			dispatch({
				type: prescriptionStatus.PRESCRIPTION_DELETE_FAILED
			});
			toast.error(res?.data?.msg);
			console.log(res.data);
		}
	    }
	}
}