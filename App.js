import React, {useReducer} from 'react';
import {View, StyleSheet} from 'react-native';
import {Context, initialState, reducer} from './congifureStore';
import Counter from './src/Counter';

const App = () => {
  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ store, dispatch}}>
      <View style={styles.container}>
        <Counter/>
      </View>
    </Context.Provider>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default App;