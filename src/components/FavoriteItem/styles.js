import { StyleSheet } from "react-native";
import { colors } from "../../utils/color";
export const styles=StyleSheet.create({
container:{
paddingVertical:16,
flexDirection:'row',
marginHorizontal:24,
borderBottomColor: colors.borderColor,
borderBottomWidth:1,

},
image:{
    width:100,
    height:100,
    borderRadius:10,
    marginRight:20,
    
},
content:{
    flex:1,
},

title:{
    color: colors.grey,
    paddingVertical:8,
},
price : {
    color: colors.black,
    paddingBottom:8,
}
,
imageClose:{
    
    marginLeft:8,

}
})