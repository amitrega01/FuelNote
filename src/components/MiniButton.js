import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import PropTypes from 'prop-types';
export default class MiniButton extends Component {
  constructor(props) {
    super(props);
  }
  changeHandler = e => {
    this.props.press(this.props.id);
  };
  render() {
    if (this.props.active) {
      return (
        <View style={styles.master}>
          <TouchableOpacity
            style={styles.containerActive}
            onPress={this.changeHandler}
          >
            <Text style={styles.text}>{this.props.text}</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={styles.master}>
          <TouchableOpacity
            style={styles.container}
            onPress={this.changeHandler}
          >
            <Text style={styles.text}>{this.props.text}</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  master: {
    width: 60,
    alignContent: 'center',
    justifyContent: 'center'
  },
  containerActive: {
    borderRadius: 25,
    backgroundColor: 'rgba(153,175,255,255)',
    padding: 8
  },
  container: {
    borderRadius: 25,
    backgroundColor: 'rgba(0,0,0,0.12)',
    padding: 8
  },
  text: {
    fontFamily: 'Product Sans Bold',
    textAlign: 'center',
    fontSize: 16
  }
});
MiniButton.propTypes = {
  text: PropTypes.string,
  active: PropTypes.bool,
  press: PropTypes.func,
  id: PropTypes.number
};
