import React from 'react';
import {
  Modal as NativeModal, StyleSheet, TouchableOpacity, View,
} from 'react-native';
import { X } from 'lucide-react-native';
import { Container } from '../Container/Container';

type Props = React.PropsWithChildren<{
  visible?: boolean;
  handleDismiss?: () => any;
  onDismiss?: () => any;
  onShow?: () => any;
}>;

const s = StyleSheet.create({
  close: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#f8f8f8',
    borderRadius: 50,
    zIndex: 4,
    padding: 5,
  },
});

export function Modal(props: Props) {
  const {
    children,
    visible = false,
    onDismiss = () => {},
    onShow = () => {},
    handleDismiss = () => {},
  } = props;

  return (
    <NativeModal
      presentationStyle="formSheet"
      animationType="slide"
      visible={visible}
      onDismiss={onDismiss}
      onShow={onShow}
      statusBarTranslucent
    >
      <TouchableOpacity style={s.close} activeOpacity={0.8} onPress={handleDismiss}>
        <X color="#888" />
      </TouchableOpacity>
      {children}
    </NativeModal>
  );
}
