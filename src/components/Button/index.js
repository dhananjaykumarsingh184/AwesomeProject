import React from "react";
import { Pressable, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export const Button = ({title,onPress}) => {
const signUp=() => {
    console.log("signup clicked");
}
    return (
       <TouchableOpacity onPress={onPress} activeOpacity={0.5} style={(styles.container)} >
        <Text style={styles.title}>{title}</Text>
       </TouchableOpacity>
    )
}
 