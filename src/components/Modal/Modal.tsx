import React, { useMemo } from 'react';
import {
  Modal as NativeModal,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { X } from 'lucide-react-native';

export type ModalProps = React.PropsWithChildren<{
  visible?: boolean;
  handleDismiss?: () => any;
  onDismiss?: () => any;
  onShow?: () => any;
}>;

export function Modal({ children, ...props }: ModalProps) {
  const {
    visible = false,
    onDismiss = () => { },
    onShow = () => { },
    handleDismiss = () => { },
  } = props;

  const s = useMemo(() => createStyles(props), [props]);

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

const createStyles = (p: ModalProps) => StyleSheet.create({
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
