import {Alert} from 'react-native';

export const showAlert = (
  title = '',
  message = '',
  buttons = [],
  options = {},
) => {
  try {
    if (title.trim() && message.trim() && buttons.length) {
      Alert.alert(title, message, [...buttons], {
        cancelable: false,
        ...options,
      });
    }
  } catch (e) {
    console.log('@@@utils@@showAlert: ', e);
  }
};
