/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Kernel from './src'
export default class rnrfBug extends Component {
  render() {
    return <Kernel></Kernel>
  }
}

AppRegistry.registerComponent('rnrfBug', () => rnrfBug);
