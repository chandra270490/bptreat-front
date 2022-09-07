import {adminStatus} from "./Status";
import axios from "../helper/axios";
import toast from 'react-hot-toast';

export const EditProfileAction=(data)=>{
	return async (dispatch)=>{
		dispatch({type:adminStatus.ADMIN_PROFILE_UPDATE_REQUEST});
		const res = await axios.post(`/edit-user/`,data);
		if(res.status === 200) {    
			const profile = res.data.data; 
			dispatch({
				type: adminStatus.ADMIN_PROFILE_UPDATE_SUCCESS,
				payload:{
					profile
				}
			})
			toast.success('Profile updated successfully');
		} else {
		if(res.status === 201){
			dispatch({
				type: adminStatus.ADMIN_PROFILE_UPDATE_FAILED
			});
			toast.error(res?.data?.msg);
		}
	    }
	}
}

export const GetAdminProfileAction=(userId)=>{
	return async (dispatch)=>{
		dispatch({type:adminStatus.ADMIN_PROFILE_GET_REQUEST});
		const res = await axios.get('/get-user',{ params: { id: userId } });
		if(res.status === 200) {    
			const profile = res.data.data; 
			dispatch({
				type: adminStatus.ADMIN_PROFILE_GET_SUCCESS,
				payload:{
					profile
				}
			})
		} else {
		if(res.status === 201){
			dispatch({
				type: adminStatus.ADMIN_PROFILE_GET_FAILED
			});
			toast.error(res?.data?.msg);
		}
	    }
	}
}
