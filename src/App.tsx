import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Router from './Router';
import { queryClient } from './services';
import { ToastContainer } from './components';

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ToastContainer>
          <QueryClientProvider client={queryClient}>
            <Router />
          </QueryClientProvider>
        </ToastContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
