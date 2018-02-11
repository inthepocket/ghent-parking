import React, { Component } from 'react';
import { View, ListView } from 'react-native';
import { connect } from 'react-redux';
import ParkingListItem from './ParkingListItem';

class ParkingList extends Component {

  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.parkings);
  }

  renderRow(parking) {
    return <ParkingListItem parking={parking} />;
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    parkings: state.parkings
  };
};

export default connect(mapStateToProps)(ParkingList);
