import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default Account = ({ navigation }) => {
  const openHomePress = () => {
    navigation.navigate('home');
  }
  return (
    <View style={styles.container}>
      <Pressable onPress={openHomePress}
        style={({ pressed }) => ({ ...styles.btnContainer, backgroundColor: pressed ? 'white' : 'blue' })}>
        <Text style={styles.btnText}>
          Open Home!
                </Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    padding: 20,
    borderRadius: 10,
    marginTop: 30,
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});