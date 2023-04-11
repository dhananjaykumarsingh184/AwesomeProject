import  React, { useEffect, useState } from 'react';
import { styles } from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList, View} from 'react-native';
import  {Header}  from '../../../components/Header';
import {categories}  from '../../../data/categories';
import {CategoryBox}  from '../../../components/CategoryBox';
import {products}  from '../../../data/products';
import {ProductHomeItem}  from '../../../components/ProductHomeItem';
import navigation  from '@react-navigation/native';
import ProductDetails from '../ProductDetails';
import SignIn from '../../auth/SignIn';
const Home = ({navigation}) => {

    const [selectedCategory,setSelectedCategory]= useState();
    const [filteredProducts,setFilteredProducts] = useState(products);
    const [keyword, setKeyword] = useState();
    console.log("keyword :>>",keyword);

    useEffect(() => {
        if (selectedCategory && !keyword) {
            const updatedProducts = products.filter((product) => product?.category === selectedCategory);
            setFilteredProducts(updatedProducts);
        } else if (selectedCategory && keyword) {
            const updatedProducts = products.filter((product) => product?.category === selectedCategory && product?.title?.toLowerCase().includes(keyword?.toLowerCase()));
            setFilteredProducts(updatedProducts);
        } else if (!selectedCategory && keyword) {
            const updatedProducts = products.filter((product) => product?.title?.toLowerCase().includes(keyword?.toLowerCase()));
            setFilteredProducts(updatedProducts);
        } else if (!keyword && !selectedCategory ) {    
            setFilteredProducts(products)
        }
    }, [selectedCategory, keyword])


    const renderCategoryItem= ({item,index}) => {
       
        return(
           <CategoryBox 
           onPress={()=> setSelectedCategory(item?.id)}
           isSelected={item?.id === selectedCategory}
           isFirst={index === 0}
           title={item?.title} 
           image={item?.image}/>
        )
    }
 
    const renderProductItem = ({item}) => {
        const onProductPress = (product) => {
            //passing data between screens using - route ,
            navigation.navigate('ProductDetails', {product})
                };

            return (
            <ProductHomeItem onPress={() => onProductPress(item)} {...item}/>
            )
    }
        return (
            <SafeAreaView >
               
                   <Header style={styles.head} onSearch={setKeyword} keyword={keyword} showSearch title="Find All Your Need"/>
                    <FlatList 
                        showsHorizontalScrollIndicator={false}
                        horizontal 
                        style={styles.list} 
                        data={categories} 
                        renderItem={renderCategoryItem} 
                        keyExtractor={(item,index) => String(index)}  
                    
                    />
                    
                    <FlatList 
                        numColumns={2} 
                        alwaysBounceVertical
                        style={styles.productlist}
                        data={filteredProducts} 
                        renderItem={renderProductItem}
                        keyExtractor={(item) => String(item.id)}  
                        ListHeaderComponent={<View style={{height:20}} />}
                        ListFooterComponent={<View style={{height:300}} />}
                       />

                
            </SafeAreaView>
        )
 }

 export default Home;