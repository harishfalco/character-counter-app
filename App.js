/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
} from 'react-native';

const App = () => {
  const [value, setValue] = useState('');
  const [count, setCount] = useState(280);

  const handleChangeText = e => {
    setValue(e);
    setCount(280 - value.length);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <TextInput
            style={styles.textStyle}
            placeholder="enter text"
            value={value}
            onChangeText={handleChangeText}
            multiline
            numberOfLines={4}
            editable={count > 0}
          />
          <View style={styles.remainingChar}>
            <Text> {count} characters remaining</Text>
          </View>
          <View style={styles.btnStyle}>
            <Button title="post tweet" disabled={count <= 0} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    borderWidth: 2,
    borderRadius: 15,
    fontSize: 16,
    margin: 10,
  },
  btnStyle: {
    width: 200,
    color: 'red',
    alignSelf: 'center',
    borderRadius: 10,
  },
  remainingChar: {
    alignSelf: 'center',
    fontSize: 30,
    padding: 18,
    color: 'red',
  },
});

export default App;
