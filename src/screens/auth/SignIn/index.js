import React, { useState } from "react";
import { SafeAreaView,ScrollView,View,Text, useAnimatedValue } from "react-native";
import { styles } from "./styles";
import { Auth_Header } from "../../../components/AuthHeader";
import  Input  from "../../../components/Input";
import  Checkbox  from "../../../components/Checkbox";
import  {Button}  from "../../../components/Button";
import Seperator from "../../../components/Seperator";
import  {GoogleLogin}  from "../../../components/GoogleLogin";
import SignUp from "../SignUp";

const SignIn = ({navigation}) => {
   const onSignUp= () => {
     navigation.navigate(SignUp)
   }
  const onBack= () => {
   navigation.goBack()
  }
return(
   <SafeAreaView>
      <ScrollView style={styles.container}>

         <Auth_Header title="Sign In" onBackPress={onBack}/>
         <Input label="Email" placeholder="example@gmail.com" />
         
         <Input isPassword label="Password" placeholder="*******" />
         

         <Button style={styles.button} title="Sign In"/>

         <Seperator title="Or Sign In with"/>

         <GoogleLogin/>
         <Text  style={styles.footerText}>Don't have an account? <Text onPress={onSignUp} style={styles.footerLink}>Sign Up</Text> </Text>
      
      </ScrollView>
</SafeAreaView>
)
}

export default SignIn;