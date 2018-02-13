import { PARKING_SHOW } from '../actions/types';

const INITIAL_STATE = {
  selectedParkingId: null,
};

export default function selectedParkingReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PARKING_SHOW:
      return {
        selectedParkingId: action.payload.id,
      };
    default:
      return state;
  }
}
