import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import MyButton from '../components/MyButton';
import Header from '../components/Header';
import ListItem from '../components/ListItem';

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      list: [
        {
          key: 'a0de03d0-313d-42df-bd27-a29b3cff0643',
          data: 'Jan 17, 2014',
          litry: '12.93',
          cena: '4.84',
          przebieg: 121431,
          typ: 'ON'
        },
        {
          key: '0f356bcf-e4e2-4e06-899d-4f1f736444da',
          data: 'Oct 27, 2015',
          litry: '24.99',
          cena: '4.77',
          przebieg: 114469,
          typ: 'PBP'
        },
        {
          key: '753d2e21-27fc-47c5-89f2-f75e895952c5',
          data: 'Nov 11, 2018',
          litry: '20.03',
          cena: '5.35',
          przebieg: 130898,
          typ: 'ONP'
        },
        {
          key: 'cd98acea-d153-4148-931c-628f974753dd',
          data: 'Jun 27, 2015',
          litry: '28.7',
          cena: '5.18',
          przebieg: 107784,
          typ: 'PBP'
        },
        {
          key: '98d744d1-426a-44c3-a3a4-35cf4e287547',
          data: 'Oct 1, 2015',
          litry: '21.36',
          cena: '5.12',
          przebieg: 124851,
          typ: 'PB98'
        },
        {
          key: 'd1ce228a-e551-4e6e-8b0b-eb5f73f3ad02',
          data: 'Oct 26, 2018',
          litry: '18.39',
          cena: '5.33',
          przebieg: 105915,
          typ: 'ON'
        },
        {
          key: '88c305da-041d-4ef1-83b8-d099f4835b24',
          data: 'Feb 17, 2018',
          litry: '16.28',
          cena: '4.74',
          przebieg: 137862,
          typ: 'CNG'
        },
        {
          key: '3d6e078e-d829-4fca-8d4a-c2a343648323',
          data: 'May 2, 2018',
          litry: '10.73',
          cena: '4.56',
          przebieg: 106371,
          typ: 'ONP'
        },
        {
          key: 'f9652fb0-824d-4bbd-ab92-41b30bb7af57',
          data: 'Apr 19, 2017',
          litry: '22.04',
          cena: '4.83',
          przebieg: 139131,
          typ: 'PBP'
        },
        {
          key: '5a7ce576-166a-43c7-a3f4-2c530779b542',
          data: 'Dec 11, 2014',
          litry: '16.9',
          cena: '4.74',
          przebieg: 88387,
          typ: 'ON'
        }
      ]
    };
  }
  render() {
    return (
      <View style={styles.container2}>
        <Header headerText="Notes spalania" />
        <View style={styles.container}>
          <FlatList
            data={this.state.list}
            renderItem={({ item }) => (
              <ListItem
                data={item.data}
                litry={item.litry}
                cena={item.cena}
                przebieg={item.przebieg}
                typ={item.typ}
              />
            )}
          />
        </View>
        <MyButton
          text="Dodaj tankwoanie"
          press={() => {
            // eslint-disable-next-line react/prop-types
            this.props.navigation.navigate('Add');
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  container2: {
    marginTop: 8,
    flex: 1
  }
});
