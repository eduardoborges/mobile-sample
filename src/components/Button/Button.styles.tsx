import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  button: {
    borderRadius: 6,
    // elevation: 5,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export const variants = {
  touchable: StyleSheet.create({
    primary: {
      backgroundColor: '#000',
    },
    secondary: {
      backgroundColor: '#fff',
      borderColor: '#000',
      borderWidth: 1,
    },
  }),
  text: StyleSheet.create({
    primary: {
      color: '#fff',
    },
    secondary: {
      color: '#000',
    },
  }),
};
