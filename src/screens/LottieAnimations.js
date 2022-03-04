import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Pressable,
    Image,
} from 'react-native';
import smurfImg from '../../assets/smurf.png';
import LottieView from 'lottie-react-native';

const LottieAnimation = () => {
    const onPlayPress = () => {

    }
    return (
        <View style={styles.container}>
            {/* <Image style={styles.imageStyle} source={smurfImg} /> */}
            <LottieView
                style={{ height: 300, width: 300 }}
                source={require('../assets/happy.json')}
                autoPlay
            />
            <LottieView
                style={{ height: 200, width: 300 }}
                source={require('../assets/welocme.json')}
                autoPlay
            />
             <LottieView
                style={{ height: 200, width: 300 }}
                source={require('../assets/success.json')}
                autoPlay
            />

            <Pressable
                onPress={onPlayPress}
                style={({ pressed }) => ({
                    ...styles.btnContainer,
                    backgroundColor: pressed ? 'white' : 'blue',
                })}>
                <Text style={styles.btnText}>YO man</Text>
            </Pressable>
        </View>
    );
};
export default LottieAnimation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:'white',
    },
    btnContainer: {
        padding: 20,
        borderRadius: 10,
    },
    btnText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    imageStyle: {
        height: 200,
        width: 150,
        resizeMode: 'contain',
        marginBottom: 50,
    },
    text: {
        color: 'black',
        fontSize: 20,
    },
});
