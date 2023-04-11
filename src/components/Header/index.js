import React, { useState } from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Input from "../Input";


 export const Header = ({title, onBackPress,onLogout,showLogout,showSearch,onSearch ,keyword,showBack}) => {

const [showSearchInput,setShowSearchInput] = useState(false);
   
const onSearchClick= () => {
  setShowSearchInput(s => !s)
}
return (
    <View>
            <View  style={styles.container}>  
            {showBack ? (
                <Pressable  onPress={onBackPress} hitSlop={20}>
                    <Image style={styles.icon} source={require('../../assets/tabs/back.png')}/>
                </Pressable>
            ) : showSearch ?(
                  <Pressable  onPress={onSearchClick} hitSlop={20}>
                      <Image style={styles.icon} source={require('../../assets/tabs/search.png')}/>
                  </Pressable>
              ) : <View style={styles.space}></View>}

             <Text style={styles.title}>{title}</Text>
          {showLogout ? (
                  <Pressable  onPress={onLogout} hitSlop={20}>
                      <Image style={styles.icon} source={require('../../assets/tabs/Logout.png')}/>
                  </Pressable>
          )   : <View style={styles.space}></View> }
          </View>

        {showSearchInput ? (
          <Input onChangeText={onSearch} value={keyword} style ={styles.input}placeholder="Type your kyeword"/>
        ): null}
     </View>  

    )
}
