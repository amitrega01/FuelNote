import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TextInput
} from 'react-native';
import Header from '../components/Header';
import GreenButton from '../components/GreenButton';
import RedButton from '../components/RedButton';
import firebase from 'firebase';
global.Symbol = require('core-js/es6/symbol');
require('core-js/fn/symbol/iterator');
require('core-js/fn/map');
require('core-js/fn/set');
require('core-js/fn/array/find');

const config = {
  apiKey: 'AIzaSyA8wSqWjBWUlv9e60_BJchKMs3H7xyuE20',
  databaseURL: 'https://moj-super-projekt.firebaseio.com',
  projectId: 'moj-super-projekt'
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default class AddScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      przebieg: ' ',
      data: '12.01.2019',
      litry: ' ',
      cena: ' ',
      koszt: ' '
    };
  }
  sendToCloud() {
    // eslint-disable-next-line no-console
    console.log('Wywyslanie do chmury...');
  }
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Dodaj tankowanie" />
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.row}>
            <Text style={styles.label}>Przebieg </Text>
            <TextInput
              placeholder="km"
              style={styles.input}
              value={this.state.przebieg}
              onChangeText={text => {
                this.setState({ przebieg: text });
              }}
              keyboardType="number-pad"
            />

            <Text style={styles.labelUnit}>km</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Data </Text>
            <TextInput
              placeholder="data"
              style={styles.input}
              value={this.state.data}
              onChangeText={text => {
                this.setState({ data: text });
              }}
            />
            <Text style={styles.labelUnit}>Button </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Litry </Text>
            <TextInput
              style={styles.input}
              value={this.state.litry}
              onChangeText={text => {
                this.setState({ litry: text });
              }}
              keyboardType="number-pad"
            />
            <Text style={styles.labelUnit}>l</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Cena za litr</Text>
            <TextInput
              placeholder="cena za litr"
              style={styles.input}
              value={this.state.cena}
              onChangeText={text => {
                this.setState({ cena: text });
              }}
              keyboardType="number-pad"
            />

            <Text style={styles.labelUnit}>zł/l</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Suma </Text>
            <TextInput
              placeholder="data"
              style={styles.input}
              value={(this.state.litry * this.state.cena).toPrecision(3)}
            />

            <Text style={styles.labelUnit}>zł</Text>
          </View>

          <View style={styles.rowButtons}>
            <GreenButton text="Dodaj" />
            <RedButton
              text="Anuluj"
              press={() => {
                // eslint-disable-next-line react/prop-types
                this.props.navigation.navigate('Home');
              }}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    flex: 1
  },
  row: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  rowButtons: {
    paddingVertical: 16,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center'
  },
  label: {
    flex: 2,
    fontFamily: 'Product Sans Bold',
    fontSize: 16,
    color: '#000000'
  },
  input: {
    flex: 4,
    fontFamily: 'ProductSans',
    fontSize: 18,
    textAlign: 'center',
    borderBottomWidth: 0.25,
    borderBottomColor: '#676767'
  },
  labelUnit: {
    fontSize: 14,
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    fontFamily: 'ProductSans'
  }
});
