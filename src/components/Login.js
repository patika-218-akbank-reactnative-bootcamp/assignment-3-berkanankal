import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';

const Login = () => {
  const [form, setForm] = useState({
    phoneNumber: '',
    firstName: '',
    lastName: '',
    userName: '',
  });

  const [selectedValue, setSelectedValue] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.phoneNumber}>
        <Picker
          style={styles.phoneNumberPicker}
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item label="+90" value="+90" />
          <Picker.Item label="+1" value="+1" />
          <Picker.Item label="+33" value="+33" />
        </Picker>
        <TextInput
          style={styles.phoneNumberInput}
          keyboardType="numeric"
          placeholder="Phone Number"
          onChangeText={phoneNumber => setForm({...form, phoneNumber})}
          value={form.phoneNumber}
        />
      </View>
      <TextInput
        style={styles.input}
        onChangeText={text => setForm({...form, firstName: text})}
        value={form.firstName}
        placeholder="First Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setForm({...form, lastName: text})}
        value={form.lastName}
        placeholder="Last Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setForm({...form, userName: text})}
        value={form.userName}
        placeholder="Username"
      />
      <TouchableOpacity style={styles.login_button}>
        <Text style={styles.login_text}>Giriş Yap</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  login_button: {
    backgroundColor: 'blue',
    height: 50,
    margin: 12,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  login_text: {
    color: 'white',
    fontSize: 18,
  },
  phoneNumberInput: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    flex: 2,
  },
  phoneNumberPicker: {
    flex: 1,
  },
  phoneNumber: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 12,
  },
});
