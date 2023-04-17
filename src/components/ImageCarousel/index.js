import React ,{useState}from "react";
import { Image,View, Dimensions } from "react-native";
import { styles } from "./styles";
import { FlatList } from "react-native-gesture-handler";

const {width} = Dimensions.get('window');

export const ImageCarousel = ({images}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    
    const handleScrollEnd=(e)=>{
        const horizontalOffset = e.nativeEvent.contentOffset.x;
        const index = Math.round(horizontalOffset / width) ;
        console.log('index', index);
        setActiveIndex(index)
    }

    const renderImage=({item}) =>{
        return (
            <Image style={styles.image} source={{uri : item}} />
        )
    }

    return (
        <View>
                <FlatList horizontal onMomentumScrollEnd={handleScrollEnd} pagingEnabled style={styles.list} data={images} renderItem={renderImage}/>
                <View style={styles.pagination}>  
                      {images?.map((_, i) => (
                        <View style={[styles.paginationLine, i === activeIndex ? styles.activeLine : {}]}/>
                      ))}
                </View>
        </View>
    )
}
 