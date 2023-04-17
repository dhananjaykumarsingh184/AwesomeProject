import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { Button } from "../../../components/Button";
import SignIn from "../SignIn";
import SignUp from "../SignUp";

const Splash = ({navigation}) => {
    console.log('navigation :>>',navigation)
   
    const onSignup= () => {
        console.log("Sign Up Clicked")
        navigation.navigate(SignUp)
    }
    const signIn=() => {
        console.log("Sign In Clicked")
        navigation.navigate(SignIn)
    }
    
return(
 <View style={styles.container}   >
    <Image resizeMode="contain" style={styles.image} source={require('../../../assets/Capture3.jpg')} />
     <View style={styles.titleContainer}>
        <Text style={styles.title}>You'll Find </Text>
        <Text style={[styles.title, styles.innerTitle]}>All your need</Text>
        <Text style={styles.title}>Here!</Text>
    </View>
    <Button style={styles.buttonCon} onPress={onSignup} title="Sign Up" />
    <Pressable hitSlop={10} onPress={signIn}>
        <Text style={styles.footerText}>Sign In</Text>
    </Pressable>
</View>

)}

export default Splash;