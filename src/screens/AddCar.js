import React, { Component } from 'react';
import {
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  View
} from 'react-native';
import Header from '../components/Header';
import MiniButton from '../components/MiniButton';

import GreenButton from '../components/GreenButton';
import RedButton from '../components/RedButton';

export default class AddCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [true, false, false, false, false]
    };
  }
  static navigationOptions = {
    header: null
  };
  click = e => {
    let btns = [false, false, false, false, false];
    btns[e] = true;
    this.setState({
      buttons: btns
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Dodaj pojazd" />
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.rowBtns}>
            <MiniButton
              text="PB"
              active={this.state.buttons[0]}
              id={0}
              press={this.click}
            />
            <MiniButton
              text="ON"
              active={this.state.buttons[1]}
              id={1}
              press={this.click}
            />
            <MiniButton
              text="LPG"
              active={this.state.buttons[2]}
              id={2}
              press={this.click}
            />
            <MiniButton
              text="CNG"
              active={this.state.buttons[3]}
              id={3}
              press={this.click}
            />
            <MiniButton
              text="HYB"
              active={this.state.buttons[4]}
              id={4}
              press={this.click}
            />
          </View>
          <TextInput
            style={styles.text}
            placeholder="Nazwa"
            onChange={text => {
              this.setState({
                nazwa: text
              });
            }}
          />
          <TextInput
            style={styles.text}
            placeholder="Przebieg"
            onChange={text => {
              this.setState({
                przebieg: text
              });
            }}
            keyboardType="number-pad"
          />
          <View style={styles.rowBtns}>
            <GreenButton text="Dodaj" />
            <RedButton
              text="Anuluj"
              press={() => {
                //DODAWNAIE AUTA DO BAZY DANYCH
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
  rowBtns: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 16
  },
  text: {
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.5)',
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    fontSize: 20,
    color: 'rgba(0,0,0,0.7)',
    fontFamily: 'ProductSans'
  }
});
