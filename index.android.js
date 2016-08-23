/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry,  StatusBar} from 'react-native';

StatusBar.setBarStyle('light-content');
import RootRouter from './App/containers/root/RootRouter';

class DDPStyle extends Component {
  render() {
    return (
      <RootRouter />
    );
  }
}

AppRegistry.registerComponent('ddpapp40', () => DDPStyle);
