import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import UserContext from '../context/UserContext';
import ThemeContext from '../context/ThemeContext';

const Profile = () => {
  const {user, setUser} = useContext(UserContext);
  const {theme, setTheme} = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <View style={styles.userInformations}>
        <Text style={styles.userInformationTexts}>
          <Text style={styles.bold}>Firstname</Text>: {user.firstName}
        </Text>
        <Text style={styles.userInformationTexts}>
          <Text style={styles.bold}>Lastname</Text>: {user.lastName}
        </Text>
        <Text style={styles.userInformationTexts}>
          <Text style={styles.bold}>Username</Text>: {user.userName}
        </Text>
        <Text style={styles.userInformationTexts}>
          <Text style={styles.bold}>Phone Number</Text>: {user.phoneNumber}
        </Text>
      </View>
      <View style={styles.themes}>
        <TouchableOpacity style={styles.box}>
          <Text style={styles.box_texts}>Dark</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Text style={styles.box_texts}>Light</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInformations: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
  userInformationTexts: {
    fontSize: 20,
    color: 'black',
  },
  themes: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box: {
    height: 150,
    width: 150,
    margin: 12,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  box_texts: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
