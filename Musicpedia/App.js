import React from 'react';
import AuthNavigation from './components/AuthNavigation';
import { NavigationContainer } from '@react-navigation/native';
import Nilai from './components/Nilai'

const App = () => {
  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
};

export default App;
