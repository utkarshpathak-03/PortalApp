import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

import Logo from '../Components/Logo';
import SignupForm from '../Components/SignupForm';

class Signup extends Component {
  login = () => {
    Actions.login();
  };

  render() {
    return (
      <View style={Styles.container}>
        <Logo />
        <SignupForm btnType="Signup" />
        <View style={Styles.SignupTextView}>
          <Text style={Styles.SignupText}>Already have an account yet?</Text>
          <TouchableOpacity onPress={this.login}>
            <Text style={Styles.SignupButton}> Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#37474f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  SignupTextView: {
    flexDirection: 'row',
    flexGrow: 1,
    //justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 60,
  },
  SignupText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16,
  },
  SignupButton: {
    color: '#fff',
  },
});

export default Signup;
