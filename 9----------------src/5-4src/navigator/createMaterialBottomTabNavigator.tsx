import React, { Component } from "react";
import { Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const tabBarIcon = (name: string) => (tintColor: string) => (
  <FontAwesome
    style={{ backgroundColor: "transparent" }}
    name={name}
    color={tintColor}
    size={22}
  />
);
const ExpenseScreen = () => {
  const navigationOptions = {
    tabBarIcon: tabBarIcon("shopping-cart"),
    tabBarLabel: "消费"
  };
  return (
    < View >
      <Text>VAEMC </Text>
      < Text > 消费 </Text>
    </View>

  );
}
const IncomeScreen = () => {
  const navigationOptions = {
    tabBarIcon: tabBarIcon("credit-cart"),
    tabBarLabel: "收入"
  };
  return (
    < View >
      <Text>VAEMC </Text>
      < Text > 收入 </Text>
    </View>

  );
}

const MyScreen = () => {
  const navigationOptions = {
    tabBarIcon: tabBarIcon("user"),
    tabBarLabel: "收入"
  };
  return (
    < View >
      <Text>VAEMC2 </Text>
      < Text > 收入 2</Text>
    </View>

  );
}

export default createAppContainer(
  createMaterialBottomTabNavigator({
    Expense: { screen: ExpenseScreen },
    Income: { screen: IncomeScreen },
    My: { screen: MyScreen }
  })
);

