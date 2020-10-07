import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
interface props {
  onPress: () => void;
  text: string

}

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}


const CustomButton = (props: props) => {
  const { text, onPress } = props

  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: randomColor() }]} onPress={onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
});

export default CustomButton
