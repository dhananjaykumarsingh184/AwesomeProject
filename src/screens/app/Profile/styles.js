import { StyleSheet } from "react-native";
import { colors } from "../../../utils/color";
 
export const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex:1,
    },
    name:{
        fontSize:24,
        fontWeight:'bold',
        color:colors.black,
        margin:8,
    },
    email:{
        
       color:colors.grey,
        margin:8,
     },
     content:{
        flex:1,
     },

    addButton:{},

})