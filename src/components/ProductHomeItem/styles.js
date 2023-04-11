import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../utils/color";

const {width}=Dimensions.get('window')
console.log('width :>>', width);

export const styles=StyleSheet.create({
container:{
    margin:8,
    padding:8,
},
title:{
    color:colors.grey,
    paddingVertical:8,
},
image :{
  width:(width-64)/2,
  height:220,
  borderRadius:8,
},
price:{

}
})