import { StyleSheet } from "react-native";
import { colors } from "../../../utils/color";
export const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    sectionTitle:{
        flex:1,
     color:colors.grey,
     fontWeight:'500',
     fontSize:20,
     marginBottom:16
    
    },

    item : {
        paddingVertical:8,
        paddingHorizontal:16,
        marginVertical:8,
    },
    sectionHeader:{
        flexDirection:'row',
        justifyContent:'space-between'
       
    },
    icon:{
       
    },

})