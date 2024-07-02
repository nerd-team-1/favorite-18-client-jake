import React from 'react';
import {StyleSheet} from 'react-native';
import AuthStackNavigator from '../stack/AuthStackNavigator';
import MainDrawerNavigator from '../drawer/MainDrawerNavigator';

function RootNavigator() {
  const isLogin = false;

  return <>{isLogin ? <MainDrawerNavigator /> : <AuthStackNavigator />}</>;
}

const styles = StyleSheet.create({});

export default RootNavigator;
