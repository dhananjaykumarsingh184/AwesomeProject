import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";


export const FavoriteItem = ({title,price,image,onPress}) => {

    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Image style={styles.image} source={{uri: image}} />
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>{price}</Text>
            </View>
            <Image style={styles.imageClose} source={require('../../assets/tabs/Shapeclose.png')} />
      
        </Pressable>
    )
}

