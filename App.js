import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
//redux
import { Provider } from 'react-redux';
import configureStore from './src/store/store';

//screens
import FeedDrawer from './src/navigator/FeedNavigator';
import Search from './src/screens/Search';
import Profile from './src/screens/Profile';

const store = configureStore();

const TabAppNavigator = createBottomTabNavigator({
  FeedDrawer,
  Search,
  Profile
},
{
  initialRouteName: 'FeedDrawer',
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'grey'
  }
})


const AppContainer =  createAppContainer(TabAppNavigator);

export default class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    )
  }
}