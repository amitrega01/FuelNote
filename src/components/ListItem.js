import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import FuelTypeLabel from './FuelTypeLabel';

export default class ListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <FuelTypeLabel typ={this.props.typ} style={styles.icon} />
        <View style={styles.texts}>
          <View style={styles.secondColumn}>
            <Text style={styles.text1}>{this.props.przebieg}km </Text>
            <Text style={styles.text1}>{this.props.data} </Text>
          </View>
          <View style={styles.thirdColumn}>
            <Text style={styles.cena}>{this.props.litry}l </Text>
            <Text style={styles.cena}>{this.props.cena}zł </Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    height: 80,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  icon: {},
  texts: {
    flex: 1,
    height: 100 + '%',
    flexDirection: 'row'
  },
  secondColumn: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'space-between'
  },
  thirdColumn: {
    flex: 2,
    marginLeft: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  text1: {
    color: '#424242',
    fontFamily: 'ProductSans',
    fontSize: 14
  },
  cena: {
    color: '#000',
    fontSize: 24,
    fontFamily: 'ProductSans',
    marginLeft: 16
  }
});

ListItem.propTypes = {
  data: PropTypes.string,
  litry: PropTypes.string,
  cena: PropTypes.string,
  przebieg: PropTypes.number,
  typ: PropTypes.string
};
