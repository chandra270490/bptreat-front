import { medicineStatus } from "./Status";
import axios from "../helper/axios";
import toast from 'react-hot-toast';

export const AddMedicineAction=(data)=>{
	return async (dispatch)=>{
		dispatch({type:medicineStatus.MEDICINE_REQUEST});
		const res = await axios.post(`/add-medicine/`,data);
		console.log(res.data)
		if(res.status===200){    
			const categories= res.data
			dispatch({
				type:medicineStatus.MEDICINE_SUCCESS,
				payload:{
					categories
				}
			})
			toast.success('Medicine added successfully');
		}else{
		dispatch({type:medicineStatus.MEDICINE_EXIST});
		toast.error(res?.data?.msg);
	    }
	}
}

export const GetMedicineAction=()=>{
	
	return async (dispatch)=>{
		dispatch({type:medicineStatus.MEDICINE_GET_REQUEST});
		const res = await axios.get(`/get-medicine/`);
		console.log(res.data)
		if(res.status===200){    
			const medicines = res.data
			dispatch({
				type:medicineStatus.MEDICINE_GET_SUCCESS,
				payload:{ medicines }
			})

		}else{
		if(res.status===400){
			dispatch({type:medicineStatus.MEDICINE_GET_FAILED});
			console.log(res.data);
		}
	    }
	}
}

export const EditMedicineAction=(data)=>{
	return async (dispatch)=>{
		dispatch({type:medicineStatus.MEDICINE_UPDATE_REQUEST});
		const res = await axios.post(`/edit-medicine/`,data);
		if(res.status === 200) {    
			const medicines= res.data
			dispatch({
				type: medicineStatus.MEDICINE_UPDATE_SUCCESS,
				payload:{
					medicines
				}
			})
			toast.success('Medicine updated successfully');
		} else {
		if(res.status === 201){
			dispatch({
				type: medicineStatus.MEDICINE_UPDATE_FAILED
			});
			toast.error(res?.data?.msg);
		}
	    }
	}
}

export const DeleteMedicineAction=(data)=>{
	
	return async (dispatch)=>{
		dispatch({type:medicineStatus.MEDICINE_DELETE_REQUEST});
		const res = await axios.post(`/delete-medicine/`,data);
		console.log(res.data)
		if(res.status === 200){    
			const medicines= res.data
			dispatch({
				type:medicineStatus.MEDICINE_DELETE_SUCCESS,
				payload:{ medicines }
			})
			toast.success('Medicine deleted successfully');
		}else{
		if(res.status === 201){
			dispatch({
				type: medicineStatus.MEDICINE_DELETE_FAILED
			});
			toast.error(res?.data?.msg);
			console.log(res.data);
		}
	    }
	}
}