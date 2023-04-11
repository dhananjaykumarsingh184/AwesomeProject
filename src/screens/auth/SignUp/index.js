import React, { useState } from "react";
import { SafeAreaView,ScrollView,View,Text, useAnimatedValue } from "react-native";
import { styles } from "./styles";
import { Auth_Header } from "../../../components/AuthHeader";
import  Input  from "../../../components/Input";
import  {Checkbox}  from "../../../components/Checkbox";
import  {Button}  from "../../../components/Button";
import Seperator from "../../../components/Seperator";
import  {GoogleLogin}  from "../../../components/GoogleLogin";
import SignIn from "../SignIn";

const SignUp = ({navigation}) => {
   const [checked,setChecked] = useState(false); 
   const onSignIn=() =>{
    navigation.navigate(SignIn)
   }
   const onBack = () => {
      navigation.goBack()
   }
return(
 <SafeAreaView>
      <ScrollView style={styles.container}>

         <Auth_Header title="Sign Up" onBackPress={onBack}/>

         <Input label="Name" placeholder="Dhananjay Kumar Singh" />
         
         <Input label="Email" placeholder="example@gmail.com" />
         
         <Input isPassword label="Password" placeholder="*******" />
         
         <View style={styles.agreeRow}> 
            <Checkbox checked={checked} onCheck={setChecked} /> 
            <Text  style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}>Terms</Text> & <Text style={styles.agreeTextBold}> Privacy</Text></Text>
         </View>

         <Button style={styles.button} title="Sign Up"/>

         <Seperator title="Or sign up with"/>

         <GoogleLogin/>
         <Text  style={styles.footerText}>Already have an account? <Text onPress={onSignIn} style={styles.footerLink}>Sign In</Text> </Text>
      

      </ScrollView>
</SafeAreaView>
)
}

export default SignUp;