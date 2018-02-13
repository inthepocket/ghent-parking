import React from 'react';
import renderer from 'react-test-renderer';

import ParkingIndicator from '../ParkingIndicator';
import { parkings } from '../../../data/parkings.json';

describe('ParkingIndicator tests', () => {
  it('renders without crashing', () => {
    const { parkingStatus } = parkings[0];
    const rendered = renderer.create(<ParkingIndicator parkingStatus={parkingStatus} />).toJSON();
    expect(rendered).toBeTruthy();
  });
});
