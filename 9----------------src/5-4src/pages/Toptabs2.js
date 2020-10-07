/*
 * @Author: your name
 * @Date: 2020-10-06 16:53:30
 * @LastEditTime: 2020-10-07 15:59:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /TSReactNativeDemo/src/pages/Toptabs2.js
 */
import { createMaterialTopTabNavigator } from 'react-navigation'
import Home from '../pages/Home/Detail/index'
import Login from '../pages/Login/index'
// import Five from '../pages/Five'

export default createMaterialTopTabNavigator(
  {
    Home: {
      screen: Home, // 配置页面
      navigationOptions: {
        tabBarLabel: 'Home'
      }
    },
    Login: {
      screen: Login,
      navigationOptions: {
        tabBarLabel: 'Login'
      }
    }
    // Five: {
    //   screen: Five,
    //   navigationOptions: {
    //     tabBarLabel: 'Five'
    //   }
    // }
  },
  {
    initialRouteName: 'Home',
    lazy: true,
    tabBarOptions: {
      scrollEnabled: true,
      upperCaseLabel: false, // 是否大写
      activeTintColor: 'red', // 活动选项卡
      inactiveTintColor: 'red', // "非活动" 选项卡
      tabStyle: {
        // 选项卡样式
        // width: 60,
        // paddingTop: 35,
        paddingBottom: 4
      },
      style: {
        backgroundColor: 'white' // 头部导航栏样式
      },
      indicatorStyle: {
        backgroundColor: 'red' // 指示器样式
      }
    }
  }
)

