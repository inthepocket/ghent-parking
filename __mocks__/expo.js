import React from 'react';
import { View } from 'react-native';

export class MapView extends React.Component {
  static Marker = props => (
    <View {...props} />
  );
  render() {
    return (
      <View {...this.props} />
    );
  }
}
