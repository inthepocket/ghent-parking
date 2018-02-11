import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { CardItem } from './common';

class ParkingListItem extends Component {

  render() {
    const { container, titleStyle, availableStyle } = styles;
    const { name, parkingStatus } = this.props.parking;

    return (
      <CardItem style={container}>
        <Text style={titleStyle}>
          {name}
        </Text>
        <Text style={availableStyle}>
          {parkingStatus.availableCapacity}
        </Text>
      </CardItem>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between'
  },
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
  availableStyle: {
    fontSize: 15,
    paddingRight: 15,
  },
});

export default ParkingListItem;
