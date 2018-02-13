import React from 'react';
import { TouchableWithoutFeedback, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import ParkingIndicator from './ParkingIndicator';
import { showParking } from '../actions';
import { Colors } from '../utils/color';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    borderBottomWidth: 1,
    borderColor: Colors.GREY_BRIGHT,
    flexDirection: 'row',
    height: 44,
    justifyContent: 'space-between',
    padding: 5,
    position: 'relative',
  },
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
});

export class ParkingListItemImpl extends React.Component {
  onRowPress = () => {
    this.props.showParking(this.props.parking);
  }

  render() {
    const { name, parkingStatus } = this.props.parking;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress}>
        <View style={styles.container}>
          <Text style={styles.titleStyle}>
            {name}
          </Text>
          <ParkingIndicator parkingStatus={parkingStatus} />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default connect(null, { showParking })(ParkingListItemImpl);
