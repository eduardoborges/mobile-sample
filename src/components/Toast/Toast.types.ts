import { StyleProp, ViewStyle } from 'react-native';

export interface ToastState {
  toasts: ToastProps[];
  add: (toast: ToastProps) => void;
}

export type ToastProps = {
  id?: string | number;
  icon?: Element;
  title: string;
  description: string;
  preset?: 'success' | 'error' | 'warning' | 'info';
  action: string;
  duration?: number;
  onAction?: Function;
  style?: StyleProp<ViewStyle>;
};

export type Action = {
  type: 'ADD_TOAST' | 'REMOVE_TOAST';
  payload: ToastProps;
};
