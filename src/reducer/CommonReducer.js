import {adminStatus} from '../action/Status';

const initialData = {
	data: []
};

export default (state=initialData,action)=>{
	 switch(action.type){
		case adminStatus.ADMIN_PROFILE_UPDATE_REQUEST:
			state={
				...state,
			}
		break;
		case adminStatus.ADMIN_PROFILE_UPDATE_SUCCESS:
			state={
				...state,
			}
		break;
		case adminStatus.ADMIN_PROFILE_UPDATE_FAILED:
			state={
				...state,
			}
		break; 
		case adminStatus.ADMIN_PROFILE_GET_FAILED:
	 	    state={
	 	    	...state
 			}
	 	break; 
	 	case adminStatus.ADMIN_PROFILE_GET_REQUEST:
	 	    state={
	 	    	...state
 			}
	 	break;
	 	case adminStatus.ADMIN_PROFILE_GET_SUCCESS:
	 	    state={
	 	    	...state,
	 	    	data:action.payload.profile

	 	    }	 	            
	 }

	 return state;
}