import {diseaseStatus} from '../action/Status';

const initialData = {
	data:[],
};

export default (state=initialData,action)=>{
	 console.log(action)
	 switch(action.type){
	 	case diseaseStatus.DISEASE_REQUEST:
	 	    state={
	 	    	...state
 			}
	 	break; 
	 	case diseaseStatus.DISEASE_GET_REQUEST:
	 	    state={
	 	    	...state
 			}
	 	break;
	 	case diseaseStatus.DISEASE_GET_SUCCESS:
	 	    state={
	 	    	...state,
	 	    	data:action.payload.diseases

	 	    }
	 	break;
	 	case diseaseStatus.DISEASE_DELETE_REQUEST:
	 	    state={
	 	    	...state
 			}
	 	break;
	 	case diseaseStatus.DISEASE_UPDATE_REQUEST:
	 	    state={
	 	    	...state
 			}
	 	break;
        case diseaseStatus.DISEASE_UPDATE_SUCCESS:
            state={
                ...state
            }
        break;
        case diseaseStatus.DISEASE_UPDATE_FAILED:
	 	    state={
	 	    	...state
 			}
	 	break;		 	            
	 }

	 return state;
}