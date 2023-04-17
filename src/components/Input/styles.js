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
    width:350,
    height:40,
    borderRadius:8,
    margin:5,
    borderColor:colors.grey,
    flexDirection:'row',
    alignItems:'center',
    alignSelf:'center',
},
input:{
    paddingHorizontal:16,
    flex:1,
    alignContent:'center',
    alignSelf:'center',
  
  
},
image:{
    width:24,
    height:24,
    marginHorizontal:16,
    

},
arrow:{
   
    marginHorizontal:16,
    transform:[{rotate: '90deg'}],
},
placeholder:{
    paddingHorizontal:16,
    flex:1,
    color:colors.lightgrey,
},
modalWrapper:{
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems:'center',
    flex:1,
},
modalContent:{
    backgroundColor:colors.white,
    borderRadius:8,
    padding:16,
    width:'70%',
    
},
headerTitle:{
    marginBottom:16,
    fontSize:16,
},
optionText:{
    paddingVertical:4,
    fontSize:16,
    color:colors.black,
},
selectedOption:{
    color:colors.blue,
    fontWeight:'bold',
},

})