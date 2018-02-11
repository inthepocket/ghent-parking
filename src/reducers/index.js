import { combineReducers } from 'redux';
import ParkingReducer from './ParkingReducer';

export default combineReducers({
  parkings: ParkingReducer
});
