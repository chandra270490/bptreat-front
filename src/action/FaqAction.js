import { faqStatus } from "./Status";
import axios from "../helper/axios";
import toast from 'react-hot-toast';
const adminToken = localStorage.getItem('token');
const config = {
    headers: { Authorization: `Bearer ${adminToken}` }
};

export const AddFaqAction=(data)=>{
	return async (dispatch)=>{
		dispatch({type:faqStatus.FAQ_REQUEST});
		const res = await axios.post(`/add-faq/`,data, config);
		console.log(res.data)
		if(res.status===200){    
			const faqs = res.data
			dispatch({
				type:faqStatus.FAQ_SUCCESS,
				payload:{ faqs }
			})
			toast.success('Faq added successfully');
		}else{
			if(res.status===400){
				dispatch({type:faqStatus.FAQ_FAILED});
				console.log(res.data);
			}
	    }
	}
}

export const GetFaqAction=()=>{
	
	return async (dispatch)=>{
		dispatch({type:faqStatus.FAQ_GET_REQUEST});
		const res = await axios.get(`/get-faq/`);
		console.log(res.data)
		if(res.status===200){    
			const faqs = res.data
			dispatch({
				type:faqStatus.FAQ_GET_SUCCESS,
				payload:{ faqs }
			})

		}else{
		if(res.status===400){
			dispatch({type:faqStatus.FAQ_GET_FAILED});
			console.log(res.data);
		}
	    }
	}
}

export const EditFaqAction=(data)=>{
	return async (dispatch)=>{
		dispatch({type:faqStatus.FAQ_UPDATE_REQUEST});
		const res = await axios.post(`/edit-faq/`,data);
		if(res.status === 200) {    
			const faqs= res.data
			dispatch({
				type: faqStatus.FAQ_UPDATE_SUCCESS,
				payload:{
					faqs
				}
			})
			toast.success('Faq updated successfully');
		} else {
		if(res.status === 201){
			dispatch({
				type: faqStatus.FAQ_UPDATE_FAILED
			});
			toast.error(res?.data?.msg);
		}
	    }
	}
}

export const DeleteFaqAction=(data)=>{
	
	return async (dispatch)=>{
		dispatch({type:faqStatus.FAQ_DELETE_REQUEST});
		const res = await axios.post(`/delete-faq/`,data);
		console.log(res.data)
		if(res.status === 200){    
			const faqs= res.data
			dispatch({
				type:faqStatus.FAQ_DELETE_SUCCESS,
				payload:{ faqs }
			})
			toast.success('Faq deleted successfully');
		}else{
		if(res.status === 201){
			dispatch({
				type: faqStatus.FAQ_DELETE_FAILED
			});
			toast.error(res?.data?.msg);
			console.log(res.data);
		}
	    }
	}
}