import { StyleSheet } from "react-native";
import { colors } from "../../utils/color";

export const styles=StyleSheet.create({
container:{
  marginHorizontal:8,
  flexDirection:'column',
  alignItems:'center',
  justifyContent:'space-between',
  margin:20,
  paddingVertical:8,

  
},
imageContainer:{
backgroundColor:colors.grey,
padding:8,
borderRadius:6,

},
title:{
    color:colors.grey,
    fontSize:14,
    marginBottom:8,
    fontWeight:500,
 
},
image :{
  width:35,
  height:35,

},
})