import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable, Image, TextInput } from 'react-native';
import smurfImg from '../../assets/smurf.png';
import { useDispatch } from 'react-redux';
import { setSmurfName, fetchSmurfData } from '../redux/actions';

export default Login = ({ navigation }) => {
    const dispatch = useDispatch();
    const [smurfName, addname] = useState('Empty smurf');

    const loginPress = () => {
        dispatch(fetchSmurfData());
        navigation.navigate('home');
    }
    return (
        <View style={styles.container}>
            <Image style={styles.imageStyle} source={smurfImg} />
            <TextInput
                style={{ height: 50, width: 300, paddingLeft: 20, backgroundColor: 'azure', fontSize: 20 }}
                placeholder="Please enter smurf name!"
                onChangeText={(text) => addname(text)}
            />
            <Pressable onPress={loginPress}
                style={({ pressed }) => ({ ...styles.btnContainer, backgroundColor: pressed ? 'white' : 'blue' })}>
                <Text style={styles.btnText}>
                    Login!
                </Text>
            </Pressable>
        </View>
    );
};
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
    imageStyle: {
        height: 200, width: 150,
        resizeMode: 'contain',
        marginBottom: 50,
    },
    text: {
        color: 'black',
        fontSize: 20,
    },
});