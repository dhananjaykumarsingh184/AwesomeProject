import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../utils/color";
 
const { height } = Dimensions.get('window');
export const styles = StyleSheet.create({
    
    safe:{
        flex:1
    },
    footer:{
        padding:24,
        flexDirection:'row',
        alignItems:'center',
        marginRight:50,
    },
    
    
    container:{},

    image:{
        width:'100%',
        height:height * 0.45,
    },
    content:{
        backgroundColor:colors.white,
        borderTopLeftRadius:16,
        borderTopRightRadius:16,
        marginTop:-40,
        paddingHorizontal:24,
    },
    title:{
        marginTop:40,
        fontSize:24,
        fontWeight:'500',

    },
    price:{
        fontSize:30,
        fontWeight:'bold',
        marginVertical:8,

    },
    description: {
        color: colors.textgrey,
        fontWeight:'300',
        fontSize:20,
    },

    bookmarkContainer:{
        backgroundColor:colors.lightgrey,
        padding:5,
        borderRadius:8,
        marginRight:16,
    },
    bookmarkIcon:{
        
        width:20,
        height:20,
        padding:8,
        margin:8,

    },
    backContainer:{
        backgroundColor:colors.white,
        padding:18,
        margin:16,
        borderRadius:8,
        marginRight:16,
        position:'absolute',
    },
    backIcon:{
        width:20,
        height:20,
       
    },
})