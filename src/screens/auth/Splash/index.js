import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { Button } from "../../../components/Button";

const Splash = () => {
    const signIn=() => {
        console.log("Sign In Clicked");
    }
return(
 <View style={styles.container}   >
    <Image resizeMode="contain" style={styles.image} source={require('../../../assets/Capture.jpg')} />
     <View style={styles.titleContainer}>
        <Text style={styles.title}>You'll Find </Text>
        <Text style={[styles.title, styles.innerTitle]}>All your need  </Text>
        <Text style={styles.title}>Here!</Text>
    </View>
    <Button title="Sign Up" />
    <Pressable hitSlop={10} onPress={signIn}>
        <Text style={styles.footerText}>Sign Up</Text>
    </Pressable>
</View>
)
}

export default Splash;