import { StyleSheet } from "react-native";
import { colors } from "../../../utils/color";

export  const styles=StyleSheet.create({
container: {
padding:24,

},
agreeRow:{
    flexDirection:'row',
    margin:5,
},
agreeText:{
    paddingLeft:13,
    color:colors.blue,
    fontSize:16,
},
agreeTextBold:{
    fontWeight:'bold',
    
},
button:{
    marginVertical:21,
},
footerText:{
fontSize:14,
color:colors.blue,
alignItems:'center',
alignContent:'center',
textAlign:'center',
marginVertical:10,
},
footerLink:{
    fontWeight:500,
    marginHorizontal:5,

},
})
