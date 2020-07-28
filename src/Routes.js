import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene
            key="login"
            component={Login}
            title="Login"
            initial
            hideNavBar
          />
          <Scene key="signup" component={Signup} title="Register" hideNavBar />
          <Scene key="home" component={Home} title="Home" />
        </Stack>
      </Router>
    );
  }
}

export default Routes;
