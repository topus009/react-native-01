import React from 'react';
import { 
  StyleSheet,
  View,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Input = ({ onChangeText, input, onSearch }) => {
  return (
    <View style={styles.input_wrapper}>
      <TextInput
        style={styles.input}
        placeholder='Что ищем...?'
        onChangeText={(e) => onChangeText(e)}
        underlineColorAndroid='transparent'
        value={input}
      />
      <Icon 
        name='search' 
        size={30} 
        style={styles.icon_search}
        onPress={onSearch}
      />
    </View>
  );
}

export default Input

const styles = StyleSheet.create({
  input_wrapper: {
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: '#ffffff',
    alignSelf: 'stretch',
    marginBottom: 10,
    paddingRight: 10,
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 4,
  },
  input: {
    height: 60,
    fontSize: 20,
    color: '#000000',
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
  },
  icon_search: {
    color: '#000000',
    alignSelf: 'center',
  },
});