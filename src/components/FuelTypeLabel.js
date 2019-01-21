import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import ONLabel from './labels/ONLabel';
import ONPLabel from './labels/ONPLabel';
import PB95Label from './labels/PB95Label';
import PBPLabel from './labels/PBPLabel';
import LPGLabel from './labels/LPGLabel';
import CNGLabel from './labels/CNGLabel';

export default class FuelTypeLabel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    switch (this.props.typ) {
      case 'ON': {
        return <ONLabel style={styles.img} />;
      }
      case 'PB95': {
        return <PB95Label style={styles.img} />;
      }
      case 'PBP': {
        return <PBPLabel style={styles.img} />;
      }
      case 'ONP': {
        return <ONPLabel style={styles.img} />;
      }
      case 'LPG': {
        return <LPGLabel style={styles.img} />;
      }
      case 'CNG': {
        return <CNGLabel style={styles.img} />;
      }
      default: {
        return <ONLabel style={styles.img} />;
      }
    }
  }
}
const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100
  }
});

FuelTypeLabel.propTypes = {
  typ: PropTypes.string
};
