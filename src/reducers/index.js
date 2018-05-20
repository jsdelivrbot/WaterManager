import { combineReducers } from 'redux';
import gaugeListReducer from './gaugeListReducer';
import gaugeAddressesReducer from './gaugeAddressesReducer';

 const rootReducer = combineReducers (
	{
  		gaugeList : gaugeListReducer,
  		gaugeAddresses: gaugeAddressesReducer, 
   	}
);

export default rootReducer; 