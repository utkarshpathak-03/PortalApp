import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      pass: '',
      prevUser: [],
      isSignedUp: false,
      isAllFieldsEmpty: false,
    };
  }

  componentDidMount = async () => {
    this.checkLocalStorage();
  };

  checkLocalStorage = async () => {
    let localData = await AsyncStorage.getItem('data');
    console.log(localData, 'localData');
    console.log(this.state.isSignedUp, 'isSignedUp');
    if (localData) {
      this.setState({prevUser: JSON.parse(localData)}); //converting the  text into Javascript function
    }
    // this.setState({isSignedUp: false});
  };

  NameHandler = uname => {
    this.setState({
      name: uname,
    });
    //console.log('name = > ' + this.state.userData.name);
  };
  emailHandler = em => {
    this.setState({
      email: em,
    });
    //console.log('email = > ' + this.state.userData.email);
  };
  PassHandler = ps => {
    this.setState({
      pass: ps,
    });
    //console.log('pass = > ' + this.state.userData.pass);
  };

  OnSignupHandler = async () => {
    if (
      this.state.name !== '' &&
      this.state.pass !== '' &&
      this.state.email !== ''
    ) {
      let obj = {
        email: this.state.email,
        password: this.state.pass,
        name: this.state.name,
      };
      let arr = [...this.state.prevUser];
      arr.push(obj);
      await AsyncStorage.setItem('data', JSON.stringify(arr));
      console.log(arr, 'savedData');
      this.setState({
        email: '',
        pass: '',
        name: '',
        isSignedUp: true,
      });
      this.checkLocalStorage();
    } else {
      this.setState({isAllFieldsEmpty: true});
    }
  };

  render() {
    return (
      <View style={Styles.container}>
        <TextInput
          value={this.state.name}
          style={Styles.inputBox}
          placeholder="Username"
          placeholderTextColor="#fff"
          selectionColor="lightblue"
          onChangeText={this.NameHandler}
          onSubmitEditing={() => this.email.focus()}
        />
        <TextInput
          value={this.state.email}
          style={Styles.inputBox}
          placeholder="Email"
          placeholderTextColor="#fff"
          selectionColor="lightblue"
          keyboardType="email-address"
          onChangeText={e => this.emailHandler(e)}
          onSubmitEditing={() => this.password.focus()}
          ref={input => {
            this.email = input;
          }}
        />
        <TextInput
          value={this.state.pass}
          style={Styles.inputBox}
          placeholder="Password"
          placeholderTextColor="#fff"
          secureTextEntry={true}
          onChangeText={this.PassHandler}
          ref={input => (this.password = input)}
        />
        <TouchableOpacity style={Styles.button} onPress={this.OnSignupHandler}>
          <Text style={Styles.buttonText}>{this.props.btnType}</Text>
        </TouchableOpacity>
        {this.state.isSignedUp ? (
          <Text style={{color: 'red', fontSize: 18}}>
            Signed Up Successfully !!!
          </Text>
        ) : null}
        {this.state.isAllFieldsEmpty ? (
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

export default Form;
