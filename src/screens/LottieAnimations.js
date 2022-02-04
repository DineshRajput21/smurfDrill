import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Pressable,
    Image,
} from 'react-native';
import smurfImg from '../../assets/smurf.png';

const LottieAnimation = () => {
    const onPlayPress = () => {

    }
    return (
        <View style={styles.container}>
            <Image style={styles.imageStyle} source={smurfImg} />
            <Pressable
                onPress={onPlayPress}
                style={({ pressed }) => ({
                    ...styles.btnContainer,
                    backgroundColor: pressed ? 'white' : 'blue',
                })}>
                <Text style={styles.btnText}>Play</Text>
            </Pressable>
        </View>
    );
};
export default LottieAnimation;

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
