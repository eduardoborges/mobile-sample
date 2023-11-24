import React, { useMemo, useReducer } from 'react';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Platform, StyleSheet } from 'react-native';
import Reanimated, { SequencedTransition } from 'react-native-reanimated';
import { Toast } from './Toast';
import { Action, ToastProps, ToastState } from './Toast.types';

const INITIAL_STATE: ToastState = {
  toasts: [],
  add: () => {},
};

const Context = React.createContext<ToastState>(INITIAL_STATE);

export function ToastContainer({ children }: React.PropsWithChildren) {
  const safeAreaInsets = useSafeAreaInsets();
  const style = useMemo(() => getStyles(safeAreaInsets), [safeAreaInsets]);

  const [toasts, dispatch] = useReducer((state: ToastProps[], action: Action) => {
    switch (action.type) {
      case 'ADD_TOAST':
        return [...state, action.payload];
      case 'REMOVE_TOAST':
        return state.filter((toast) => toast.id !== action.payload.id);
      default:
        return state;
    }
  }, []);

  const add = (toast: Omit<ToastProps, 'selfDismissFn' | 'id'>) => {
    const instance : ToastProps = {
      ...toast,
      id: Date.now() + Math.random().toString(),
    };

    dispatch({ type: 'ADD_TOAST', payload: instance });
    setTimeout(() => {
      dispatch({ type: 'REMOVE_TOAST', payload: instance });
    }, instance.duration || 5000);
  };

  const selfDismissFn = (toast: ToastProps) => {
    dispatch({
      type: 'REMOVE_TOAST',
      payload: toast,
    });
  };

  const value = useMemo(() => ({ toasts, add }), [toasts]);

  return (
    <Context.Provider value={value}>
      <Reanimated.View style={style.container} layout={SequencedTransition}>
        {toasts.map((toast, index) => (
          <Toast
            key={toast.id}
            selfDismissFn={selfDismissFn}
            index={index}
            {...toast}
          />
        ))}
      </Reanimated.View>
      {children}
    </Context.Provider>
  );
}

const getStyles = (safeAreaInsets: EdgeInsets) => StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: 'auto',
    position: 'absolute',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    ...Platform.select({
      ios: {
        top: (safeAreaInsets.top + 5),
      },
      android: {
        bottom: (safeAreaInsets.bottom + 20),
      },
    }),
  },
});

export function useToast() {
  if (Context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return React.useContext(Context);
}
