/*
 * @Author: your name
 * @Date: 2020-10-06 16:53:30
 * @LastEditTime: 2020-10-07 15:53:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /TSReactNativeDemo/src/pww/index.js
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import {
  createMaterialTopTabNavigator
} from '@react-navigation/material-top-tabs';
import Styles from './style'
interface props {
  navigation: any;

}

const Tabs = createMaterialTopTabNavigator()
const StartPage = (props: props) => {
  function onToLoginPage() {
    props.navigation.navigate('LoginRoute2')
  }

  function onToHomePage() {
    props.navigation.navigate('AppRoute')
  }
  return (
    < View style={Styles.container} >
      <Text>我的详情---</Text>
      <Tabs.Navigator
        tabBarOptions={{}}
      >
        {/* <Tabs.Screen
          name={{ d }}
        >

        </Tabs.Screen> */}

      </Tabs.Navigator>
      <TouchableOpacity onPress={onToHomePage}>
        <Text>开启APP</Text>
      </TouchableOpacity>
    </View >
  )
}

export default StartPage;
