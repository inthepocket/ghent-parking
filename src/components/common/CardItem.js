import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const CardItem = (props) => {
  return (
    <View style={[ styles.containerStyle, props.style ]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    height: 44,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
});

export { CardItem };
