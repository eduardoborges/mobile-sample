import React from 'react';
import { QueryClientProvider } from 'react-query';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Router from './Router';
import { q } from './services';

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={q}>
        <Router />
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}

export default App;
