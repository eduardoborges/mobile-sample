import React, {
  useMemo, forwardRef, useImperativeHandle, ForwardedRef,
} from 'react';
import {
  Modal as NativeModal,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { X } from 'lucide-react-native';

export type ModalProps = React.PropsWithChildren<{
  onHide?: () => any;
  onShow?: () => any;
}>;

export type ModalRef = {
  show: () => void;
  hide: () => void;
};

export const Modal = forwardRef<ModalRef, ModalProps>(({ children, ...props }, ref) => {
  const {
    onHide = () => { },
    onShow = () => { },
  } = props;

  const [visible, setVisible] = React.useState(false);

  const s = useMemo(() => createStyles(props), [props]);

  useImperativeHandle(ref, () => ({
    show: () => setVisible(true),
    hide: () => setVisible(false),
  }));

  return (
    <NativeModal
      presentationStyle="formSheet"
      animationType="slide"
      visible={visible}
      onDismiss={onHide}
      onShow={onShow}
      statusBarTranslucent
    >
      <TouchableOpacity style={s.close} activeOpacity={0.8} onPress={() => setVisible(false)}>
        <X color="#888" />
      </TouchableOpacity>
      {children}
    </NativeModal>
  );
});

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
