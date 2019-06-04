import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

import Home from '../converter/app/components/Home';
import Temperature from '../converter/app/components/Temperature';
import Mass from '../converter/app/components/Mass';
import Length from '../converter/app/components/Length';

export default class Converter extends Component {
  renderScene(route, navigator) {
    switch (route.id) {
      case 'home':
        return <Home navigator={navigator} title="home" />;
      case 'temperature':
        return <Temperature navigator={navigator} title="temperature" />;
      case 'mass':
        return <Mass navigator={navigator} title="mass" />;
      case 'length':
        return <Length navigator={navigator} title="length" />;
      default:
        return <Home navigator={navigator} title="home" />;
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ id: 'home' }}
        renderScene={this.renderScene}
        configureScreen={(route, routeStack) =>
          Navigator.SceneConfigs.FloatFromBottom
        }
      />
    );
  }
}

AppRegistry.registerComponent('Converter', () => Converter);
