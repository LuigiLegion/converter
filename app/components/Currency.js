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
import axios from 'axios';

export default class Currency extends Component {
  constructor() {
    super();
    this.state = {
      sourceType: 'USD',
      sourceVal: '0.00',
      targetType: 'EUR',
      targetVal: '0.00',
      curRate: 0,
      curRateDate: 0,
      showRateAndDate: false,
    };
    this.calculate = this.calculate.bind(this);
    this.onChangeSourceType = this.onChangeSourceType.bind(this);
    this.onChangeTargetType = this.onChangeTargetType.bind(this);
    this.onChangeSourceVal = this.onChangeSourceVal.bind(this);
    this.onPressCalculate = this.onPressCalculate.bind(this);
    this.onPressBack = this.onPressBack.bind(this);
  }

  async calculate(source, target) {
    try {
      const { data } = await axios.get(
        `https://www.freeforexapi.com/api/live?pairs=${source}${target}`
      );
      const curRate = data.rates[source + target].rate.toFixed(2);
      const curRateDate = String(
        new Date(Date.now() - data.rates[source + target].timestamp)
      ).slice(4, -23);
      const curSourceVal = this.state.sourceVal;
      const newTargetVal = String((Number(curSourceVal) * curRate).toFixed(2));
      this.setState({
        targetVal: newTargetVal,
        curRate,
        curRateDate,
        showRateAndDate: true,
      });
    } catch (error) {
      console.error(error);
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
    if (
      this.state.sourceVal.length &&
      !isNaN(Number(this.state.sourceVal)) &&
      Number(this.state.sourceVal)
    ) {
      this.calculate(this.state.sourceType, this.state.targetType);
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
            <Picker.Item label="USD" value="USD" color="white" />
            <Picker.Item label="EUR" value="EUR" color="white" />
          </Picker>
          <Picker
            onValueChange={val => this.onChangeTargetType(val)}
            selectedValue={this.state.targetType}
            style={styles.pickerContainee}
          >
            <Picker.Item label="EUR" value="EUR" color="white" />
            <Picker.Item label="USD" value="USD" color="white" />
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
        {this.state.showRateAndDate ? (
          <View style={styles.subContainer}>
            <Text style={styles.textContainee}>{`Rate:\n${
              this.state.curRate
            }`}</Text>
            <Text style={styles.textContainee}>{`Last Updated:\n${
              this.state.curRateDate
            }`}</Text>
          </View>
        ) : (
          <View style={styles.subContainer}>
            <Text style={styles.textContainee}>{`\n`}</Text>
            <Text style={styles.textContainee}>{`\n`}</Text>
          </View>
        )}
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
  textContainee: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
});

AppRegistry.registerComponent('Currency', () => Currency);
