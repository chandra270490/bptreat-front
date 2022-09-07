import {vitalStatus} from '../action/Status';

const initialData = {
	data:[],
};

export default (state=initialData,action)=>{
	 console.log(action)
	 switch(action.type){
	 	case vitalStatus.VITAL_REQUEST:
	 	    state={
	 	    	...state
 			}
	 	break; 
	 	case vitalStatus.VITAL_GET_REQUEST:
	 	    state={
	 	    	...state
 			}
	 	break;
	 	case vitalStatus.VITAL_GET_SUCCESS:
	 	    state={
	 	    	...state,
	 	    	data:action.payload.vitals

	 	    }
	 	break;
	 	case vitalStatus.VITAL_DELETE_REQUEST:
	 	    state={
	 	    	...state
 			}
	 	break;
	 	case vitalStatus.VITAL_UPDATE_REQUEST:
	 	    state={
	 	    	...state
 			}
	 	break;
		case vitalStatus.VITAL_UPDATE_SUCCESS:
            state={
                ...state
            }
        break;
        case vitalStatus.VITAL_UPDATE_FAILED:
	 	    state={
	 	    	...state
 			}
	 	break;		 	            
	 }

	 return state;
}