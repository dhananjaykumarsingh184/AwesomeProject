import React from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";


export const Auth_Header = ({title,onBackPress}) => {


    return (
      <View  style={styles.container}>  
      <Pressable style={styles.image} onPress={onBackPress} hitSlop={20}>
            <Image source={require('../../assets/auth_back.png')}/>
      </Pressable>
      <Text style={styles.title}>{title}</Text>
      </View>
    )
}