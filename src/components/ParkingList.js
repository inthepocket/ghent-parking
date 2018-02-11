import React from 'react';
import { ListView } from 'react-native';

import ParkingListItem from './ParkingListItem';

export default class ParkingList extends React.Component {
  componentWillMount() {
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ parkings }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.dataSource = ds.cloneWithRows(parkings);
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
