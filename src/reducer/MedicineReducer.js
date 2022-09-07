import {medicineStatus} from '../action/Status';

const initialData = {
	data:[],
};

export default (state=initialData,action)=>{
	 switch(action.type){
	 	case medicineStatus.MEDICINE_REQUEST:
	 	    state={
	 	    	...state
 			}
	 	break; 
	 	case medicineStatus.MEDICINE_GET_REQUEST:
	 	    state={
	 	    	...state
 			}
	 	break;
	 	case medicineStatus.MEDICINE_GET_SUCCESS:
	 	    state={
	 	    	...state,
	 	    	data:action.payload.medicines
	 	    }
	 	break;
	 	case medicineStatus.MEDICINE_DELETE_REQUEST:
	 	    state={
	 	    	...state
 			}
	 	break;
	 	case medicineStatus.MEDICINE_UPDATE_REQUEST:
	 	    state={
	 	    	...state
 			}
	 	break;
        case medicineStatus.MEDICINE_UPDATE_SUCCESS:
            state={
                ...state
            }
        break;
        case medicineStatus.MEDICINE_UPDATE_FAILED:
	 	    state={
	 	    	...state
 			}
	 	break;		 	            
	 }

	 return state;
}