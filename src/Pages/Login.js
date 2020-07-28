import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Logo from '../Components/Logo';
import LoginForm from '../Components/LoginForm';

class Login extends Component {
  signup = () => {
    Actions.signup();
  };

  render() {
    return (
      <View style={Styles.container}>
        <Logo />
        <LoginForm btnType="Login" />
        <View style={Styles.SignupTextView}>
          <Text style={Styles.SignupText}>Don't have an account yet?</Text>
          <TouchableOpacity onPress={this.signup}>
            <Text style={Styles.SignupButton}> Signup</Text>
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

export default Login;
