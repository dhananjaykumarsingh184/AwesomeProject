import React, { useState } from "react";
import { Image, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";


 const Input = ({label,placeholder,isPassword}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const onEyesPress= () =>{
    setIsPasswordVisible(!isPasswordVisible);
   }
    return (
    <View style={styles.container}>
       <Text style={styles.label}>{label}</Text>
       <View style={styles.inputContainer}>
            <TextInput secureTextEntry={isPassword && !isPasswordVisible} placeholder={placeholder} style={styles.input}/>
            
            { isPassword ? <Pressable onPress={onEyesPress}>    
            <Image style={styles.image} source={isPasswordVisible ? require('../../assets/eye.png') : require('../../assets/eye_closed.png')  }/>
            </Pressable> : null }
       </View>
    </View>

    )
}

export default  Input ;