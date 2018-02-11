import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import ParkingList from '../components/ParkingList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const Route = 'Home';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Parkings',
  };
  render() {
    return (
      <View style={styles.container}>
        <ParkingList parkings={this.props.parkings} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  parkings: state.parkings,
});

export default connect(mapStateToProps)(HomeScreen);
