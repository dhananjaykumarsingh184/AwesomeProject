import { StyleSheet } from "react-native";
import { colors } from "../../utils/color";

export const styles=StyleSheet.create({

container:{
flexDirection:'row',
alignItems:'center',
justifyContent:'space-between',
padding:8,
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

content:{
    margin:8,
},
title:{
    color:colors.blue,
    fontWeight:'bold',
    fontSize:24,
    marginBottom:6,

},
subtitle:{
    color:colors.grey,
    fontSize:12,
    marginBottom:8,
},
arrow:{
    height: 12,
    width: 6,
    left: 15,
    top: 18,
    alignSelf:'center',
    alignContent:'center',
    marginBottom:40,
    marginRight:20
    
    
},



})