import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default class RedButton extends Component {
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
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 16,
    fontFamily: 'Product Sans Bold',
    color: 'rgba(0,0,0,0.8)'
  }
});

RedButton.propTypes = {
  press: PropTypes.func,
  text: PropTypes.string
};
