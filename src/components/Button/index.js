import React from "react";
import { Pressable, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export const Button = ({title,onPressDo}) => {
const signUp=() => {
    console.log("signup clicked");
}
    return (
       <TouchableOpacity activeOpacity={0.5} style={(styles.container)} onPress={onPressDo}>
        <Text style={styles.title}>{title}</Text>
       </TouchableOpacity>
    )
}
 