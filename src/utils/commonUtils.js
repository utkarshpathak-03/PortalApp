import {AsyncStorage} from 'react-native';

export const checkLocalStorage = async () => {
  let localData = await AsyncStorage.getItem('data');
  return localData;
};
