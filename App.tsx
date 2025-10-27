import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <Text>
          Note: The Crash issue is only happens on Android 11 When press on The
          TextInput Wrapped By Gesture Handler.
        </Text>
        <TextInput style={styles.input} placeholder="Enter text" />
      </View>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});
