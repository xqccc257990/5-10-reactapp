/*
 * @Author: your name
 * @Date: 2020-10-06 16:53:30
 * @LastEditTime: 2020-10-06 18:34:23
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
import Styles from './style'
interface props {
  navigation: any;

}

const StartPage = (props: props) => {
  function onToLoginPage() {
    props.navigation.navigate('LoginRoute2')
  }

  function onToHomePage() {
    props.navigation.navigate('AppRoute')
  }
  return (
    < View style={Styles.container} >
      <Text>启动页---</Text><TouchableOpacity onPress={onToLoginPage}>
        <Text>登录失效，跳转到登录页面</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onToHomePage}>
        <Text>开启APP</Text>
      </TouchableOpacity>
    </View >
  )
}

export default StartPage;
