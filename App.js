import HomeScreen from './src/screens/HomeScreen';
import AddScreen from './src/screens/AddScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import AddCar from './src/screens/AddCar';

const Navigation = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Add: {
      screen: AddScreen
    },
    AddCar: {
      screen: AddCar
    }
  },
  {
    initialRouteName: 'AddCar'
  }
);
export default createAppContainer(Navigation);
