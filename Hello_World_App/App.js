import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput
} from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  onCancelButtonClicked = () => {
    alert('Cancel button pressed');
  }

  onNameChanged = (text) => {
    this.setState({text: text})
  };

  render() {
    return (
      // View tag
      <View style={styles.container}>
        {/* Text tag */}
        <Text style={styles.welcome}>Welcome to React Native Tutorials.</Text>

        {/* TextInput tag */}
        <TextInput
          style={styles.textInputStyle}
          placeholder="Type name here"
          onChangeText={(text) => this.onNameChanged(text)}
        />

        {/* Button tag */}
        <Button
          title='OK'
          onPress={() => { alert('OK button pressed'); }}
        />

        {/* TouchableOpacity tag */}
        <TouchableOpacity
          style={styles.touchableOpacityStyle}
          onPress={() => { this.onCancelButtonClicked() }}
        >
          <Text>Cancel</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  touchableOpacityStyle: {
    backgroundColor: 'orange',
    padding: 10
  },
  textInputStyle: {
    height: 40,
    width: '80%',
    backgroundColor: 'rgb(231,234,237)',
    borderRadius: 10,
    paddingHorizontal: 10
  }
});
