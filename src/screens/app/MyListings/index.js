import  React from 'react';
import { styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList, View,Text} from 'react-native';
import  {Header}  from '../../../components/Header';
import  {products}  from '../../../data/products';
import  {FavoriteItem}  from '../../../components/FavoriteItem';
import ProductDetails from '../ProductDetails';
 const MyListings =({navigation}) => {
    const onBack = () => {
        navigation.goBack();
    }

    const renderItem = ({item}) => {
        const onProductPress=() =>{
            navigation.navigate('ProductDetails',{product:item})
        }
        return (
            <FavoriteItem  imageClose={require('../../../assets/Vectordeletedustbin.png')} onPress={onProductPress}  {...item}
            />
        )
    }
        return (
            <SafeAreaView>
                <View style={styles.container}>
                <Header showBack onBackPress={onBack} style={styles.head}  title="My Listings"/>
                <FlatList 
                        showsHorizontalScrollIndicator={false}
                        vertical 
                        style={styles.list} 
                        data={products} 
                        renderItem={renderItem}
                        keyExtractor={(item) => String(item?.id)}  
                        ListHeaderComponent={<View style={{height:20}} />}
                        ListFooterComponent={<View style={{height:200}} />}
                  
                    />
                </View>
            </SafeAreaView>
        )
 }

 export default MyListings;