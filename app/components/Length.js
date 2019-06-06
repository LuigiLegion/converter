import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  Picker,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {
  convertKilometer,
  convertMeter,
  convertCentimeter,
  convertMile,
  convertFoot,
  convertInch,
} from '../utilities/utilityFunctions';

export default class Length extends Component {
  constructor() {
    super();
    this.state = {
      sourceType: 'Kilometer',
      sourceVal: '1',
      targetType: 'Mile',
      targetVal: '0.62',
    };
    this.calculate = this.calculate.bind(this);
    this.onChangeSourceType = this.onChangeSourceType.bind(this);
    this.onChangeTargetType = this.onChangeTargetType.bind(this);
    this.onChangeSourceVal = this.onChangeSourceVal.bind(this);
    this.onPressCalculate = this.onPressCalculate.bind(this);
    this.onPressBack = this.onPressBack.bind(this);
  }

  calculate() {
    const curSourceVal = this.state.sourceVal;
    const curTargetType = this.state.targetType;
    if (this.state.sourceType === 'Kilometer') {
      this.setState({
        targetVal: convertKilometer(curSourceVal, curTargetType),
      });
    } else if (this.state.sourceType === 'Meter') {
      this.setState({
        targetVal: convertMeter(curSourceVal, curTargetType),
      });
    } else if (this.state.sourceType === 'Centimeter') {
      this.setState({
        targetVal: convertCentimeter(curSourceVal, curTargetType),
      });
    } else if (this.state.sourceType === 'Mile') {
      this.setState({
        targetVal: convertMile(curSourceVal, curTargetType),
      });
    } else if (this.state.sourceType === 'Foot') {
      this.setState({
        targetVal: convertFoot(curSourceVal, curTargetType),
      });
    } else if (this.state.sourceType === 'Inch') {
      this.setState({
        targetVal: convertInch(curSourceVal, curTargetType),
      });
    }
  }

  onChangeSourceType(sourceType) {
    const curSourceType = this.state.sourceType;
    this.setState({
      sourceType,
    });
    if (this.state.targetType === sourceType) {
      this.setState({
        targetType: curSourceType,
      });
    }
  }

  onChangeTargetType(targetType) {
    const curTargetType = this.state.targetType;
    this.setState({
      targetType,
    });
    if (this.state.sourceType === targetType) {
      this.setState({
        sourceType: curTargetType,
      });
    }
  }

  onChangeSourceVal(sourceVal) {
    this.setState({
      sourceVal,
    });
  }

  onPressCalculate() {
    if (this.state.sourceVal.length && !isNaN(Number(this.state.sourceVal))) {
      this.calculate();
    }
  }

  onPressBack() {
    this.props.navigator.push({
      id: 'home',
    });
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.subContainer}>
          <TextInput
            onChangeText={val => this.onChangeSourceVal(val)}
            value={this.state.sourceVal}
            placeholder="Enter"
            placeholderTextColor="white"
            style={styles.textInputContainee}
          />
          <TextInput
            value={this.state.targetVal}
            style={styles.textInputContainee}
            editable={false}
          />
        </View>
        <View style={styles.subContainer}>
          <Picker
            onValueChange={val => this.onChangeSourceType(val)}
            selectedValue={this.state.sourceType}
            style={styles.pickerContainee}
          >
            <Picker.Item label="Mile" value="Mile" color="white" />
            <Picker.Item label="Foot" value="Foot" color="white" />
            <Picker.Item label="Inch" value="Inch" color="white" />
            <Picker.Item label="Kilometer" value="Kilometer" color="white" />
            <Picker.Item label="Meter" value="Meter" color="white" />
            <Picker.Item label="Centimeter" value="Centimeter" color="white" />
          </Picker>
          <Picker
            onValueChange={val => this.onChangeTargetType(val)}
            selectedValue={this.state.targetType}
            style={styles.pickerContainee}
          >
            <Picker.Item label="Kilometer" value="Kilometer" color="white" />
            <Picker.Item label="Meter" value="Meter" color="white" />
            <Picker.Item label="Centimeter" value="Centimeter" color="white" />
            <Picker.Item label="Mile" value="Mile" color="white" />
            <Picker.Item label="Foot" value="Foot" color="white" />
            <Picker.Item label="Inch" value="Inch" color="white" />
          </Picker>
        </View>
        <View style={styles.subContainer}>
          <TouchableOpacity
            onPress={() => this.onPressCalculate()}
            style={styles.subContainer}
          >
            <View style={styles.buttonContainee}>
              <Text style={styles.buttonText}>Calculate</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onPressBack()}
            style={styles.subContainer}
          >
            <View style={styles.buttonContainee}>
              <Text style={styles.buttonText}>Back</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'steelblue',
    paddingTop: '40%',
    height: '100%',
  },
  subContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  textInputContainee: {
    flex: 1,
    textAlign: 'center',
    fontSize: 50,
    color: 'white',
  },
  pickerContainee: {
    flex: 1,
    paddingRight: '5%',
    paddingLeft: '5%',
  },
  buttonContainee: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    padding: '10%',
    marginRight: '15%',
    marginLeft: '15%',
    borderRadius: 10,
  },
  buttonText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    color: '#707070',
  },
});

AppRegistry.registerComponent('Length', () => Length);
