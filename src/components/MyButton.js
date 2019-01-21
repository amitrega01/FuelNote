import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default class MyButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.button}
        onPress={this.props.press}
      >
        <Text style={styles.text}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    width: 180,
    height: 50,
    borderRadius: 32,
    backgroundColor: '#0038FF',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 12,

    position: 'absolute',
    bottom: 10,
    right: 10
  },
  text: {
    fontSize: 16,
    fontFamily: 'Product Sans Bold',
    color: '#fff'
  }
});

MyButton.propTypes = {
  press: PropTypes.func,
  text: PropTypes.string
};
