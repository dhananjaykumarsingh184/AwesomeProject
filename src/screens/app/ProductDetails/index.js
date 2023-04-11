import  React from 'react';
import { styles } from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView,Text} from 'react-native';

 const ProductDetails =({ route}) => {
    //passing data between screens using - route
    const { product } = route?.params || {};

        return (
            <SafeAreaView>
                <ScrollView style={styles.container}>
                <Text>{product?.title}</Text>  
                </ScrollView>
            </SafeAreaView>
        )
 }

 export default ProductDetails;