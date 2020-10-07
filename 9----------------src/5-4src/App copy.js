import * as React from 'react';
import { View, Text, StatusBar, Button, StyleSheet, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// 导入 SafeAreaProvider ，包裹根组件路由
import { SafeAreaProvider } from 'react-native-safe-area-context';
// 包裹组件
import SafeAreaView from 'react-native-safe-area-view';


function Screen1({ navigation }) {
  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar translucent={true} backgroundColor="rgba(0, 0, 0, 0)" />
      <ImageBackground style={[styles.imgBackground]} source={require('./img/my_img_bg.png')}>
        <Text>你好世界</Text>
      </ImageBackground>
      <Text style={{ color: '#fff' }}>Light Screen</Text>
      <Button
        title="Next screen"
        onPress={() => navigation.navigate('Screen2')}
        color="#fff"
      />
    </SafeAreaView>
  );
}

function Screen2({ navigation }) {
  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar translucent={true} backgroundColor="rgba(0, 0, 0, 0)" />
      <ImageBackground style={[styles.imgBackground]} source={require('./img/my_img_bg.png')}>
        <Text>另一个组件</Text>
      </ImageBackground>
      <Button
        title="Next screen"
        onPress={() => navigation.navigate('Screen1')}
      />
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Screen1" component={Screen1} />
          <Stack.Screen name="Screen2" component={Screen2} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  imgBackground: {
    flex: 0,
    height: 280,
    width: "100%",
  },
});