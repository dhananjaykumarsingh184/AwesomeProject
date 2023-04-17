import { StyleSheet ,Dimensions} from "react-native";
import { colors } from "../../utils/color";

const { height,width } = Dimensions.get('window');

export const styles=StyleSheet.create({

image:{
    width:width,
    height:height * 0.45,
    
},
list:{
    
},
paginationLine:{
    height:4,
    width:20,
    borderRadius:10,
    backgroundColor:colors.white,
    margin:5,
  

},
pagination:{
    flexDirection:'row',
    alignItems:'center',
    alignSelf:'center',
    position:'absolute',
    bottom:50,

},

activeLine:{
    backgroundColor:colors.black,
    width:30,
},


})