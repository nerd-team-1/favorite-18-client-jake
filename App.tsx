import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <View>
        <Text>기본 뷰페이지</Text>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
