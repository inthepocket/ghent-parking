import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MapView } from 'expo';

import ParkingIndicator from './ParkingIndicator';
import { Colors } from '../utils/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  map: {
    flex: 1,
  },
  address: {
    fontSize: 18,
    padding: 15,
  },
});

export default class ParkingDetail extends React.Component {
  render() {
    const {
      address,
      name,
      parkingStatus,
      latitude,
      longitude,
    } = this.props.parking;
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.address}>{address}</Text>
          <ParkingIndicator parkingStatus={parkingStatus} />
        </View>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <MapView.Marker
            coordinate={{
              latitude,
              longitude,
            }}
            title={name}
          />
        </MapView>
      </View>
    );
  }
}
