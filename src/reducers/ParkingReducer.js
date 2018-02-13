import data from '../../data/parkings.json';
import { PARKINGS_CHANGED } from '../actions/types';

const INITIAL_STATE = data.parkings;

export default function parkingReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PARKINGS_CHANGED:
      return action.payload.parkings;
    default:
      return state;
  }
}
