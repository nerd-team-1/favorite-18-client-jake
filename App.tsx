import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import CommonStackNavigator from './src/navigations/CommonStackNavigator';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <CommonStackNavigator />
    </NavigationContainer>
  );
}

export default App;
