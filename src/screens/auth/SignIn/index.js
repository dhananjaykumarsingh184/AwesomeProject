import React, { useState } from "react";
import { View,Text, useAnimatedValue } from "react-native";
import { styles } from "./styles";
import { Auth_Header } from "../../../components/AuthHeader";
import  Input  from "../../../components/Input";
import { Checkbox } from "../../../components/Checkbox";
import { Button } from "../../../components/Button";
import Seperator from "../../../components/Seperator";
import { GoogleLogin } from "../../../components/GoogleLogin";

const SignIn = () => {
   const onSignUp=() =>{
      console.log("onSignUp press link")
   }
return(
 <View style={styles.container}>

    <Auth_Header title="Sign In"/>
    <Input label="Email" placeholder="example@gmail.com" />
    
    <Input isPassword label="Password" placeholder="*******" />
    

    <Button style={styles.button} title="Sign In"/>

    <Seperator title="Or Sign In with"/>

    <GoogleLogin/>
    <Text  style={styles.footerText}>Don't have an account? <Text onPress={onSignUp} style={styles.footerLink}>Sign Up</Text> </Text>
 

</View>
)
}

export default SignIn;