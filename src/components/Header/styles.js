import { StyleSheet } from "react-native";
import { colors } from "../../utils/color";

export const styles=StyleSheet.create({
container:{
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-between',
  padding:16,
  
  
},

title:{
    color:colors.black,
    fontWeight:'bold',
    fontSize:18,
    margin:5,
   
},
icon :{
  width:24,
  height:24,
},
space :{
  width:24
}
,
input:{
  alignContent:'center',
  alignSelf:'center',
  alignItems:'center',
  padding:5,
  margin:5,
  

}

,

})