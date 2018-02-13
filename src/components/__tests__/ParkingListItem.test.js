import React from 'react';
import renderer from 'react-test-renderer';

import { ParkingListItem } from '../ParkingListItem';
import { parkings } from '../../../data/parkings.json';

describe('ParkingListItem tests', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<ParkingListItem parking={parkings[0]} />).toJSON();
    expect(rendered).toBeTruthy();
  });
});
