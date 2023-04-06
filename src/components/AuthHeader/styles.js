import { StyleSheet } from "react-native";
import { colors } from "../../utils/color";

export const styles=StyleSheet.create({
container:{
  flexDirection:'row',
  alignItems:'center',
  marginBottom:10,
},
image:{
    width:18,
    height:18,
},
title:{
    color:colors.blue,
    fontWeight:500,
    fontSize:26,
    //marginLeft:8
    paddingHorizontal:16
},


})