import React from 'react';
import renderer from 'react-test-renderer';

import ParkingDetail from '../ParkingDetail';
import { parkings } from '../../../data/parkings.json';

jest.mock('expo');

describe('ParkingDetail tests', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<ParkingDetail parking={parkings[0]} />).toJSON();
    expect(rendered).toBeTruthy();
  });
});
