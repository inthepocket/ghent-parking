import { PARKING_SHOW, PARKINGS_CHANGED } from './types';

export const showParking = parking => ({
  type: PARKING_SHOW,
  payload: parking,
});

export const parkingsChanged = parkings => ({
  type: PARKINGS_CHANGED,
  payload: parkings,
});
