import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { Colors } from '../utils/color';

const styles = StyleSheet.create({
  availableStyle: {
    backgroundColor: Colors.GREY_BRIGHT,
    fontSize: 18,
    marginRight: 10,
    padding: 6,
    textAlign: 'right',
    height: 36,
    width: 60,
  },
});

const ParkingIndicator = ({ style, parkingStatus }) => (
  <Text style={[styles.availableStyle, style]}>
    {parkingStatus.availableCapacity}
  </Text>
);

export default ParkingIndicator;
