import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default SuccessScreen = ({ navigation }) => {
    const openHomePress = () => {
        navigation.navigate('home');
    }
    return (
        <View style={styles.container}>
            <Text style={styles.btnText}>
                Welcome to D Coding Studio!
            </Text>
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
        color: 'black',
        fontSize: 25,
        alignSelf:'center',
        fontWeight: 'bold',
    },
});