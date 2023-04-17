import { StyleSheet } from "react-native";
import { colors } from "../../../utils/color";

export  const styles=StyleSheet.create({
container: {
padding:25,
flexDirection:'column',
alignItems:'center',
height:'100%',
borderWidth:1,


},
image:{
    width:250,
    height:200,
    alignContent:'center',
},
titleContainer:{
marginVertical:20,
},
title:{
    fontSize:40,
    fontWeight:'bold',
    textAlign:'center',
    color:colors.black,
},
innerTitle:{
    color:colors.orange,
    textDecorationLine:'underline',
},
footerText:{
    fontSize:18,
    fontWeight:'bold',
    textAlign:'center',
    marginTop:8,
    color:colors.blue,
    },

})
