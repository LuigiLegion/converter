import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default class Home extends Component {
  constructor() {
    super();
    this.onPressForward = this.onPressForward.bind(this);
  }

  onPressForward(id) {
    this.props.navigator.push({
      id,
    });
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={() => this.onPressForward('temperature')}>
          <View style={styles.buttonContainee}>
            <Text style={styles.buttonText}>Temperature</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onPressForward('mass')}>
          <View style={styles.buttonContainee}>
            <Text style={styles.buttonText}>Mass</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onPressForward('length')}>
          <View style={styles.buttonContainee}>
            <Text style={styles.buttonText}>Length</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onPressForward('currency')}>
          <View style={styles.buttonContainee}>
            <Text style={styles.buttonText}>Currency</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'steelblue',
    height: '100%',
  },
  buttonContainee: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
    padding: '10%',
    marginTop: '1%',
    marginBottom: '1%',
    marginRight: '2%',
    marginLeft: '2%',
    borderRadius: 10,
  },
  buttonText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 40,
    color: '#707070',
  },
});

AppRegistry.registerComponent('Home', () => Home);
