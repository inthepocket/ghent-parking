import React from 'react';
import { connect } from 'react-redux';

import ParkingDetail from '../components/ParkingDetail';

export const Route = 'Detail';

class DetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: params ? params.title : '',
    };
  };
  render() {
    return (
      <ParkingDetail parking={this.props.parking} />
    );
  }
}

const mapStateToProps = (state) => {
  let parking;
  const { selectedParkingId } = state.detail;
  for (let i = 0; i < state.parkings.length; i += 1) {
    if (state.parkings[i].id === selectedParkingId) {
      parking = state.parkings[i];
      break;
    }
  }
  return { parking };
};

export default connect(mapStateToProps)(DetailScreen);
