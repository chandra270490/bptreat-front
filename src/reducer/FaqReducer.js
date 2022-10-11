import {faqStatus} from '../action/Status';

const initialData = {
	data:[],
};

export default (state=initialData,action)=>{
	 console.log(action)
	 switch(action.type){
	 	case faqStatus.FAQ_REQUEST:
	 	    state={
	 	    	...state
 			}
	 	break; 
	 	case faqStatus.FAQ_GET_REQUEST:
	 	    state={
	 	    	...state
 			}
	 	break;
	 	case faqStatus.FAQ_GET_SUCCESS:
	 	    state={
	 	    	...state,
	 	    	data:action.payload.faqs

	 	    }
	 	break;
	 	case faqStatus.FAQ_DELETE_REQUEST:
	 	    state={
	 	    	...state
 			}
	 	break;
	 	case faqStatus.FAQ_UPDATE_REQUEST:
	 	    state={
	 	    	...state
 			}
	 	break;
        case faqStatus.FAQ_UPDATE_SUCCESS:
            state={
                ...state
            }
        break;
        case faqStatus.FAQ_UPDATE_FAILED:
	 	    state={
	 	    	...state
 			}
	 	break;		 	            
	 }

	 return state;
}