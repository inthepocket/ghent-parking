import parkingReducer from '../ParkingReducer';
import { parkingsChanged } from '../../actions';

describe('ParkingReducer tests', () => {
  it('ParkingReducer should return an initial state.', () => {
    const state = parkingReducer(undefined, {});
    expect(state).toBeDefined();
  });
  it('ParkingReducer should keep state in case of random action.', () => {
    const state = parkingReducer(undefined, {});
    expect(state).toBeDefined();
    const newState = parkingReducer(state, { type: 'redux' });
    expect(newState).toBe(state);
  });
  it('ParkingReducer should update state in case of a "parkingsChanged" action.', () => {
    const state = parkingReducer(undefined, {});
    expect(state).toBeDefined();
    const updatedData = [
      { id: 1, name: 'Parking 01' },
      { id: 2, name: 'Parking 02' },
      { id: 3, name: 'Parking 03' },
    ];
    const newState = parkingReducer(state, parkingsChanged({ parkings: updatedData }));
    expect(newState).toBe(updatedData);
  });
});
