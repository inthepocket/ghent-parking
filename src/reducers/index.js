import { combineReducers } from 'redux';

import parkingReducer from './ParkingReducer';
import navigationReducer from './NavigationReducer';
import selectedParkingReducer from './SelectedParkingReducer';

export default combineReducers({
  parkings: parkingReducer,
  nav: navigationReducer,
  detail: selectedParkingReducer,
});
