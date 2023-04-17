import React from "react";
import { Image, Text, View,Pressable, TextInput } from "react-native";
import { styles } from "./styles";


 const EditableBox = ({label,editable,value,onChangeText, style}) => {
    return (
    <View  style={[styles.container, style]}>
           <Text style={styles.label}>{label}</Text>
            <TextInput editable={editable} value={value} onChangeText={onChangeText} style={styles.input}/>
    </View>

    )
}

export default React.memo(EditableBox);