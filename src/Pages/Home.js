import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {HomeActions} from '../actions/HomeActions';

export class Home extends Component {
  componentDidMount() {
    this.props.HomeActions('devesh');
  }

  render() {
    console.warn(this.props.isLoading);
    return (
      <View style={Styles.container}>
        <Text style={{color: '#fff'}}> {this.props.isLoading}</Text>
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#37474f',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = ({HomeReducers}) => {
  const {isLoading} = HomeReducers;
  return {isLoading};
};

export default connect(
  mapStateToProps,
  {HomeActions},
)(Home);
