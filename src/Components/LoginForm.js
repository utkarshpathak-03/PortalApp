import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Actions} from 'react-native-router-flux';
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDta: {
        email: '',
        pass: '',
      },
      prevUser: [],
      isFieldsEmpty: false,
      isLogin: false,
      isWrongDetails: false,
    };
  }
  componentDidMount() {
    this.checkLocalStorage();
  }

  checkLocalStorage = async () => {
    let localData = await AsyncStorage.getItem('data');
    console.log(localData, 'localData');
    if (localData) {
      this.setState({prevUser: JSON.parse(localData)});
    }
  };

  onLoginHandler = () => {
    let prevArr = this.state.prevUser;
    console.log(prevArr, 'displayData');
    let isFound = {status: false};
    prevArr.filter(user => {
      if (
        user.email === this.state.userDta.email &&
        user.password === this.state.userDta.pass
      ) {
        this.setState({userDta: {email: '', pass: ''}});
        isFound = {status: true, data: user};
      }
    });
    if (isFound.status) {
      Actions.home({detail: isFound.data});
    } else if (
      this.state.userDta.email == '' ||
      this.state.userDta.pass == ''
    ) {
      this.setState({isFieldsEmpty: true, isWrongDetails: false});
    } else {
      this.setState({isWrongDetails: true, isFieldsEmpty: false});
      console.log('user not found!');
    }
  };

  EmailHandler = em => {
    this.setState({
      userDta: {...this.state.userDta, email: em},
    });
  };

  passHandler = ps => {
    this.setState({
      userDta: {...this.state.userDta, pass: ps},
    });
  };

  render() {
    return (
      <View style={Styles.container}>
        <TextInput
          value={this.state.userDta.email}
          style={Styles.inputBox}
          placeholder="Email"
          placeholderTextColor="#fff"
          selectionColor="lightblue"
          keyboardType="email-address"
          onChangeText={this.EmailHandler}
          onSubmitEditing={() => this.password.focus()}
        />
        <TextInput
          value={this.state.userDta.pass}
          style={Styles.inputBox}
          placeholder="Password"
          placeholderTextColor="#fff"
          secureTextEntry={true}
          onChangeText={this.passHandler}
          ref={input => (this.password = input)}
        />
        <TouchableOpacity style={Styles.button} onPress={this.onLoginHandler}>
          <Text style={Styles.buttonText}>{this.props.btnType}</Text>
        </TouchableOpacity>
        {this.state.isWrongDetails ? (
          <Text style={{color: 'red', fontSize: 18}}>user not found!</Text>
        ) : null}
        {this.state.isFieldsEmpty ? (
          <Text style={{color: 'red', fontSize: 18}}>
            Enter All the Fields First !!!
          </Text>
        ) : null}
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    width: 300,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 100 / 3,
    fontSize: 18,
    paddingHorizontal: 20,
    color: '#fff',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  button: {
    width: 300,
    backgroundColor: '#102027',
    borderRadius: 100 / 3,
    paddingVertical: 10,
    marginVertical: 10,
  },
});

export default LoginForm;
