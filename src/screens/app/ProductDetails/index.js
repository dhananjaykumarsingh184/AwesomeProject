import  React from 'react';
import { styles } from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, ScrollView,Text, View,Pressable,Linking} from 'react-native';
import { Button } from '../../../components/Button';
import { ImageCarousel } from '../../../components/ImageCarousel';

    const ProductDetails =({ route,navigation }) => {
    //passing data between screens using - route
    const { product } = route?.params || {};
    console.log('product =>>', product);
    const onBackPress = () => {
        navigation.goBack();
    }

    const onContact= () => {
        //make a call
        const phone = '+918276990847'
        Linking.openURL(`tel:${phone}`);

        // send email
        const email = 'dhananjaykumarsingh184@gmail.com'
        Linking.openURL(`mail:${phone}`);
    }

        return (
            <SafeAreaView style={styles.safe}>
                <ScrollView style={styles.container}>
                    {product?.images?.length ? (
                            <ImageCarousel images={product?.images}/>
                    ) : (
                        <Image style={styles.image} source={{uri: product?.image}} />
                    )}
                        
                    <View style={styles.content}>
                        <Text style={styles.title}>{product?.title}</Text>  
                        <Text style={styles.price}>{product?.price}</Text>  
                        <Text style={styles.description}>{product?.description}</Text>  
                    </View>
                    <Pressable style={styles.backContainer} onPress={onBackPress}>
                        <Image style={styles.backIcon} source={require('../../../assets/tabs/back.png')} />
                    </Pressable>
                </ScrollView>
                <View style={styles.footer}  > 
                    <Pressable style={styles.bookmarkContainer}  >
                        <Image style={styles.bookmarkIcon} source={require('../../../assets/tabs/bookmark.png')}/>
                    </Pressable>
                    <Button onPress={onContact} style={styles.button} title="Contact Seller"/>
                  
                </View>
            </SafeAreaView>
        )
 }

 export default ProductDetails;