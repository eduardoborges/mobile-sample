import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Router from './Router';
import { queryClient } from './services';

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}

export default App;
