import selectedParkingReducer from '../SelectedParkingReducer';
import { showParking } from '../../actions';

describe('SelectedParkingReducer tests', () => {
  it('Selected parking should be null by default.', () => {
    const state = selectedParkingReducer(undefined, {});
    expect(state).toBeDefined();
    expect(state.selectedParkingId).toBeNull();
  });
  it('Selected parking should be updated after a showParking action.', () => {
    const state = selectedParkingReducer(undefined, {});
    expect(state).toBeDefined();
    expect(state.selectedParkingId).toBeNull();
    const parking = {
      id: 200,
    };
    const newState = selectedParkingReducer(state, showParking(parking));
    expect(newState.selectedParkingId).toBe(parking.id);
  });
});
