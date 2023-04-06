import { StyleSheet } from "react-native";
import { colors } from "../../utils/color";

export const styles=StyleSheet.create({

container:{
flexDirection:'row',
alignItems:'center',
marginVertical:20,
},
line:{
    height:1,
    backgroundColor:colors.grey,
    flex:1,

        
},
text:{
    fontWeight:500,
    color:colors.blue,
    marginHorizontal:5,
},


})