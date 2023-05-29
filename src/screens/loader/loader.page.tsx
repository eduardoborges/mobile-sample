import React from 'react';

import { ActivityIndicator, StyleSheet, View } from 'react-native';

const styles = () => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinner: {
    width: 100,
  },
});

export default function LoaderScreen() {
  const s = styles();
  return (
    <View style={s.container}>
      <ActivityIndicator size="large" style={s.spinner} />
    </View>
  );
}
