import  React ,{useState}from 'react';
import { styles } from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, ScrollView,View,Text,value, TouchableOpacity,ActivityIndicator, Pressable, KeyboardAvoidingView} from 'react-native';
import { Header } from '../../../components/Header';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Input from '../../../components/Input';
import { Button } from '../../../components/Button';
import { categories } from '../../../data/categories';


 const CreateListing =({navigation}) => {
    
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState({});
    console.log("values >>>>>", values)
    const onBack = () => {
        navigation.goBack();
    }
    
    const uploadNewImage = async() => {
    //   const result = await launchCamera();
        setLoading(true);
        const result = await launchImageLibrary();
        console.log('result ......' ,result);
        if(result?.assets.length){
            setImages(list => ([...list,...result?.assets]))
            setLoading(false);
        }
        console.log('images >>>',images);
    }

    const onDeleteImage=(image)=>{
        setImages((list) =>{
            const filteredImages = list.filter(img => img?.fileName !== image?.fileName );
            return filteredImages;
        })
    }

    const onChange=(value, key) => {
        setValues((val) => ({...val,[key]:value}));
    }

    

    return (
            <SafeAreaView>
               
                <Header showBack onBackPress={onBack} title={'Create a new listing'}/>
                <ScrollView style={styles.container}>
                <KeyboardAvoidingView behavior='position'>
                    <Text style={styles.sectionTitle}>Upload photos</Text>
                    <View style={styles.imageRow} >
                            <TouchableOpacity disabled={loading} onPress={uploadNewImage} style={styles.uploadConatiner}>
                                    <View style={styles.uploadCircle}>
                                    <Text style={styles.uploadPlus}>+</Text>
                                    </View>
                            </TouchableOpacity>
                        
                            {images?.map(image => (
                                        <View key={image?.fileName}  style={styles.imageCont} >
                                        <Image  style={styles.image} source={{uri : image?.uri}}/>
                                        <Pressable hitSlop={20}  onPress={() => onDeleteImage(image)}  >
                                        <Image style={styles.delete} source={require('../../../assets/Shapeclose.png')}/>
                                        </Pressable>
                                        </View>
                            ))}
                                {loading ? (
                                    <ActivityIndicator />
                                    ) : null}
                    </View>
                            <Input placeholder="Listing Title" label="Title" value={values.title} onChangeText={(v) => onChange(v,'title')}/>
                            <Input placeholder="Enter Price in Rupee" label="Price" value={values.price} onChangeText={(v) => onChange(v,'price')} keyboardType="numeric"/>
                            <Input placeholder="Select the category" label="Category" value={values.category} onChangeText={(v) => onChange(v,'category')} type="picker" options={categories}/>
                            
                            <Input style={styles.textArea}  placeholder="Tell us more" label="Description" value={values.description} onChangeText={(v) => onChange(v,'description')} multiline/>
                    </KeyboardAvoidingView>     
                            <Button style={styles.submit}  title="Submit" />        
                        
                </ScrollView>
                
            </SafeAreaView>
        )
 }

 export default CreateListing;