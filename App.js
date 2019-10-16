import React , {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';

import store from './app/store'; //Import the store
import Home from './app/components/home' //Import the component file
import Main from './app/index' //Import the app/index.js file
export default class App extends Component  {
 render () {
  return (
    <Provider store={store}>
        <Main />
    </Provider>
)   ;
 }
  
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
