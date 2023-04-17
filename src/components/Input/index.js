import React, { useState } from "react";
import { Image, Modal, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";


 const Input = ({label,options,type,isPassword,value,onChangeText,multiline,placeholder}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isPickerModalVisible, setIsPickerModalVisible] = useState(false);
   
    const onEyesPress= () =>{
       setIsPasswordVisible(!isPasswordVisible);
      }
      const onSelect=(opt)=> {
         onChangeText(opt);
         setIsPickerModalVisible(false);
      }
     
    return (
    <View style={styles.container}>
       <Text style={styles.label}>{label}</Text>
       { type === 'picker' ? (
         <Pressable onPress={() => setIsPickerModalVisible(true)} style={styles.inputContainer} >        
           {value ? (
            <Text style={styles.input}>{value.title}</Text>
           ) : (
            <Text style={styles.placeholder}>{placeholder}</Text>
           )}
           

            <Image style={styles.arrow} source={require('../../assets/Vectorarrow.png')  }/>
            
       </Pressable>
       )  :  ( 
         <View style={styles.inputContainer} >        
            <TextInput placeholder={placeholder}  value={value} onChangeText={onChangeText} secureTextEntry={isPassword && !isPasswordVisible}  style={styles.input} multiline={true}/>
      
            { isPassword ? 
            <Pressable onPress={onEyesPress}>    
            <Image style={styles.image} source={isPasswordVisible ? require('../../assets/eye.png') : require('../../assets/eye_closed.png')  }/>
            </Pressable> : null }
          </View>
       )}
       <Modal visible={isPickerModalVisible}  >
         <TouchableOpacity activeOpacity={1} onPress={()=> setIsPickerModalVisible(false)} style={styles.modalWrapper} >
         <TouchableOpacity activeOpacity={1} style={styles.modalContent}>
            <Text style={styles.headerTitle}>Select options </Text>
            {options?.map(opt =>{
               if (!opt?.id){
                  return null;
               }
               const selected =value?.id === opt?.id;
               return (
                  <Text onPress={() => onSelect(opt)} style={[styles.optionText, selected ? styles.selectedOption : {}]}  key={opt?.title}>{opt?.title}</Text>
               )
            })}
         </TouchableOpacity>
         </TouchableOpacity>
       </Modal>
      
    </View>

    )
}

export default  Input ;