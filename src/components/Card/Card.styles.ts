import { StyleSheet } from 'react-native';
import { CardProps } from './Card.types';

export default (props: CardProps) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
