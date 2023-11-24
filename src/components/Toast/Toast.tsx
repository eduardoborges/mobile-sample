import React, { useMemo } from 'react';
import {
  Platform, StyleSheet, View, TouchableOpacity,
} from 'react-native';
import Reanimated, {
  FadeInDown,
  FadeOutDown,
  SequencedTransition,
  ZoomInDown,
  ZoomInUp, ZoomOutDown, ZoomOutUp,
} from 'react-native-reanimated';
import theme from '~/theme';

import { ToastProps } from './Toast.types';

interface Props extends ToastProps {
  selfDismissFn?(toast: ToastProps): void;
  index: number;
}

export function Toast(props: Props) {
  const {
    icon: Icon = null,
    action = 'Fechar',
    title = 'Title',
    description = 'Description',
    onAction = () => {},
    selfDismissFn = () => {},
    style,
    index,
  } = props;

  const s = useMemo(() => getStyles(props), [props]);

  const dismiss = () => {
    selfDismissFn(props);
    onAction();
  };

  return (
    <Reanimated.View
      style={[s.toast, style]}
      entering={(Platform.OS === 'ios' ? ZoomInUp : ZoomInDown).duration(500).springify().stiffness(150).damping(100)}
      exiting={(Platform.OS === 'ios' ? ZoomOutUp : ZoomOutDown).duration(500).springify().stiffness(150).damping(100)}
      layout={SequencedTransition.delay(100 * index)}
    >
      {Icon && Platform.OS === 'ios' && (
        <View style={s.iconColumn}>
          <View style={s.icon}>
            {React.createElement(Icon as any, { size: s.icon.width / 1.5, color: theme.colors.white, strokeWidth: 3 })}
          </View>
        </View>
      )}
      <View style={s.textColumn}>
        <Reanimated.Text style={[s.title]}>{title}</Reanimated.Text>
        <Reanimated.Text style={[s.description]}>{description}</Reanimated.Text>
      </View>
      <View style={s.actionColumn}>
        <TouchableOpacity style={s.actionTouchable} onPress={dismiss}>
          <Reanimated.Text style={[s.actionText]}>{action}</Reanimated.Text>
        </TouchableOpacity>
      </View>
    </Reanimated.View>
  );
}

const getStyles = (props: Props) => StyleSheet.create({
  toast: {
    backgroundColor: theme.colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    position: 'relative',
    marginBottom: 10,

    //
    ...(Platform.OS === 'android' && {
      width: '100%',
      height: 68,
      borderRadius: 4,
      padding: 16,
      elevation: 4,
    }),
    ...(Platform.OS === 'ios' && {
      height: 50,
      width: 'auto',
      shadowColor: theme.colors.gray5,
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.1,
      shadowRadius: 8,
    }),

  },
  iconColumn: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: -20,
    ...(Platform.OS === 'android' && {
      marginLeft: 0,
    }),
  },
  icon: {
    width: 32,
    height: 32,
    borderRadius: 50,
    backgroundColor: theme.colors.gray3,
    justifyContent: 'center',
    alignItems: 'center',
    ...(props.preset === 'success' && {
      backgroundColor: theme.colors.success,
    }),
  },
  textColumn: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
    ...(Platform.OS === 'android' && {
      flexGrow: 1,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      marginHorizontal: 0,
      paddingVertical: 0,
    }),
  },
  title: {
    color: theme.colors.gray4,
    fontFamily: theme.fonts.primary,
    fontWeight: '700',
    fontSize: 14,
    ...(Platform.OS === 'android' && {
      letterSpacing: 0.25,
      lineHeight: 20,
      fontWeight: '500',
    }),
  },
  description: {
    color: theme.colors.gray8,
    fontFamily: theme.fonts.primary,
    fontWeight: '500',
    fontSize: 14,
  },
  actionColumn: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -20,
    marginRight: 10,
  },
  actionTouchable: {
    padding: 10,
    backgroundColor: theme.colors.gray12,
    borderRadius: 50,
    ...(Platform.OS === 'android' && {
      backgroundColor: 'transparent',
      paddingVertical: 10,
      paddingHorizontal: 3,
    }),
  },
  actionText: {
    color: theme.colors.tertiary,
    fontFamily: theme.fonts.primary,
    fontWeight: '700',
    ...(Platform.OS === 'android' && {
      color: theme.colors.primary,
      textTransform: 'uppercase',
    }),
  },
});
