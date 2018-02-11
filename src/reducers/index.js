import { combineReducers } from 'redux';

import ParkingReducer from './ParkingReducer';
import NavigationReducer from './NavigationReducer';
import SelectedParkingReducer from './SelectedParkingReducer';

export default combineReducers({
  parkings: ParkingReducer,
  nav: NavigationReducer,
  detail: SelectedParkingReducer,
});
