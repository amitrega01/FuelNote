import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}> {this.props.headerText} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  textStyle: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Product Sans Bold',
    color: ' rgba(0, 0, 0, 0.87)'
  }
});

Header.propTypes = {
  headerText: PropTypes.string
};
