import { StyleSheet } from "react-native";
import { colors } from "../../../utils/color";
export const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    sectionTitle:{
        
        color:colors.blue,
        fontWeight:'500',
        fontSize:16,
        marginBottom:8
    
    },
    image:{
        width:100,
        height:100,
        borderRadius:4,
       
    },
    uploadConatiner:{
        width:100,
        height:100,
        borderRadius:8,
        borderWidth:1,
        borderColor:colors.grey,
        borderStyle:'dotted',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        margin:8,
    },
    uploadCircle:{
        width:32,
        height:32,
        borderRadius:20,
        borderColor:colors.black,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    uploadPlus:{
        color:colors.black,
        fontSize:28,
        marginTop:-4,
    },
    imageRow:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap',

    },
    imageCont:{
        flexDirection:'row',
        marginRight:8,
        margin:8
    },
   
    delete:{
        width:24,
        height:24,
        marginLeft:-20,
        marginTop:-8
    },
    textArea:{
     maxHeight:150,
        
    },
    button:{
        marginBottom:16,
    }

})