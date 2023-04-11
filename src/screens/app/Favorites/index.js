import  React from 'react';
import { styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList, View,Text} from 'react-native';
import  {Header}  from '../../../components/Header';
import  products  from '../../../data/products';
import  {FavoriteItem}  from '../../../components/FavoriteItem';
 const Favorites =() => {
    const renderItem = ({item}) => {
        return (
            <FavoriteItem  
                {...item}
            />
        )
    }
        return (
            <SafeAreaView>
                <View style={styles.container}>
                <Header style={styles.head}  title="Favorites"/>
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

 export default Favorites;