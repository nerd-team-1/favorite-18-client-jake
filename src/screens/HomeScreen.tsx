import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, SafeAreaView, StyleSheet, View} from 'react-native';
import {CommonStackParamList} from '../navigations/CommonStackNavigator';
import {commonNavigations} from '../constants';

type HomeScreenProps = StackScreenProps<
  CommonStackParamList,
  typeof commonNavigations.HOME
>;

function HomeScreen({navigation}: HomeScreenProps) {
  return (
    <SafeAreaView>
      <View>
        <Button
          title="로그인 화면으로 이동"
          onPress={() => navigation.navigate(commonNavigations.LOGIN)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default HomeScreen;
