import React from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";


export const Checkbox = ({checked,onCheck}) => {

    return (
        <TouchableOpacity onPress={ ()=> onCheck(!checked)} activeOpacity={0.5} style={styles.container}>
            {checked ? (
            <View style={styles.innerContaier}>
                <Image style={styles.checkIcon} source={require('../../assets/Check.png')}/>
            </View> ) : null}
        </TouchableOpacity>
      
    )
}
