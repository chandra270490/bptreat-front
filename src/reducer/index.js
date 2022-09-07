import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer'; 
import CategoryReducer from './CategoryReducer'; 
import VitalReducer from './VitalReducer'; 
import DiseaseReducer from './DiseaseReducer'; 
import MedicineReducer from './MedicineReducer';
import {authStatus} from '../action/Status';
import CommonReducer from './CommonReducer';

const appReducer =combineReducers({
      auth:AuthReducer,
      category:CategoryReducer,
      vital: VitalReducer,
      disease: DiseaseReducer,
      medicine: MedicineReducer,
      common: CommonReducer
});

const rootReducer = (state, action) => {
      if (action.type === authStatus.LOGOUT_SUCCESS) {
        return appReducer(undefined, action)
      }
    
      return appReducer(state, action)
}
export default rootReducer;
