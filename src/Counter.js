import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { Context } from "../congifureStore";

const Counter = () => {
  const { store, dispatch } = useContext(Context);

  return (
    <View>
      <Text>You clicked {store.count} times</Text>
      <TouchableOpacity onPress={() => dispatch({ type: 'increment'})}>
        <Text>+</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch({ type: 'decrement'})}>
        <Text>-</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch({ type: 'reset'})}>
        <Text>Reset</Text>
      </TouchableOpacity>
    </View>
  )
};

export default Counter;