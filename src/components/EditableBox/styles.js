import { StyleSheet } from "react-native";
import { colors } from "../../utils/color";

export const styles=StyleSheet.create({

container:{

paddingHorizontal:16,
paddingVertical:8,
margin:4,
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 6,
},
shadowOpacity: 0.39,
shadowRadius: 8.30,

elevation: 8,
backgroundColor:colors.white,
marginVertical:12,
borderRadius:5,
},


input:{
    fontSize:14,
    fontWeight:'500',
    color:colors.blue,
},
label:{
    color:colors.grey,
    fontSize:12,
    marginBottom:8,
},




})