import { StyleSheet } from "react-native";
import { colors } from "../../utils/color";

export const styles=StyleSheet.create({

container:{
    marginBottom:10,
},
label:{
    fontSize: 14,
    fontWeight:500,
    color:colors.blue,    
},
inputContainer:{
    borderWidth:1,
    width:303,
    height:60,
    borderRadius:14,
    marginTop:5,
    borderColor:colors.grey,
    flexDirection:'row',
    alignItems:'center'
},
input:{
    paddingHorizontal:16,
    paddingVertical:20,
    flex:1,
},
image:{
    width:24,
    height:24,
    marginHorizontal:16,
    

}


})